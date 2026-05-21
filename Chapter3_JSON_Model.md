# Chapter 3 – JSON Data Models: AutoRent Pro

This document defines the JSON structure for **User**, **Car**, and **Booking** resources used in API requests and responses.

---

## 1. User

### 1.1 Register request (`POST /auth/register`)

```json
{
  "email": "customer@example.com",
  "password": "SecurePass123",
  "fullName": "Nguyen Van A",
  "phone": "0901234567",
  "role": "CUSTOMER"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Unique login email |
| `password` | string | Yes | Plain password (hashed on server) |
| `fullName` | string | Yes | Display name |
| `phone` | string | No | Contact phone number |
| `role` | string | Yes | `CUSTOMER` or `CAR_OWNER` (Admin created by system) |

### 1.2 Login request (`POST /auth/login`)

```json
{
  "email": "customer@example.com",
  "password": "SecurePass123"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Registered email |
| `password` | string | Yes | Account password |

### 1.3 Login response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "u001",
    "email": "customer@example.com",
    "fullName": "Nguyen Van A",
    "phone": "0901234567",
    "role": "CUSTOMER",
    "status": "ACTIVE",
    "createdAt": "2026-05-01T08:00:00.000Z",
    "updatedAt": "2026-05-01T08:00:00.000Z"
  }
}
```

### 1.4 User object (response)

```json
{
  "id": "u001",
  "email": "customer@example.com",
  "fullName": "Nguyen Van A",
  "phone": "0901234567",
  "role": "CUSTOMER",
  "status": "ACTIVE",
  "createdAt": "2026-05-01T08:00:00.000Z",
  "updatedAt": "2026-05-20T10:30:00.000Z"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique user identifier |
| `email` | string | Yes | Login email |
| `fullName` | string | Yes | Full name |
| `phone` | string | No | Phone number |
| `role` | string | Yes | `CUSTOMER`, `CAR_OWNER`, `ADMIN` |
| `status` | string | Yes | `ACTIVE`, `SUSPENDED` |
| `createdAt` | string (ISO 8601) | Yes | Account creation time |
| `updatedAt` | string (ISO 8601) | Yes | Last update time |

> **Note:** `password` is never returned in API responses.

---

## 2. Car

### 2.1 Create / update car request (`POST /cars`, `PUT /cars/:id`)

```json
{
  "brand": "Toyota",
  "model": "Vios",
  "licensePlate": "30A-12345",
  "pricePerDay": 500000,
  "location": "Ho Chi Minh City",
  "description": "Automatic, 4 seats, fuel efficient",
  "status": "AVAILABLE"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `brand` | string | Yes | Vehicle brand |
| `model` | string | Yes | Vehicle model |
| `licensePlate` | string | Yes | Unique license plate |
| `pricePerDay` | number | Yes | Rental price per day (VND) |
| `location` | string | Yes | City or area where the car is available |
| `description` | string | No | Additional vehicle details |
| `status` | string | No | `AVAILABLE`, `RENTED`, `MAINTENANCE` (owner/admin update) |

### 2.2 Car object (response)

```json
{
  "id": "c001",
  "ownerId": "u002",
  "brand": "Toyota",
  "model": "Vios",
  "licensePlate": "30A-12345",
  "pricePerDay": 500000,
  "location": "Ho Chi Minh City",
  "description": "Automatic, 4 seats, fuel efficient",
  "status": "AVAILABLE",
  "approvalStatus": "APPROVED",
  "createdAt": "2026-05-02T09:00:00.000Z",
  "updatedAt": "2026-05-18T14:00:00.000Z"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique vehicle identifier |
| `ownerId` | string | Yes | ID of the car owner (User) |
| `brand` | string | Yes | Vehicle brand |
| `model` | string | Yes | Vehicle model |
| `licensePlate` | string | Yes | License plate number |
| `pricePerDay` | number | Yes | Daily rental rate |
| `location` | string | Yes | Rental location |
| `description` | string | No | Vehicle description |
| `status` | string | Yes | `AVAILABLE`, `RENTED`, `MAINTENANCE` |
| `approvalStatus` | string | Yes | `PENDING`, `APPROVED`, `REJECTED` |
| `createdAt` | string (ISO 8601) | Yes | Registration time |
| `updatedAt` | string (ISO 8601) | Yes | Last update time |

### 2.3 Availability schedule (optional nested or separate resource)

```json
{
  "carId": "c001",
  "blockedRanges": [
    {
      "startDate": "2026-06-01T00:00:00.000Z",
      "endDate": "2026-06-05T23:59:59.000Z",
      "reason": "MAINTENANCE"
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `carId` | string | Yes | Related vehicle ID |
| `blockedRanges` | array | No | Periods when the car cannot be rented |
| `blockedRanges[].startDate` | string | Yes | Block start (ISO 8601) |
| `blockedRanges[].endDate` | string | Yes | Block end (ISO 8601) |
| `blockedRanges[].reason` | string | No | e.g. `MAINTENANCE`, `OWNER_BLOCK` |

---

## 3. Booking

### 3.1 Create booking request (`POST /bookings`)

```json
{
  "carId": "c001",
  "startDate": "2026-05-25T08:00:00.000Z",
  "endDate": "2026-05-28T18:00:00.000Z"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `carId` | string | Yes | ID of the vehicle to rent |
| `startDate` | string (ISO 8601) | Yes | Rental start date/time |
| `endDate` | string (ISO 8601) | Yes | Rental end date/time (must be after `startDate`) |

> `userId` is taken from the authenticated user, not from the request body.

### 3.2 Preview cost request (`POST /bookings/preview-cost`)

Same body as create booking (without persisting):

```json
{
  "carId": "c001",
  "startDate": "2026-05-25T08:00:00.000Z",
  "endDate": "2026-05-28T18:00:00.000Z"
}
```

### 3.3 Preview cost response

```json
{
  "carId": "c001",
  "startDate": "2026-05-25T08:00:00.000Z",
  "endDate": "2026-05-28T18:00:00.000Z",
  "rentalDays": 4,
  "pricePerDay": 500000,
  "totalPrice": 2000000,
  "currency": "VND"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `carId` | string | Yes | Vehicle ID |
| `startDate` | string | Yes | Rental start |
| `endDate` | string | Yes | Rental end |
| `rentalDays` | number | Yes | Number of rental days |
| `pricePerDay` | number | Yes | Rate used for calculation |
| `totalPrice` | number | Yes | Calculated total before confirmation |
| `currency` | string | Yes | e.g. `VND` |

### 3.4 Booking object (response)

```json
{
  "id": "b001",
  "userId": "u001",
  "carId": "c001",
  "startDate": "2026-05-25T08:00:00.000Z",
  "endDate": "2026-05-28T18:00:00.000Z",
  "rentalDays": 4,
  "totalPrice": 2000000,
  "status": "PENDING",
  "createdAt": "2026-05-20T11:00:00.000Z",
  "updatedAt": "2026-05-20T11:00:00.000Z"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique booking identifier |
| `userId` | string | Yes | Customer who made the booking |
| `carId` | string | Yes | Rented vehicle ID |
| `startDate` | string (ISO 8601) | Yes | Rental start |
| `endDate` | string (ISO 8601) | Yes | Rental end |
| `rentalDays` | number | Yes | Duration in days (calculated by system) |
| `totalPrice` | number | Yes | Total rental fee (calculated before confirm) |
| `status` | string | Yes | `PENDING`, `CONFIRMED`, `ACTIVE`, `COMPLETED`, `CANCELLED` |
| `createdAt` | string (ISO 8601) | Yes | Booking creation time |
| `updatedAt` | string (ISO 8601) | Yes | Last status or data update |

### 3.5 Booking with populated relations (detail view)

```json
{
  "id": "b001",
  "userId": "u001",
  "carId": "c001",
  "startDate": "2026-05-25T08:00:00.000Z",
  "endDate": "2026-05-28T18:00:00.000Z",
  "rentalDays": 4,
  "totalPrice": 2000000,
  "status": "CONFIRMED",
  "user": {
    "id": "u001",
    "fullName": "Nguyen Van A",
    "email": "customer@example.com",
    "phone": "0901234567"
  },
  "car": {
    "id": "c001",
    "brand": "Toyota",
    "model": "Vios",
    "licensePlate": "30A-12345",
    "pricePerDay": 500000,
    "location": "Ho Chi Minh City"
  },
  "createdAt": "2026-05-20T11:00:00.000Z",
  "updatedAt": "2026-05-21T09:00:00.000Z"
}
```

---

## 4. Standard error response

```json
{
  "error": {
    "message": "Booking time overlaps with an existing booking",
    "code": "BOOKING_CONFLICT"
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error.message` | string | Yes | Human-readable error description |
| `error.code` | string | Yes | Machine-readable code (e.g. `VALIDATION_ERROR`, `UNAUTHORIZED`, `BOOKING_CONFLICT`) |

---

## 5. Enum reference

| Resource | Field | Allowed values |
|----------|-------|----------------|
| User | `role` | `CUSTOMER`, `CAR_OWNER`, `ADMIN` |
| User | `status` | `ACTIVE`, `SUSPENDED` |
| Car | `status` | `AVAILABLE`, `RENTED`, `MAINTENANCE` |
| Car | `approvalStatus` | `PENDING`, `APPROVED`, `REJECTED` |
| Booking | `status` | `PENDING`, `CONFIRMED`, `ACTIVE`, `COMPLETED`, `CANCELLED` |
