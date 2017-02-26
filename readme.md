has-uuid
============

Utility for finding or filtering in array on uuid.

## Install

```sh
$ npm install --save has-uuid
```

## Usage

```js
import hasUuid from "has-uuid"

const collection = [
  { uuid: "03461560-fc25-11e6-bc64-92361f002671" },
  { uuid: "034618e4-fc25-11e6-bc64-92361f002671" },
  { uuid: "03461a74-fc25-11e6-bc64-92361f002671" }
]
const someUuid = "03461560-fc25-11e6-bc64-92361f002671"
const result = collection.find(hasUuid(someUuid))
// same as
const result2 = collection.find(item => item.uuid === someUuid)
```
