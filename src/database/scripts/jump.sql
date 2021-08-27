CREATE DATABASE  IF NOT EXISTS `jump` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `jump`;
-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: jump
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Under Armour'),(2,'Nike'),(3,'Adidas'),(4,'Reebok'),(5,'Puma'),(6,'Adidas');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Accesorios'),(2,'Zapatillas'),(3,'Remeras'),(4,'Tops'),(5,'Pantalones'),(6,'Buzos');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_idx` (`id_user`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_image` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `id_product_fk2` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product_fk2_idx` (`id_product_fk2`),
  CONSTRAINT `id_product_fk2` FOREIGN KEY (`id_product_fk2`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (1,'bolso.jpg',1);
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `id_category` int(11) DEFAULT NULL,
  `price` float NOT NULL,
  `id_size` int(11) DEFAULT NULL,
  `id_brands` int(11) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_category_idx` (`id_category`),
  KEY `id_size_idx` (`id_size`),
  KEY `id_brands_idx` (`id_brands`),
  CONSTRAINT `id_brands` FOREIGN KEY (`id_brands`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_size` FOREIGN KEY (`id_size`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Under Armour Bag','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',1,8000,1,1,'bolso.jpg'),(2,'Nike Shoes','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',2,10000,2,2,'zapas.jpg'),(3,'Adidas T-shirt','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',3,7500,3,3,'ropa.jpg'),(4,'Reebok Top','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',4,4000,4,4,'top.jpg'),(5,'Puma Short','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',5,6800,5,5,'short.jpg'),(6,'Adidas Combo','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',6,11300,6,6,'combo.jpg'),(7,'Under Armour Bag','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',1,8000,1,1,'bolso.jpg'),(8,'Nike Shoes','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',2,10000,2,2,'zapas.jpg'),(9,'Adidas T-shirt','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',3,7500,3,3,'ropa.jpg'),(10,'Reebok Top','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',4,4000,4,4,'top.jpg'),(11,'Puma Short','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',5,6800,5,5,'short.jpg'),(12,'Adidas Combo','Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt',6,11300,6,6,'combo.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_colors`
--

DROP TABLE IF EXISTS `products_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product_fk` int(11) DEFAULT NULL,
  `id_color` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product_idx` (`id_product_fk`),
  KEY `id_color_idx` (`id_color`),
  CONSTRAINT `id_color` FOREIGN KEY (`id_color`) REFERENCES `colors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_product_fk` FOREIGN KEY (`id_product_fk`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_colors`
--

LOCK TABLES `products_colors` WRITE;
/*!40000 ALTER TABLE `products_colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_orders`
--

DROP TABLE IF EXISTS `products_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_orders` (
  `id` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `id_order` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product_idx` (`id_product`),
  KEY `id_order_idx` (`id_order`),
  CONSTRAINT `id_order` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_orders`
--

LOCK TABLES `products_orders` WRITE;
/*!40000 ALTER TABLE `products_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'cliente'),(2,'admin');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,NULL),(2,'8.5'),(3,'S'),(4,'M'),(5,'XL'),(6,'S');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar_image` varchar(100) DEFAULT NULL,
  `id_rol_fk` int(11) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `id_rol_idx` (`id_rol_fk`),
  CONSTRAINT `id_rol_fk` FOREIGN KEY (`id_rol_fk`) REFERENCES `rols` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'valentin','sdf@sdf','$2b$10$Wp5gjfd4eN8lOYbr4fwTsOG4IOl9DGWLPvVn8.I3t1micKoZh5QY6',NULL,NULL,NULL,NULL),(2,'joel','vaasdf@hdsof.com','$2b$10$RWf7dBezhE9ihAO6Wo6fh.BVcCo687Js8kn4QxPTmEGSroQicMAnC','',NULL,NULL,NULL),(3,'valentin','sdf','$2b$10$pJZC6HX7VX2aHBQWnkhXG.hYfr5TRhV25.jNeLxCOKsO5W1Fza8bC','',NULL,NULL,NULL),(6,'valentin','sdf@sdf.com','$2b$10$1oXaa84heHZ6pTjdInjSLeZIWbYWU5IH8t0DuZ4Gg4d2Lp1y0t7hm','',NULL,NULL,NULL),(11,'sdfsdf','sfdsfsdfsdfsfd@sdfsdf.com','$2b$10$TzTQ.9/WV3C/.s62fYXikOB/il8HQFEfHQ2jjCkUL6P64NuanK5Ke','Captura de Pantalla 2021-08-01 a la(s) 20.02.49 (2).png',NULL,NULL,NULL),(12,'','juan@hotmail.com','$2b$10$ppdH3w8NIO5aoQCQW2IGxuSF7qWJajWmZIdwVLcNq9COmxPEjvTva','',NULL,NULL,NULL),(15,'joeel','jsalf@dfsf.com','$2b$10$kOMMPdK62aSv3oCM38hTROK6BGD0Hto.BS9gRjF39n32ybBPS/uKe',NULL,NULL,NULL,NULL),(16,'hur','hoe@hfaf.com','$2b$10$RlompTbfXOjqU/vkxwyLqOHj34oHOnvxJVg0kfuiy5vzLuqMBU.b.',NULL,NULL,NULL,NULL),(17,'valentin coulome','jjsdf@sdfsdhf.com','$2b$10$DBkNokTr2/9Q3tfGS1BmWe6qzLoSUrFgzDbzVcrOth0B22zUBjOjS',NULL,NULL,NULL,NULL),(18,'val','valentinlamothecoulomme@hotmail.com','$2b$10$GQjvsxMBCBHmWMgGvRE35exo.zAfoX82hFMzv9ih8ZpUARm9p7dQO',NULL,NULL,NULL,NULL),(19,'na','sdfdfsdfsz@hotmail.com','$2b$10$l4vlrAUBHLUYBWn0bC2BQuoxky53VeFkqlkoeSHSEfM3XOLfU6ha6','undefined/Users/valentinlamothecoulomme/Desktop/grupo_4_jump/src/controllers/usersController.js',NULL,NULL,NULL),(20,'v','sdfzvbvvf@gmail.com','$2b$10$3ZJFf70cFC.vaJmEomhXXebOD7xNcAjktPlwssAcS8NAmA/cDMEaG','undefined/Users/valentinlamothecoulomme/Desktop/grupo_4_jump/src/controllers/usersController.js',NULL,NULL,NULL),(21,'asdf','sdf@gmail.com','$2b$10$VaIN4BxNa8BvOUo6CWw4VebVvEQpZo6Qr5jSdZ6Z0t8C3aeP5l8J2','undefined/Users/valentinlamothecoulomme/Desktop/grupo_4_jump/src/controllers/usersController.js',NULL,NULL,NULL),(22,'nulo','nul@gmail.com','$2b$10$cVqqVXWeJ4JYGvMqp0I3j.7p6KZXsJ5BrgHk7bcSjGaT16GWtr..C','avatar-1628084573648.png',NULL,NULL,NULL),(23,'iaf','iva@hotmail.com','$2b$10$NYBOnpqeSy4HnN20UeiYZeFpJXiAJFJL7bBnzlZjEwCEIxBtpyLJi','avatar-1628088912744.png',NULL,NULL,NULL),(24,'giuli','giuliana@gmail.com','$2b$10$/hgZNZJ7asKgwbMxcb0JKuY8DgJUMAphzKTPDQin6hD5K19PlXSeW','avatar-1628088977759.png',1,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-05 11:02:34
