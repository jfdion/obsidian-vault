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

### Classical
> state verification

```Java
public class OrderStateTester extends TestCase {
	private static String TALISKER = "Talisker";
	private static String HIGHLAND_PARK = "Highland Park";
	private Warehouse warehouse = new WarehouseImpl();
	
	protected void setUp() throws Exception {
		warehouse.add(TALISKER, 50);
		warehouse.add(HIGHLAND_PARK, 25);
	}
	public void testOrderIsFilledIfEnoughInWarehouse() {
		Order order = new Order(TALISKER, 50);
		order.fill(warehouse);
		assertTrue(order.isFilled());
		assertEquals(0, warehouse.getInventory(TALISKER));
	}
	public void testOrderDoesNotRemoveIfNotEnough() {
		Order order = new Order(TALISKER, 51);
		order.fill(warehouse);
		assertFalse(order.isFilled());
		assertEquals(50, warehouse.getInventory(TALISKER));
	}
```
### mockist
> behaviour verifiation

```Java
public class OrderInteractionTester extends MockObjectTestCase {
	private static String TALISKER = "Talisker";
	
	public void testFillingRemovesInventoryIfInStock() {
	//setup - data
		Order order = new Order(TALISKER, 50);
		Mock warehouseMock = new Mock(Warehouse.class);
		
		//setup - expectations
		warehouseMock.expects(once()).method("hasInventory")
			.with(eq(TALISKER),eq(50))
			.will(returnValue(true));
		warehouseMock.expects(once()).method("remove")
			.with(eq(TALISKER), eq(50))
			.after("hasInventory");
		
		//exercise
		order.fill((Warehouse) warehouseMock.proxy());
		
		//verify
		warehouseMock.verify();
		assertTrue(order.isFilled());
	}
	
	public void testFillingDoesNotRemoveIfNotEnoughInStock() {
		Order order = new Order(TALISKER, 51);    
		Mock warehouse = mock(Warehouse.class);
		
		warehouse.expects(once()).method("hasInventory")
			.withAnyArguments()
			.will(returnValue(false));
			
		order.fill((Warehouse) warehouse.proxy());
		
		assertFalse(order.isFilled());
	}
```

### Test double
> - **Dummy** objects are passed around but never actually used. Usually they are just used to fill parameter lists.
> - **Fake** objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an [in memory database](https://martinfowler.com/bliki/InMemoryTestDatabase.html) is a good example).
> - **Stubs** provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
> - **Spies** are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
> - **Mocks** are what we are talking about here: objects pre-programmed with expectations which form a specification of the calls they are expected to receive.