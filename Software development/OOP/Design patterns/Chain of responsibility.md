#oop #design-pattern #behavioral-pattern 

Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

```plantuml-svg
interface Handler
Handler : {abstract} handleRequest()

class ConcreteHandler1
ConcreteHandler1 : handleRequest()

class ConcreteHandler2
ConcreteHandler2 : handleRequest()

class Client

Client -r-> Handler
ConcreteHandler1 -u-|> Handler
ConcreteHandler2 -u-|> Handler
Handler -l-> Handler : Successor
```