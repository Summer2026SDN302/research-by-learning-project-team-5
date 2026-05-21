# Chapter 3 – API Design
# AutoRent Pro – API List

---

# 1. User API

| Method | URL | Function |
|---|---|---|
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | User login authentication |
| GET | /api/users/profile | Get current user profile |
| PUT | /api/users/profile | Update user profile |
| GET | /api/users/{id} | Get user details by ID |
| DELETE | /api/users/{id} | Delete user account |
| GET | /api/users | Get all users (Admin only) |

---

# 2. Car API

| Method | URL | Function |
|---|---|---|
| POST | /api/cars | Add a new car |
| GET | /api/cars | Get all available cars |
| GET | /api/cars/{id} | Get car details |
| PUT | /api/cars/{id} | Update car information |
| DELETE | /api/cars/{id} | Remove a car |
| GET | /api/cars/search | Search cars by location/date/type |
| PUT | /api/cars/{id}/status | Update car status |
| PUT | /api/cars/{id}/approve | Approve car (Admin only) |

---

# 3. Booking API

| Method | URL | Function |
|---|---|---|
| POST | /api/bookings | Create a booking |
| GET | /api/bookings | Get all bookings |
| GET | /api/bookings/{id} | Get booking details |
| PUT | /api/bookings/{id} | Update booking |
| DELETE | /api/bookings/{id} | Cancel booking |
| GET | /api/bookings/user/{userId} | Get booking history of a user |
| GET | /api/bookings/car/{carId} | Get bookings of a car |
| PUT | /api/bookings/{id}/status | Update booking status |

---

# 4. Booking Status Lifecycle

Booking status must follow:
- Pending
- Confirmed
- Active
- Completed
- Cancelled

---

# 5. Notes

- All booking APIs require user authentication.
- Only administrators can approve vehicles.
- The system must prevent overlapping bookings.
- Rental cost is calculated automatically before booking confirmation.