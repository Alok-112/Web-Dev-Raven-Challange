# Day 5 - Master SQL for Web Developers

## TCL - BEGIN, COMMIT, ROLLBACK and SAVEPOINT

TCL :- Transaction Control Language 

TCL commands deal with transaction management in
the database. Transactions ensure that a series of
DML statements are executed successfully or not at
all (atomicity).

BEGIN :- Starts a transaction.
COMMIT :- Saves changes made during the transaction.
ROLLBACK  :- Undoes changes made during the transaction.
SAVEPOINT :- Sets a point to which a transaction can be rolled back

```sql
-- Start a transaction
BEGIN;

-- Insert data
INSERT INTO products (item_name, price, stock)
VALUES ('USB4 NVMe Enclosure', 10999.00, 5);

-- Create a savepoint
SAVEPOINT sp1;

-- Update data
UPDATE products
SET stock = stock - 1
WHERE item_name = 'USB4 NVMe Enclosure';

-- Create another savepoint
SAVEPOINT sp2;

-- Delete data
DELETE FROM products
WHERE item_name = 'USB4 NVMe Enclosure';

-- Roll back to savepoint sp2 (undo DELETE only)
ROLLBACK TO sp2;

-- Roll back to savepoint sp1 (undo UPDATE and DELETE)
ROLLBACK TO sp1;

-- Commit the transaction (save INSERT only)
COMMIT;

```
## DTO and DQL in SQL 

DTO :- Data Transfer Object 
DTOs in SQL refer to objects or structures used to
transfer data between different layers of an
application, typically between the database and the
application layer. DTOs are designed to be simple
containers for carrying data. Though DTO is a
concept applied at the application layer, SQL results
are often mapped into DTOs.

- you will never work with that in your journey of 6-5 years of career
```sql
--

This SELECT query represents a DTO that transfers product information
SELECT name, price, stock
FROM products;
{
"name": "T-shirt",
"price": 500.00,
"stock": 10 
}
```

DQL :- Data Query language

DQL is often considered a part of DML, specifically
focusing on queries that retrieve data from the
database. SELECT is the only DQL command.



## First Normal Form of Database

- Normalisation  is used to make the database better 
- data integrity 
- reduce data redudancy 

UNF :- Unnormalized form  
1NF :- first normal form 
2NF :- Second normal form 
3NF :- third normal form 
EKNF  :- Elementary normal form 
BCNF  :- Boyce Codd normal form 
4NF :- fourth normal form 
ETNF :- Essential Tuple normal form 
5NF :- fifth normal form 
DKNF :- Domain-key normal form 
6NF :- Sixth normal form 

Database Normal Form 

Key Requirements of 1NF:
. Atomicity: All the values in a column should be atomic (indivisible). Each column must contain a single value, not a set of values.
· Unique Column Names: Each column should have a unique name.
· Uniqueness of Records: Each record (row) must be unique. There should be a primary key or a way to uniquely identify each record.
· No Repeating Groups: There should be no multiple values (or arrays) stored in a single column for a record.

```sql
-- ❌ Table NOT in 1NF (multivalued column)
CREATE TABLE orders_bad (
    order_id INT,
    customer_name VARCHAR(50),
    products VARCHAR(200)   -- multiple values stored
);

INSERT INTO orders_bad VALUES
(1, 'Rahul', 'SSD, Enclosure, Cable'),
(2, 'Ankit', 'Mac Mini');

--------------------------------------------------

-- ✅ Table IN 1NF (atomic values)
CREATE TABLE orders_1nf (
    order_id INT,
    customer_name VARCHAR(50),
    product VARCHAR(50)     -- single value only
);

INSERT INTO orders_1nf VALUES
(1, 'Rahul', 'SSD'),
(1, 'Rahul', 'Enclosure'),
(1, 'Rahul', 'Cable'),
(2, 'Ankit', 'Mac Mini');

```