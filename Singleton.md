#oop #design-pattern #creational-pattern

Ensure a class only has one instance and provide a global point of access to it.

```plantuml-svg
class Singleton
Singleton : static uniqueInstance
Singleton : singletonData
Singleton : static instance()
Singleton : SingletonOperation()
```