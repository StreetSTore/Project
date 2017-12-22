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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(45) DEFAULT 'Tel Aviv',
  `street` varchar(45) NOT NULL,
  `street_num` int(11) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `additional` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7997 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (7961,'Tel Aviv','alenby',1,32.0743,34.7864,NULL),(7962,'Tel Aviv','alenby',2,32.07438,34.78648,NULL),(7963,'Tel Aviv','alenby',3,32.07446,34.78656,NULL),(7964,'Tel Aviv','alenby',4,32.07454,34.78664,NULL),(7965,'Tel Aviv','alenby',5,32.07462,34.78672,NULL),(7966,'Tel Aviv','alenby',6,32.0747,34.7868,NULL),(7967,'Tel Aviv','alenby',7,32.07478,34.78688,NULL),(7968,'Tel Aviv','alenby',8,32.07486,34.78696,NULL),(7969,'Tel Aviv','alenby',9,32.07494,34.78704,NULL),(7970,'Tel Aviv','alenby',10,32.07502,34.78712,NULL),(7971,'Tel Aviv','alenby',11,32.0751,34.7872,NULL),(7972,'Tel Aviv','alenby',12,32.07518,34.78728,NULL),(7973,'Tel Aviv','alenby',13,32.07526,34.78736,NULL),(7974,'Tel Aviv','alenby',14,32.07534,34.78744,NULL),(7975,'Tel Aviv','alenby',15,32.07542,34.78752,NULL),(7976,'Tel Aviv','alenby',16,32.0755,34.7876,NULL),(7977,'Tel Aviv','alenby',17,32.07558,34.78768,NULL),(7978,'Tel Aviv','alenby',18,32.07565,34.78775,NULL),(7979,'Tel Aviv','alenby',19,32.07573,34.78783,NULL),(7980,'Tel Aviv','alenby',20,32.07581,34.78791,NULL),(7981,'Tel Aviv','alenby',21,32.07589,34.78799,NULL),(7982,'Tel Aviv','alenby',22,32.07597,34.78807,NULL),(7983,'Tel Aviv','alenby',23,32.07605,34.78815,NULL),(7984,'Tel Aviv','alenby',24,32.07613,34.78823,NULL),(7985,'Tel Aviv','alenby',25,32.07621,34.78831,NULL),(7986,'Tel Aviv','alenby',26,32.07629,34.78839,NULL),(7987,'Tel Aviv','alenby',27,32.07637,34.78847,NULL),(7988,'Tel Aviv','alenby',28,32.07645,34.78855,NULL),(7989,'Tel Aviv','alenby',29,32.07653,34.78863,NULL),(7990,'Tel Aviv','alenby',30,32.07661,34.78871,NULL),(7991,'Tel Aviv','alenby',31,32.07669,34.78879,NULL),(7992,'Tel Aviv','alenby',32,32.07677,34.78887,NULL),(7993,'Tel Aviv','alenby',33,32.07685,34.78895,NULL),(7994,'Tel Aviv','alenby',34,32.07693,34.78903,NULL),(7995,'Tel Aviv','alenby',35,32.07701,34.78911,NULL),(7996,'Tel Aviv','alenby',36,32.07709,34.78919,NULL);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-22 16:09:04
