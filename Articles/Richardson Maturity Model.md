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
GET /doctors/mjones/slots?date=20100104&status=open HTTP/1.1
Host: royalhope.nhs.uk

HTTP/1.1 200 OK
[various headers]

<openSlotList>
  <slot id = "1234" doctor = "mjones" start = "1400" end = "1450"/>
  <slot id = "5678" doctor = "mjones" start = "1600" end = "1650"/>
</openSlotList>
```

> HTTP defines GET as a safe operation, that is it doesn't make any significant changes to the state of anything
> \[...]
> An important consequence of this is that it allows any participant in the routing of requests to use caching

> To book an appointment we need an HTTP verb that does change state, a POST or a PUT
> \[...]
> If all goes well, the service replies with a response code of 201 to indicate that there's a new resource in the world.

```xml
POST /slots/1234 HTTP/1.1
[various other headers]

<appointmentRequest>
  <patient id = "jsmith"/>
</appointmentRequest>

HTTP/1.1 201 Created
Location: slots/1234/appointment
[various headers]

<appointment>
  <slot id = "1234" doctor = "mjones" start = "1400" end = "1450"/>
  <patient id = "jsmith"/>
</appointment>
```

> It's up to the protocol designer to decide what codes to use, but there should be a non-2xx response

### Level 3
> The final level introduces something that you often hear referred to under the ugly acronym of HATEOAS (Hypertext As The Engine Of Application State). It addresses the question of how to get from a list open slots to knowing what to do to book an appointment.

```xml
GET /doctors/mjones/slots?date=20100104&status=open HTTP/1.1
Host: royalhope.nhs.uk


```
## Référence
* Livre [REST in Practice](https://www.amazon.ca/REST-Practice-Hypermedia-Systems-Architecture/dp/0596805829/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1707235059&sr=8-1)