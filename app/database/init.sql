CREATE DATABASE example;
USE example;

CREATE TABLE `example_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `different_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO example_table (name, age) VALUES ("test", "21");
INSERT INTO different_table (city, country) VALUES ("Somewhere", "Everywhere");

GRANT ALL PRIVILEGES ON `example`.* to 'ExampleUser'@'%';
FLUSH PRIVILEGES;
