CREATE DATABASE  IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `test`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: vmedu138.mtacloud.co.il    Database: test
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product_sub_types`
--

DROP TABLE IF EXISTS `product_sub_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_sub_types` (
  `sub_type` varchar(40) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`sub_type`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sub_types`
--

LOCK TABLES `product_sub_types` WRITE;
/*!40000 ALTER TABLE `product_sub_types` DISABLE KEYS */;
INSERT INTO `product_sub_types` VALUES ('Alarms','Watches'),('Audio systems','Electronics'),('Blankets','Bedding'),('Blenders','Kitchen'),('Boots','Shoes'),('Cameras','Electronics'),('Cars','Toys'),('Ceiling lamps','Eelctricity'),('Children','Books'),('Children','Shoes'),('Coats','Clothes'),('Computers','Electronics'),('Conditioners','Eelctricity'),('Consoles','Toys'),('Constructors','Toys'),('Dolls','Toys'),('Dresses','Clothes'),('Dryers','Eelctricity'),('Electronics fixes','Workshop'),('Fertilizer','Plants'),('Fibres','Tailor'),('Fiction','Books'),('Fixes','Tailor'),('Fixing','Watches'),('Food processor','Kitchen'),('Glasses','Kitchen'),('Glues','Workshop'),('Guns','Toys'),('Hats','Clothes'),('Heaters','Eelctricity'),('High heel','Shoes'),('Jackets','Clothes'),('Kitchen knives','Kitchen'),('Luxuries','Watches'),('Mechanics fixes','Workshop'),('Microwaves','Kitchen'),('Mixers','Kitchen'),('Nails and screws','Workshop'),('Needles','Tailor'),('Notebooks','Stationery'),('Owens','Eelctricity'),('Paints','Stationery'),('Paints','Workshop'),('Pans','Kitchen'),('Pants','Clothes'),('Pazzles','Toys'),('Pencils','Stationery'),('Pens','Stationery'),('Pillows','Bedding'),('Plates','Kitchen'),('Pots','Kitchen'),('Pots','Plants'),('Professional','Books'),('Rattles','Toys'),('Refrigerators','Eelctricity'),('Rulers','Stationery'),('Sandals','Shoes'),('School','Books'),('Seedlings','Plants'),('Sewing','Tailor'),('Sheets','Bedding'),('Shoes fixing','Cobbler'),('Shovels','Plants'),('Silverware','Kitchen'),('Slippers','Shoes'),('Sneakers','Shoes'),('Socks','Clothes'),('Soft toys','Toys'),('Soil','Plants'),('Sport','Shoes'),('Sport','Watches'),('Strings','Tailor'),('T-Shirts','Clothes'),('Table lamps','Eelctricity'),('Tools','Workshop'),('Towels','Bedding'),('TVs','Electronics'),('Underwear','Clothes'),('Wall watches','Watches'),('Washing machines','Eelctricity');
/*!40000 ALTER TABLE `product_sub_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-22 16:08:58
