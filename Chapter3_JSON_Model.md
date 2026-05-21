# Chapter 3 – JSON Model Design
# AutoRent Pro – JSON Models

---

# 1. User JSON Model

## Sample JSON

```json
{
  "id": 1,
  "fullName": "John Smith",
  "email": "johnsmith@gmail.com",
  "password": "hashed_password",
  "phone": "0123456789",
  "role": "CUSTOMER",
  "address": "New York, USA",
  "createdAt": "2026-05-21T10:00:00"
}
```
User Fields
Field	    Type	    Description
------------------------------------
id	        Integer	    User ID
fullName	String	    Full name
email	    String	    User email
password	String	    Encrypted password
phone	    String	    Phone number
role	    String	    CUSTOMER / OWNER / ADMIN
address	    String	    User address
createdAt	DateTime	Account creation date

# 2. Car JSON Model

## Sample JSON

```json
{
  "id": 101,
  "ownerId": 5,
  "brand": "Toyota",
  "model": "Camry",
  "licensePlate": "ABC-1234",
  "pricePerDay": 80,
  "location": "Los Angeles",
  "status": "AVAILABLE",
  "approved": true,
  "createdAt": "2026-05-21T10:00:00"
}
```
Car Fields
Field	        Type	    Description
----------------------------------------
id	            Integer	    Car ID
ownerId	        Integer	    Car owner ID
brand	        String	    Car brand
model	        String	    Car model
licensePlate	String	    Vehicle license plate
pricePerDay	    Number	    Rental price per day
location	    String	    Car location
status	        String	    AVAILABLE / RENTED / MAINTENANCE
approved	    Boolean	    Admin approval status
createdAt	    DateTime	Car creation date

# 3. Bookin JSON Model

## Sample JSON

```json
{
  "id": 1001,
  "userId": 1,
  "carId": 101,
  "startDate": "2026-06-01",
  "endDate": "2026-06-05",
  "totalPrice": 400,
  "status": "CONFIRMED",
  "createdAt": "2026-05-21T10:00:00"
}
```
Booking Fields
Field	    Type	    Description
------------------------------------
id	        Integer	    Booking ID
userId	    Integer	    Customer ID
carId	    Integer	    Car ID
startDate	Date	    Rental start date
endDate	    Date	    Rental end date
totalPrice	Number	    Total rental fee
status	    String	    PENDING / CONFIRMED / ACTIVE / COMPLETED / CANCELLED
createdAt	DateTime	Booking creation date


# 4. JSON Model Summary
Model	    Main Fields
---------------------------
User	    id, fullName, email, password, phone, role
Car	        id, ownerId, brand, model, pricePerDay, status
Booking	    id, userId, carId, startDate, endDate, totalPrice

# 5. Business Rules
Rule	                 Description
-----------------------------------------
Overlapping Booking	    A car cannot be booked during the same time period
Authentication	        Users must log in before booking
Car Approval	        Only approved cars can be rented
Rental Pricing	        Rental fees are calculated automatically
Booking Lifecycle	    Booking must follow defined statuses