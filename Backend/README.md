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

---

# Get User Profile API

## Endpoint

`GET /users/profile`

## Description

Returns the authenticated user's profile information.

## Authentication

Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other fields
  }
  ```

### Unauthorized

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

## Example

```sh
curl -X GET http://localhost:4000/users/profile \
  -H "Authorization: Bearer <jwt_token>"
```

---

# User Logout API

## Endpoint

`GET /users/logout`

## Description

Logs out the authenticated user by blacklisting the JWT token and clearing the cookie.

## Authentication

Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Unauthorized

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

## Example

```sh
curl -X GET http://localhost:4000/users/logout \
  -H "Authorization: Bearer <jwt_token>"
```

---

# Captain Registration API

## Endpoint

`POST /captains/register`

## Description

Registers a new captain in the system.  
Requires a valid email, a first name (minimum 3 characters), a password (minimum 6 characters), and vehicle details.  
Returns a JWT token and the created captain object upon success.

## Request Body

Send as JSON:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Required Fields

- `fullname.firstname` (string, min 3 chars, required)
- `fullname.lastname` (string, optional)
- `email` (string, valid email, required)
- `password` (string, min 6 chars, required)
- `vehicle.color` (string, min 3 chars, required)
- `vehicle.plate` (string, min 3 chars, required)
- `vehicle.capacity` (integer, min 1, required)
- `vehicle.vehicleType` (string, one of: `car`, `motorcycle`, `auto`, required)

## Responses

### Success

- **Status:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "...",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
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
curl -X POST http://localhost:4000/captains/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"Jane","lastname":"Smith"},"email":"jane.smith@example.com","password":"yourpassword","vehicle":{"color":"Red","plate":"XYZ123","capacity":4,"vehicleType":"car"}}'
```

---

# Captain Login API

## Endpoint

`POST /captains/login`

## Description

Authenticates a captain with email and password.  
Returns a JWT token and the captain object upon successful login.

## Request Body

Send as JSON:

```json
{
  "email": "jane.smith@example.com",
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
    "captain": {
      "_id": "...",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
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
curl -X POST http://localhost:4000/captains/login \
  -H "Content-Type: application/json" \
  -d '{"email":"jane.smith@example.com","password":"yourpassword"}'
```

---

# Get Captain Profile API

## Endpoint

`GET /captains/profile`

## Description

Returns the authenticated captain's profile information.

## Authentication

Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "captain": {
      "_id": "...",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // ...other fields
    }
  }
  ```

### Unauthorized

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## Example

```sh
curl -X GET http://localhost:4000/captains/profile \
  -H "Authorization: Bearer <jwt_token>"
```

---

# Captain Logout API

## Endpoint

`GET /captains/logout`

## Description

Logs out the authenticated captain by blacklisting the JWT token and clearing the cookie.

## Authentication

Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logout successfully"
  }
  ```

### Unauthorized

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## Example

```sh
curl -X GET http://localhost:4000/captains/logout \
  -H "Authorization: Bearer <jwt_token>"
```