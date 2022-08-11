
# Table
- [Demo](#demo)
- [Tools](#tools)
- [Roadmap](#roadmap)
- [API Endpoints](#apiendpoints)
- [Output](#output)


## demo



## tools
- Backend
    - Node js
    - Express js
    - Mongo DB
    - JWT

<!-- ROADMAP -->
## roadmap

- [x] ~~Build Rest API~~
- [x] ~~Implemented all CRUD Operations~~
- [x] ~~Created Fronted~~
- [x] ~~Integrated with backend~~
- []  Need to implement multiple delete in frontend



## apiendpoints
| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| [/users](#users) | Lists all available users |
| [/cards](#cards) | Lists all available cards |
| [/buckets](#bucket) | Lists all available buckets  
| [/auth](#auth) | End point for authentication


# API endpoints and their results

## auth
### Singup
    endpoint http://localhost:8000/signup POST

```js
{
    "name":"Karthik",
    "email":"Karthik392001@gmail.com",
    "password":"Kart@1234"
}
```

### Response
```js
{
    "name": "Karthik",
    "email": "Karthik392001@gmail.com",
    "cards": [],
    "_id": "62f2746930a890e85925fc06",
    "__v": 0
}
cookies: token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYyNzQ2OTMwYTg5MGU4NTkyNWZjMDYiLCJpYXQiOjE2NjAwNTY4OTV9.M8ceFrBGfvQ52OPH3GbwWXyZLZsj_jNELhaIfyZzDMs"
```

### Sign in
    endpoint http://localhost:8000/signin POST

```js
{
    "email":"Karthik392001@gmail.com",
    "password":"Kart@1234"
}
```

### Response
```js
{
    "_id": "62f2746930a890e85925fc06",
    "name": "Karthik",
    "email": "Karthik392001@gmail.com",
    "cards": [],
    "__v": 0
}

cookies: token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYyNzQ2OTMwYTg5MGU4NTkyNWZjMDYiLCJpYXQiOjE2NjAwNTY4OTV9.M8ceFrBGfvQ52OPH3GbwWXyZLZsj_jNELhaIfyZzDMs"
```

### Signout
    endpoint http://localhost:8000/signout GET
```js
{
    "message": "User signout successfully"
}
```


## bucket

### Create bucket
    endpoint http://localhost:8000/bucket POST
```js
{
    "name":"Entertainment"
}
```

### Response
```js
{
    "name": "Entertainment",
    "_id": "62f278fce89e3ab82ea7e4d7",
    "__v": 0
}
```

### Get all buckets
    endpoint http://localhost:8000/bucket GET
```js
[
    {
        "_id": "62f278f2e89e3ab82ea7e4d5",
        "name": "Education",
        "__v": 0
    },
    {
        "_id": "62f278fce89e3ab82ea7e4d7",
        "name": "Entertainment",
        "__v": 0
    }
]
```

## cards

### Create card
    endpoint http://localhost:8000/cards POST
```js
{
    "name":"Dude perfect",
    "link":"https://www.youtube.com/embed/gqdwyXC4Jwk",
    "user":"62f2746930a890e85925fc06",
    "bucket":"62f278fce89e3ab82ea7e4d7"
}
```
### Response
```js
{
    "name": "Dude perfect",
    "link": "https://www.youtube.com/embed/gqdwyXC4Jwk",
    "user": "62f2746930a890e85925fc06",
    "bucket": {
        "_id": "62f278fce89e3ab82ea7e4d7",
        "name": "Entertainment",
        "__v": 0
    },
    "played": false,
    "lastPlayed": "2022-08-11T03:27:40.412Z",
    "_id": "62f4773ac78a7457ae7b10ea",
    "__v": 0
}
```

### Get all cards of user
    endpoint http://localhost:8000/cards?user={token} GET
```js
[
    {
        "_id": "62f3d1272a88da1b16370d04",
        "name": "Connected components",
        "link": "https://www.youtube.com/embed/I6v0itcISSY",
        "user": "62f2746930a890e85925fc06",
        "bucket": {
            "_id": "62f282d50c77d7bd84218635",
            "name": "Graphs",
            "__v": 0
        },
        "played": true,
        "lastPlayed": "2022-08-10T15:40:03.249Z",
        "__v": 0
    },
    {
        "_id": "62f4773ac78a7457ae7b10ea",
        "name": "Dude perfect",
        "link": "https://www.youtube.com/embed/gqdwyXC4Jwk",
        "user": "62f2746930a890e85925fc06",
        "bucket": {
            "_id": "62f278fce89e3ab82ea7e4d7",
            "name": "Entertainment",
            "__v": 0
        },
        "played": false,
        "lastPlayed": "2022-08-11T03:27:40.412Z",
        "__v": 0
    }
]
```

### Edit card
    endpoint http://localhost:8000/cards PUT
```js
{
    "_id":"62f3d1272a88da1b16370d04",
    "lastPlayed":"10 Aug 2022 14:37:18 GMT",
    "played":"true"
}
```
### Response
```js
{
    "_id": "62f3d1272a88da1b16370d04",
    "name": "Connected components",
    "link": "https://www.youtube.com/embed/I6v0itcISSY",
    "user": "62f2746930a890e85925fc06",
    "bucket": {
        "_id": "62f282d50c77d7bd84218635",
        "name": "Graphs",
        "__v": 0
    },
    "played": true,
    "lastPlayed": "2022-08-10T14:37:18.000Z",
    "__v": 0
}
```

### Delete cards
    endpoint http://localhost:8000/cards DELETE

```js
{
    "cardIds":["62f3d1272a88da1b16370d04","62f4773ac78a7457ae7b10ea"]
}
```

### Response

```js
{
    "message": "Deleted cards successfully"
}
```