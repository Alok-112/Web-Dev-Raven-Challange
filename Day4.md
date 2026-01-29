# Day 4 - Master SQL for Web Developers


## DDL - CREATE, ALTER, DROP, TRUNCATE and RENAME

DDL :- Data Defination language 


DDL is used to define and manage database objects
like tables, indexes, views, etc. DDL commands deal
with the structure and schema of the database.

CREATE :- Creates new database object(e.g table, index, view)
ALTER :- modifies an existing object(e.g add/removes columns,change)
DROP :- Deletes an object(e.g table, index)
TRUNCATE :- Removes all rows from a table but keeps the structrue
RENAME :- Renames an existing object (e.g table column )

```sql 
-- Use your database
USE shop_db;

-- 1. Create table
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

-- 2. Add a new column 'stock' with default value
ALTER TABLE products
ADD stock INT DEFAULT 0;

-- 3. Modify column datatype (price precision change)
ALTER TABLE products
MODIFY price DECIMAL(12,2);

-- 4. Rename a column
ALTER TABLE products
RENAME COLUMN name TO product_name;

-- 5. Rename the table
ALTER TABLE products
RENAME TO inventory;

-- 6. Drop the table safely (only if it exists)
DROP TABLE IF EXISTS inventory;
```


## DML - INSERT, UPDATE, DELETE and SELECT

DML - Data Manipulation Language

DML commands deal with the manipulation of data
inside the tables.

INSERT :- Inserts new data into a table.
UPDATE :- Modifies existing data in a table.
DELETE :- Removes rows from a table.
SELECT :- Retrieves data from a table.

```sql
-- INSERT data into the table
INSERT INTO inventory (product_name, price, stock)
VALUES ('External SSD 1TB', 8999.00, 10);

INSERT INTO inventory (product_name, price, stock)
VALUES 
('Mac Mini M4', 49999.00, 5),
('Thunderbolt Enclosure', 10999.00, 8);

-- READ data (SELECT)
SELECT * FROM inventory;

-- READ specific columns
SELECT product_name, price FROM inventory;

-- UPDATE data
UPDATE inventory
SET stock = stock - 1
WHERE product_name = 'Mac Mini M4';

-- UPDATE multiple columns
UPDATE inventory
SET price = 8799.00, stock = 12
WHERE product_name = 'External SSD 1TB';

-- DELETE a specific row
DELETE FROM inventory
WHERE product_name = 'Thunderbolt Enclosure';

-- DELETE all rows (table remains)
DELETE FROM inventory;

```


## DCL - GRANT and REVOKE Access to Database

DCL - Data Control Language 

DCL commands deal with granting and revoking
privileges on the database.

GRANT :- Gives privileges to users or roles.
REVOKE :- Takes away privileges from users or roles.


```sql 
-- Create a new user
CREATE USER 'student_user'@'localhost'
IDENTIFIED BY 'student123';

-- Grant SELECT permission on a table
GRANT SELECT
ON shop_db.products
TO 'student_user'@'localhost';

-- Grant INSERT and UPDATE permissions
GRANT INSERT, UPDATE
ON shop_db.products
TO 'student_user'@'localhost';

-- Grant ALL privileges on a database
GRANT ALL PRIVILEGES
ON shop_db.*
TO 'student_user'@'localhost';

-- View granted privileges
SHOW GRANTS FOR 'student_user'@'localhost';

-- Revoke a specific privilege
REVOKE UPDATE
ON shop_db.products
FROM 'student_user'@'localhost';

-- Revoke all privileges on the database
REVOKE ALL PRIVILEGES
ON shop_db.*
FROM 'student_user'@'localhost';

-- Remove the user completely
DROP USER 'student_user'@'localhost';

```
