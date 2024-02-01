---
tags:
  - "#article"
  - "#tests"
created: 2024-01-31 Wed
---
# Mocks Aren't Stubs
https://martinfowler.com/articles/mocksArentStubs.html
## Lexique

* ***System Under Test (SUT)**
	* objet testé
* **Collaborator**
	* Objet nécessaire pour le test
## Extraits

### Classical TDD
> The **classical TDD** style is to use real objects if possible and a double if it's awkward to use the real thing. So a classical TDDer would use a real warehouse and a double for the mail service. The kind of double doesn't really matter that much. 
### Mockist TDD
>A **mockist TDD** practitioner, however, will always use a mock for any object with interesting behavior. In this case for both the warehouse and the mail service.

### Test double
> - **Dummy** objects are passed around but never actually used. Usually they are just used to fill parameter lists.
> - **Fake** objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an [in memory database](https://martinfowler.com/bliki/InMemoryTestDatabase.html) is a good example).
> - **Stubs** provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
> - **Spies** are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
> - **Mocks** are what we are talking about here: objects pre-programmed with expectations which form a specification of the calls they are expected to receive.

### Stubs
#### Setup
```Java
public interface MailService {
	public void send (Message msg);
}

public class MailServiceStub implements MailService {
	private List<Message> messages = new ArrayList<Message>();
	
	public void send (Message msg) {
		messages.add(msg);
	}
	public int numberSent() {
		return messages.size();
	}
}
```
#### Test
```Java
class OrderStateTester {

	public void testOrderSendsMailIfUnfilled() {
		Order order = new Order(TALISKER, 51);
		MailServiceStub mailer = new MailServiceStub();
		
		order.setMailer(mailer);
		order.fill(warehouse);
		
		assertEquals(1, mailer.numberSent());
	}
}
```