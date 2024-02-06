---
tags:
  - "#article"
  - design-guideline
  - "#api"
created: 2024-02-06 Tue
---

# Richardson Maturity Model
https://martinfowler.com/articles/richardsonMaturityModel.html

## Extraits

### Level 0
> In a level 0 scenario, the hospital will expose a service endpoint at some URI. I then post to that endpoint a document containing the details of my request.

```XML
POST /appointmentService HTTP/1.1
[various other headers]

<openSlotRequest date = "2010-01-04" doctor = "mjones"/>
```
### Level 1
> The first step towards the Glory of Rest in the RMM is to introduce resources. So now rather than making all our requests to a singular service endpoint, we now start talking to individual resources.

So with our initial query, we might have a resource for given doctor.
```xml


POST /doctors/mjones HTTP/1.1
[various other headers]

<openSlotRequest date = "2010-01-04"/>
```
### Level 2
> HTTP. Level 2 moves away from this, using the HTTP verbs as closely as possible to how they are used in HTTP itself.

```xml
For the list of slots, this means we want to use GET.

GET /doctors/mjones/slots?date=20100104&status=open HTTP/1.1
Host: royalhope.nhs.uk
```

> HTTP defines GET as a safe operation, that is it doesn't make any significant changes to the state of anything


## Référence
* Livre [REST in Practice](https://www.amazon.ca/REST-Practice-Hypermedia-Systems-Architecture/dp/0596805829/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1707235059&sr=8-1)