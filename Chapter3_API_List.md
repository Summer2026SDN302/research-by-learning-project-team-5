# Chapter 3 – API Design: AutoRent Pro

Base URL (suggested): `/api/v1`

All responses use JSON. Protected routes require authentication (e.g. `Authorization: Bearer <token>` or mock header `x-user-id` in early chapters).

---

## 1. User APIs

| Method | URL | Function | Auth |
|--------|-----|----------|------|
| POST | `/auth/register` | Register a new account (Customer or Car Owner) | Public |
| POST | `/auth/login` | Authenticate and receive access token | Public |
| GET | `/users/me` | Get current user profile | User |
| PUT | `/users/me` | Update current user profile (name, phone, etc.) | User |
| GET | `/users/:id` | Get user by ID (limited fields for non-admin) | Admin |
| GET | `/users` | List all users with optional filters (`role`, `status`) | Admin |
| PATCH | `/users/:id/status` | Activate or suspend a user account | Admin |
| PATCH | `/users/:id/role` | Assign or change user role | Admin |

---

## 2. Car APIs

| Method | URL | Function | Auth |
|--------|-----|----------|------|
| GET | `/cars` | List vehicles; filter by `status`, `location`, `startDate`, `endDate` (availability) | Public / User |
| GET | `/cars/:id` | Get vehicle details by ID | Public / User |
| POST | `/cars` | Register a new vehicle (pending admin approval) | Car Owner |
| PUT | `/cars/:id` | Update vehicle information (brand, model, price, etc.) | Car Owner (own car) / Admin |
| DELETE | `/cars/:id` | Remove vehicle from the system | Car Owner (own car) / Admin |
| PATCH | `/cars/:id/status` | Update vehicle status (Available, Rented, Maintenance) | Car Owner (own car) / Admin |
| PATCH | `/cars/:id/approve` | Approve vehicle for rental | Admin |
| PATCH | `/cars/:id/reject` | Reject or deactivate vehicle | Admin |
| GET | `/cars/:id/availability` | Get availability schedule for a vehicle | Public / User |
| PUT | `/cars/:id/availability` | Set or update availability schedule | Car Owner (own car) |
| GET | `/owner/cars` | List vehicles owned by the logged-in car owner | Car Owner |

---

## 3. Booking APIs

| Method | URL | Function | Auth |
|--------|-----|----------|------|
| POST | `/bookings` | Create a booking request; validate availability and calculate rental cost | Customer |
| GET | `/bookings` | List bookings; filter by `userId`, `carId`, `status` | Admin / Owner (own cars) / Customer (own) |
| GET | `/bookings/:id` | Get booking details by ID | Customer (own) / Owner (related car) / Admin |
| PUT | `/bookings/:id` | Update booking (e.g. change dates before confirmation) | Customer (own, Pending only) |
| PATCH | `/bookings/:id/cancel` | Cancel a booking | Customer (own) / Admin |
| PATCH | `/bookings/:id/confirm` | Confirm booking and generate rental contract | Admin / System |
| PATCH | `/bookings/:id/activate` | Mark booking as Active when rental starts | Admin / Owner |
| PATCH | `/bookings/:id/complete` | Mark booking as Completed when rental ends | Admin / Owner |
| POST | `/bookings/preview-cost` | Calculate rental cost without creating a booking | Customer |
| GET | `/users/:id/bookings` | Rental history for a specific user | Customer (self) / Admin |
| GET | `/owner/bookings` | Bookings for vehicles owned by the logged-in owner | Car Owner |
| GET | `/admin/bookings/summary` | Booking counts grouped by status | Admin |

---

## 4. Contract APIs (optional, linked to confirmed bookings)

| Method | URL | Function | Auth |
|--------|-----|----------|------|
| GET | `/contracts` | List rental contracts | Admin |
| GET | `/contracts/:id` | Get contract details by ID | Customer (own) / Owner (related) / Admin |
| GET | `/bookings/:id/contract` | Get contract generated from a confirmed booking | Customer (own) / Admin |

---

## 5. Summary by resource

| Resource | Main operations |
|----------|-----------------|
| **User** | Register, login, profile, admin user management |
| **Car** | CRUD, search/filter, approval, availability, status |
| **Booking** | Create, read, update, cancel, lifecycle status, cost preview |
