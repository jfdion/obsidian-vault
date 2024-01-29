#oop #design-pattern #behavioral-pattern

Define a family of algorithms, encapsulate each one, and make them interchangeable. Lets the algorithm vary independently from clients that use it.

```plantuml-svg
interface Strategy
Strategy : {abstract} execute()

class Context
Context : operation()

class ConcreteStrategy1
ConcreteStrategy1 : execute()

class ConcreteStrategy2
ConcreteStrategy2 : execute()

Strategy -l-* Context
Strategy <|-d- ConcreteStrategy1
Strategy <|-d- ConcreteStrategy2
```

![[Strategy pattern UML]]