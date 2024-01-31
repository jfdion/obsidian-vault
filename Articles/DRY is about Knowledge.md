---
tags:
  - "#article"
  - "#design-guideline"
  - "#dry"
created: 2024-01-26 Fri
---
# DRY is about Knowledge
https://verraes.net/2014/08/dry-is-about-knowledge/
## Extraits
### Knowledge
> “Don’t Repeat Yourself” was never about code. It’s about knowledge. It’s about cohesion. If two pieces of code represent the exact same knowledge, they will always change together. Having to change them both is risky: you might forget one of them. On the other hand, if two identical pieces of code represent different knowledge, they will change independently. De-duplicating them introduces risk, because changing the knowledge for one object, might accidentally change it for the other object.

### Reasons to Change
> Whatever the case, it doesn’t matter. The problem is that the rules might change independently. The business might realize that they can still sell more than three products at a time, and divide the products over multiple shipments. In example 2, we are now stuck with high coupling of both types of domain objects, to the same business rule, and indirectly to each other. Changing the rule for Basket, changes the rule for Shipment, but potentially has dangerous consequences in the real world. The example is of course blatantly simple to refactor, but legacy code is usually a lot harder.