# User API Documentation

## Endpoints Overview
- POST `/users/register` - Register a new user
- POST `/users/login` - Login for existing user
- GET `/users/profile` - Get user profile
- GET `/users/logout` - Logout user

## 1. Register User
**POST** `/users/register`

### Request Body
```json
{
    "fullname": {
        "firstname": "John",     // Required, min 3 characters
        "lastname": "Doe"        // Optional, min 3 characters if provided
    },
    "email": "john@example.com", // Required, must be valid email format
    "password": "pass1234"       // Required, min 6 characters
}
```

### Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT token valid for 24 hours
    "user": {
        "_id": "65f8d12345678901234567890",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com"
    }
}
```

## 2. Login User
**POST** `/users/login`

### Request Body
```json
{
    "email": "john@example.com", // Required, must be valid email
    "password": "pass1234"       // Required, min 6 characters
}
```

### Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT token valid for 24 hours
    "user": {
        "_id": "65f8d12345678901234567890",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com"
    }
}
```

## 3. Get User Profile
**GET** `/users/profile`

### Headers
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // Required
}
```

### Success Response
```json
{
    "user": {
        "_id": "65f8d12345678901234567890",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "socketId": "socket123" // Optional, present if user is connected
    }
}
```

## 4. Logout User
**GET** `/users/logout`

### Headers
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // Required
}
```

### Success Response
```json
{
    "message": "Logged out successfully"
}
```

## Error Responses

### Validation Error (400 Bad Request)
```json
{
    "errors": [
        {
            "msg": "Invalid email",           // Error message
            "param": "email",                 // Field that failed validation
            "location": "body"                // Location of the error
        }
    ]
}
```

### Authentication Error (401 Unauthorized)
```json
{
    "message": "Authentication required"      // When token is missing or invalid
}
```

### Conflict Error (409 Conflict)
```json
{
    "message": "User already exists"         // When trying to register with existing email
}
```

## Notes
- All timestamps are in ISO 8601 format
- JWT tokens expire after 24 hours
- Password is never returned in responses
- Socket ID is updated when user connects to websocket
- Authentication uses HTTP-only cookies for enhanced security

# Caption API Documentation

## Endpoints Overview
- POST `/captions/register` - Register a new caption (driver)
- POST `/captions/login` - Login for existing caption
- GET `/captions/profile` - Get caption profile
- GET `/captions/logout` - Logout caption

## 1. Register Caption
**POST** `/captions/register`

### Request Body
```json
{
    "fullname": {
        "firstname": "John",     // Required, min 3 characters
        "lastname": "Doe"        // Optional, min 3 characters if provided
    },
    "email": "john@example.com", // Required, must be valid email format
    "password": "pass1234",      // Required, min 6 characters
    "vehicle": {
        "color": "Black",        // Required, min 3 characters
        "plate": "ABC123",       // Required, min 3 characters
        "capacity": 4,           // Required, min value: 1
        "vehicleType": "car"     // Required, enum: ["car", "motorcycle", "auto"]
    }
}
```

### Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT token valid for 24 hours
    "caption": {
        "_id": "65f8d12345678901234567890",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "status": "inactive"     // Default status for new captions
    }
}
```

## 2. Login Caption
**POST** `/captions/login`

### Request Body
```json
{
    "email": "john@example.com", // Required, must be valid email
    "password": "pass1234"       // Required, min 6 characters
}
```

### Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT token valid for 24 hours
    "caption": {
        "_id": "65f8d12345678901234567890",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "status": "inactive"
    }
}
```

## 3. Get Caption Profile
**GET** `/captions/profile`

### Headers
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // Required
}
```

### Success Response
```json
{
    "caption": {
        "_id": "65f8d12345678901234567890",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "status": "inactive",
        "location": {            // Optional, present if caption has set location
            "lat": 12.9716,
            "lng": 77.5946
        }
    }
}
```

## 4. Logout Caption
**GET** `/captions/logout`

### Headers
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // Required
}
```

### Success Response
```json
{
    "message": "Logged out successfully"
}
```

## Error Responses

### Validation Error (400 Bad Request)
```json
{
    "errors": [
        {
            "msg": "Invalid email",           // Error message
            "param": "email",                 // Field that failed validation
            "location": "body"                // Location of the error
        }
    ]
}
```

### Authentication Error (401 Unauthorized)
```json
{
    "message": "Authentication required"      // When token is missing or invalid
}
```

### Conflict Error (409 Conflict)
```json
{
    "message": "Caption already exists"       // When trying to register with existing email
}
```

## Notes
- All timestamps are in ISO 8601 format
- JWT tokens expire after 24 hours
- Password is never returned in responses
- Socket ID is updated when caption connects to websocket
- Vehicle type must be one of: "car", "motorcycle", "auto"
- Caption status can be: "active" or "inactive"