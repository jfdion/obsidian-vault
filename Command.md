#oop #design-pattern #behavioral-pattern 

Encapsulate a request as an object, thereby letting you parameterize clients with different  Requests, queue or log requests, and support undoable operations.

```plantuml-svg
interface Command
Command : {abstract} execute()

class ConcreteCommand
ConcreteCommand : execute()

class Invoker

class Client

class Receiver
Receiver : action()

ConcreteCommand --|> Command
Command -u-* Invoker
Client -r-> Invoker
Client .r.> ConcreteCommand
Client -d-> Receiver
ConcreteCommand -d-> Receiver
```
