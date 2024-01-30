---
tags:
  - code
  - snippet
  - "#php"
language: PHP
created: 2024-01-30 Tue
last_updated: 2024-01-30 Tue
---
## Description
Using the repository pattern as a collection
### Interface

```PHP
interface UserRepository extends Countable, IteratorAggregate
{
    public function add(User $user): void;

    public function remove(User $user): void;

    public function ofId(string $userId): ?User;

    public function ofEmail(string $email): ?User;

    public function withActiveStatus(): self;

    public function registeredAfter(DateTimeInterface $date): self;

    public function registeredBefore(DateTimeInterface $date): self;

    public function getIterator(): Iterator;

    public function slice(int $start, int $size = 20): self;

    public function count(): int;
}
```

### Usage
```PHP
public function someMethod()
    {
        $users = $this->users
            ->withActiveStatus()
            ->registeredBefore(new DateTime('now'))
            ->registeredAfter(new DateTime('-30days'));

        $count = $users->count();

        return $users;
    }
```

### Abstract class 

```PHP
declare(strict_types=1);

namespace RepositoryExample\Common;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Iterator;

/**
 * Class DoctrineORMRepository
 * 
 * This is a custom abstract Doctrine ORM repository. It is meant to be extended by
 * every Doctrine ORM repository existing in your project.
 * 
 * The main features and differences with the EntityRepository provided by Doctrine is
 * that this one implements our repository contract in an immutable way.
 * 
 */
abstract class DoctrineORMRepository implements Repository
{
    /**
     * This is Doctrine's Entity Manager. It's fine to expose it to the child class.
     * 
     * @var EntityManagerInterface
     */
    protected $manager;
    /**
     * We don't want to expose the query builder to child classes.
     * This is so we are sure the original reference is not modified.
     * 
     * We control the query builder state by providing clones with the `query`
     * method and by cloning it with the `filter` method.
     *
     * @var QueryBuilder
     */
    private $queryBuilder;

    /**
     * DoctrineORMRepository constructor.
     * @param EntityManagerInterface $manager
     * @param string $entityClass
     * @param string $alias
     */
    public function __construct(EntityManagerInterface $manager, string $entityClass, string $alias)
    {
        $this->manager = $manager;
        $this->queryBuilder = $this->manager->createQueryBuilder()
            ->select($alias)
            ->from($entityClass, $alias);
    }

    /**
     * @inheritDoc
     */
    public function getIterator(): Iterator
    {
        yield from new Paginator($this->queryBuilder->getQuery());
    }

    /**
     * @inheritDoc
     */
    public function slice(int $start, int $size = 20): Repository
    {
        return $this->filter(static function (QueryBuilder $qb) use ($start, $size) {
            $qb->setFirstResult($start)->setMaxResults($size);
        });
    }

    /**
     * @inheritDoc
     */
    public function count(): int
    {
        $paginator = new Paginator($this->queryBuilder->getQuery());
        return $paginator->count();
    }

    /**
     * Filters the repository using the query builder
     *
     * It clones it and returns a new instance with the modified
     * query builder, so the original reference is preserved.
     *
     * @param callable $filter
     * @return $this
     */
    protected function filter(callable $filter): self
    {
        $cloned = clone $this;
        $filter($cloned->queryBuilder);
        return $cloned;
    }

    /**
     * Returns a cloned instance of the query builder
     *
     * Use this to perform single result queries.
     *
     * @return QueryBuilder
     */
    protected function query(): QueryBuilder
    {
        return clone $this->queryBuilder;
    }

    /**
     * We allow cloning only from this scope.
     * Also, we clone the query builder always.
     */
    protected function __clone()
    {
        $this->queryBuilder = clone $this->queryBuilder;
    }
}
```

### Implementation

```PHP
declare(strict_types=1);

namespace RepositoryExample\User;

use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\ORM\QueryBuilder;
use DomainException;
use RepositoryExample\Common\DoctrineORMRepository;

/**
 * Class DoctrineORMUserRepository
 * @package RepositoryExample\User
 */
final class DoctrineORMUserRepository extends DoctrineORMRepository implements UserRepository
{
    protected const ENTITY_CLASS = User::class;
    protected const ALIAS = 'user';

    /**
     * DoctrineORMUserRepository constructor.
     * @param EntityManagerInterface $manager
     */
    public function __construct(EntityManagerInterface $manager)
    {
        parent::__construct($manager, self::ENTITY_CLASS, self::ALIAS);
    }

    public function add(User $user): void
    {
        $this->manager->persist($user);
        // I usually implement flushing in a Command Bus middleware.
        // But you can flush immediately if you like.
    }

    public function remove(User $user): void
    {
        $this->manager->remove($user);
        // I usually implement flushing in a Command Bus middleware.
        // But you can flush immediately if you like.
    }

    public function ofId(string $id): ?User
    {
        $object = $this->manager->find(self::ENTITY_CLASS, $id);
        if ($object instanceof User) {
            return $object;
        }
        return null;
    }

    /**
     * @param string $email
     * @return User|null
     */
    public function ofEmail(string $email): ?User
    {
        try {
            $object = $this->query()
                ->where('user.email = :email')
                ->setParameter('email', $email)
                ->getQuery()->getSingleResult();
        } catch (NoResultException $e) {
            return null;
        } catch (NonUniqueResultException $e) {
            throw new DomainException('More than one result found');
        }
        return $object;
    }

    public function withActiveStatus(): UserRepository
    {
        return $this->filter(static function (QueryBuilder $qb) {
            $qb->where('user.active = true');
        });
    }

    public function registeredBefore(DateTime $time): UserRepository
    {
        return $this->filter(static function (QueryBuilder $qb) use ($time) {
            $qb->where('user.registeredAt < :before')
                ->setParameter(':before', $time, Types::DATETIME_MUTABLE);
        });
    }

    public function registeredAfter(DateTime $time): UserRepository
    {
        return $this->filter(static function (QueryBuilder $qb) use ($time) {
            $qb->where('user.registeredAt > :after')
                ->setParameter(':after', $time, Types::DATETIME_MUTABLE);
        });
    }
}
```

## References
* https://blog.mnavarro.dev/the-repository-pattern-done-right