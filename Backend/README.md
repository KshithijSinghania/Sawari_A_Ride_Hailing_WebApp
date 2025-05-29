# User Registration API

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system.  
Requires a valid email, a first name (minimum 3 characters), and a password (minimum 6 characters).  
Returns a JWT token and the created user object upon success.

## Request Body

Send as JSON:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Required Fields

- `fullname.firstname` (string, min 3 chars, required)
- `fullname.lastname` (string, optional)
- `email` (string, valid email, required)
- `password` (string, min 6 chars, required)

## Responses

### Success

- **Status:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
        // ...other fields
      }
  }
  ```

### Validation Error

- **Status:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Please enter a valid email address",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Missing Fields

- **Status:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "All fields are required"
  }
  ```

## Example

```sh
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john.doe@example.com","password":"yourpassword"}'
```

---

# User Login API

## Endpoint

`POST /users/login`

## Description

Authenticates a user with email and password.  
Returns a JWT token and the user object upon successful login.

## Request Body

Send as JSON:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Required Fields

- `email` (string, valid email, required)
- `password` (string, min 6 chars, required)

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      // ...other fields
    }
  }
  ```

### Validation Error

- **Status:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Please enter a valid email address",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Invalid Credentials

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Example

```sh
curl -X POST http://localhost:4000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john.doe@example.com","password":"yourpassword"}'
```