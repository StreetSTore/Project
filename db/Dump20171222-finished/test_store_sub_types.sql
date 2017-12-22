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
-- Table structure for table `store_sub_types`
--

DROP TABLE IF EXISTS `store_sub_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_sub_types` (
  `sub_type` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`sub_type`,`type`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_sub_types`
--

LOCK TABLES `store_sub_types` WRITE;
/*!40000 ALTER TABLE `store_sub_types` DISABLE KEYS */;
INSERT INTO `store_sub_types` VALUES ('Accessories','Kitchen'),('Bedding','Bedding'),('Children','Clothes'),('Children','Shoes'),('Cobbler','Cobbler'),('Decorative','Plants'),('Dishes','Kitchen'),('Dresses','Clothes'),('Electronic games','Toys'),('Electronics','Workshop'),('Elegant','Clothes'),('Elegant','Shoes'),('Entertainment','Electricity'),('Evening','Clothes'),('Fixes','Tailor'),('Fixes','Watches'),('Gardening','Plants'),('Home','Electricity'),('Home','Workshop'),('Lamps','Electricity'),('Mechanics','Workshop'),('Men','Clothes'),('Men','Shoes'),('Sewing','Tailor'),('Sport','Shoes'),('Sports','Clothes'),('Stationery','Stationery'),('Suits','Clothes'),('Tools','Kitchen'),('Tools','Tailor'),('Toys','Toys'),('Underwear','Clothes'),('Watches','Watches'),('Women','Clothes'),('Women','Shoes'),('Work','Shoes');
/*!40000 ALTER TABLE `store_sub_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-22 16:09:13
