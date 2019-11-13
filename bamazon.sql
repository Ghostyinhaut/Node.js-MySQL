DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("air-Jordan", "Nike",150, 10);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("CDs", "Netflix",20,50);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("Love&Peace T-Shirt", "H&M", 35,80);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("Sunglasses","Glassheads",150,50);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("noise-cancel HeadPhone","Bose",350,10);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("iphone11","Apple",899,50);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("labtop","Sony",1199,10);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("unicorn's horn","Monsters,Inc",100000,1);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("Allen's Body","Area 51",1000000,1);

INSERT INTO products (product_name,department_name, price, quantity)
VALUES ("Haunting House","Lorraine Warren",1,1);