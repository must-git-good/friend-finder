DROP DATABASE IF EXISTS code_buddy_db;
CREATE DATABASE code_buddy_db;
USE code_buddy_db;

CREATE TABLE coders
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    surveyresults VARCHAR(10) NOT NULL,
    class VARCHAR(50) NULL,
    pic_link VARCHAR(250) NULL,
    PRIMARY KEY (id)
);
