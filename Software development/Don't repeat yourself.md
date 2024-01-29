#design-guideline 

 « Dans un système, toute connaissance doit avoir une représentation unique, non ambiguë, faisant autorité »
 
 DRY is about Knowledge

Code duplication is not the issue.

## Reasons to Change

Whatever the case, it doesn’t matter. The problem is that the rules might change independently. The business might realize that they can still sell more than three products at a time, and divide the products over multiple shipments. In example 2, we are now stuck with high coupling of both types of domain objects, to the same business rule, and indirectly to each other. Changing the rule for Basket, changes the rule for Shipment, but potentially has dangerous consequences in the real world. The example is of course blatantly simple to refactor, but legacy code is usually a lot harder.
## Knowledge

The business rule in my example is not “Max 3 products allowed”. There are in fact two business rules: “A basket is not allowed to have more than three products” and “A shipment is not allowed to have more than three products”. Two rules, no matter how similar, should have two individual representations in the model.

“Don’t Repeat Yourself” was never about code. It’s about knowledge. It’s about cohesion. If two pieces of code represent the exact same knowledge, they will always change together. Having to change them both is risky: you might forget one of them. On the other hand, if two identical pieces of code represent different knowledge, they will change independently. De-duplicating them introduces risk, because changing the knowledge for one object, might accidentally change it for the other object.

Looking at the reasons for change, is a very powerful modelling heuristic.

**References**
* https://verraes.net/2014/08/dry-is-about-knowledge/