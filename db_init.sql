CREATE DATABASE IF NOT EXISTS class;

CREATE TABLE IF NOT EXISTS class 
(id int(11) NOT NULL AUTO_INCREMENT,
  stud_email varchar(45) NOT NULL,
  staff_email varchar(45) NOT NULL,
  suspended int(11) DEFAULT NULL,
  PRIMARY KEY (id)
) 

CREATE UNIQUE INDEX stud_staff
ON class (stud_email, staff_email);