#oop #design-pattern #behavioral-pattern 

Provide a way to access the elements of an aggregate object sequentially without exposing its  underlying representation.

```plantuml-svg
class Client

interface Aggregate
Aggregate : {abstract} createIterator()

interface Iterator
Iterator : {abstract} next()

class ConcreteAggregate
ConcreteAggregate : createIterator(): Context

class ConcreteIterator
ConcreteIterator : next(): Context

ConcreteAggregate -u-|> Aggregate
ConcreteIterator -u-|> Iterator

Client --> Aggregate
Client --> Iterator
```