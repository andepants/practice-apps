create database checkout;

use checkout;

create table form (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  password VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

show tables;


/*
1. This doesn't work/not sure why
mysql -u root < server/schema.sql;
mysql -u root < 2-checkout/server/schema.sql;
mysql -u root < RFP2210-PRACTICE-APPS/2-checkout/server/schema.sql;
*/