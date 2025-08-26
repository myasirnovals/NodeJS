create table sample
(
    id   varchar(100) not null,
    name varchar(100) not null,
    primary key (id)
) engine = innodb;

select *
from sample;

create table customers
(
    id    varchar(100) not null,
    name  varchar(100) not null,
    email varchar(100) not null,
    phone varchar(100) not null,
    primary key (id),
    constraint customers_email_unique unique (email),
    constraint customers_phone_unique unique (phone)
) engine = innodb;

select *
from customers;

create table products
(
    id       varchar(100) not null,
    name     varchar(100) not null,
    price    int          not null,
    stock    int          not null,
    category varchar(100) not null,
    primary key (id)
) engine = innodb;

select *
from products;

INSERT INTO products(id, name, price, stock, category)
VALUES ('P0001', 'Indomie Goreng', 2500, 100, 'FOOD'),
       ('P0002', 'Teh Botol Sosro 250ml', 3500, 200, 'DRINK'),
       ('P0003', 'Aqua 600ml', 3000, 250, 'DRINK'),
       ('P0004', 'Minyak Goreng Bimoli 2L', 40000, 70, 'FOOD'),
       ('P0005', 'Chitato Sapi Panggang', 11000, 90, 'SNACK'),
       ('P0006', 'Deterjen Rinso 1kg', 28000, 80, 'HOUSEHOLD'),
       ('P0007', 'Sabun Mandi Lifebuoy', 4000, 180, 'PERSONAL_CARE'),
       ('P0008', 'Beras Rojolele 5kg', 65000, 50, 'FOOD'),
       ('P0009', 'Pasta Gigi Pepsodent', 12500, 120, 'PERSONAL_CARE'),
       ('P0010', 'Tango Wafer Coklat', 8000, 150, 'SNACK');

create table categories
(
    id   int          not null auto_increment,
    name varchar(100) not null,
    primary key (id)
) engine = innodb;

select *
from categories;

create table wallet
(
    id          varchar(100) not null,
    balance     int          not null,
    customer_id varchar(100) not null,
    primary key (id),
    constraint wallet_customer_id_fk foreign key (customer_id) references customers (id),
    constraint wallet_customer_id_unique unique (customer_id)
) engine = innodb;

select * from wallet;

select * from customers;