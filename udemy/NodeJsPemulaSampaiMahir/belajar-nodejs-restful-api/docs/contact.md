# Contact API Spec

## Create Contact API

Endpoint: POST /api/contacts

Headers:

- Authorization: Bearer unique-token

Request Body:

```json
{
  "first_name": "Gary",
  "last_name": "Sanderson",
  "email": "garysander@pzn.com",
  "phone": "077665454323"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "first_name": "Gary",
    "last_name": "Sanderson",
    "email": "garysander@pzn.com",
    "phone": "077665454323"
  }
}
```

Response Body Error

```json
{
  "errors": "Email is not valid format"
}
```

## Update Contact API

Endpoint: PUT /api/contacts/:id

Headers:

- Authorization: Bearer unique-token

Request Body:

```json
{
  "first_name": "Gary",
  "last_name": "Sanderson",
  "email": "garysander@pzn.com",
  "phone": "077665454323"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "first_name": "Gary",
    "last_name": "Sanderson",
    "email": "garysander@pzn.com",
    "phone": "077665454323"
  }
}
```

Response Body Error:

```json
{
  "errors": "Email is not valid format"
}
```

## Get Contact API

Endpoint: GET /api/contacts/:id

Headers:

- Authorization: Bearer unique-token

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "first_name": "Gary",
    "last_name": "Sanderson",
    "email": "garysander@pzn.com",
    "phone": "077665454323"
  }
}
```

Response Body Error:

```json
{
  "errors": "Contact is not found"
}
```

## Search Contact API

Endpoint: GET /api/contacts

Headers:

- Authorization: Bearer unique-token

Query params:

- name: Search by first_name or last_name, using like, optional
- email: Search by email using like, optional
- phone: Search by phone using like, optional
- page: number of pages, default 1
- size: size per page, default 10

Response Body Success:

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Gary",
      "last_name": "Sanderson",
      "email": "garysander@pzn.com",
      "phone": "077665454323"
    },
    {
      "id": 2,
      "first_name": "Derek",
      "last_name": "Westbrook",
      "email": "derekwest@pzn.com",
      "phone": "077665454323"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error:

```json
{
  "errors": "Contact is not found"
}
```

## Remove Contact API

Endpoint: DELETE /api/contacts/:id

Headers:

- Authorization: Bearer unique-token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Error:

```json
{
  "errors": "Contact is not found"
}
```
