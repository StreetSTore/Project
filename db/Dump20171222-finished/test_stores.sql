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
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stores` (
  `hp_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(45) NOT NULL,
  `sub_type` varchar(40) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `address_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `registration_date` date NOT NULL,
  `logo` varchar(3000) DEFAULT NULL,
  `accept_orders` tinyint(4) NOT NULL DEFAULT '0',
  `paypal_email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`hp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=65524 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES (65488,'Store4','Bedding','1','03-656-9897',NULL,'mail@mail.com',7961,'bla4','2017-12-22',NULL,0,NULL),(65489,'Store5','Bedding','2','03-656-9898',NULL,'mail@mail.com',7962,'bla5','2017-12-22',NULL,0,NULL),(65490,'Store6','Bedding','3','03-656-9899',NULL,'mail@mail.com',7963,'bla6','2017-12-22',NULL,0,NULL),(65491,'Store7','Clothes','1','03-656-9900',NULL,'mail@mail.com',7964,'bla7','2017-12-22',NULL,0,NULL),(65492,'Store8','Clothes','2','03-656-9901',NULL,'mail@mail.com',7965,'bla8','2017-12-22',NULL,0,NULL),(65493,'Store9','Clothes','3','03-656-9902',NULL,'mail@mail.com',7966,'bla9','2017-12-22',NULL,0,NULL),(65494,'Store10','Cobbler','1','03-656-9903',NULL,'mail@mail.com',7967,'bla10','2017-12-22',NULL,0,NULL),(65495,'Store11','Cobbler','2','03-656-9904',NULL,'mail@mail.com',7968,'bla11','2017-12-22',NULL,0,NULL),(65496,'Store12','Cobbler','3','03-656-9905',NULL,'mail@mail.com',7969,'bla12','2017-12-22',NULL,0,NULL),(65497,'Store13','Electricity','1','03-656-9906',NULL,'mail@mail.com',7970,'bla13','2017-12-22',NULL,0,NULL),(65498,'Store14','Electricity','2','03-656-9907',NULL,'mail@mail.com',7971,'bla14','2017-12-22',NULL,0,NULL),(65499,'Store15','Electricity','3','03-656-9908',NULL,'mail@mail.com',7972,'bla15','2017-12-22',NULL,0,NULL),(65500,'Store16','Kitchen','1','03-656-9909',NULL,'mail@mail.com',7973,'bla16','2017-12-22',NULL,0,NULL),(65501,'Store17','Kitchen','2','03-656-9910',NULL,'mail@mail.com',7974,'bla17','2017-12-22',NULL,0,NULL),(65502,'Store18','Kitchen','3','03-656-9911',NULL,'mail@mail.com',7975,'bla18','2017-12-22',NULL,0,NULL),(65503,'Store19','Plants','1','03-656-9912',NULL,'mail@mail.com',7976,'bla19','2017-12-22',NULL,0,NULL),(65504,'Store20','Plants','2','03-656-9913',NULL,'mail@mail.com',7977,'bla20','2017-12-22',NULL,0,NULL),(65505,'Store21','Plants','3','03-656-9914',NULL,'mail@mail.com',7978,'bla21','2017-12-22',NULL,0,NULL),(65506,'Store22','Shoes','1','03-656-9915',NULL,'mail@mail.com',7979,'bla22','2017-12-22',NULL,0,NULL),(65507,'Store23','Shoes','2','03-656-9916',NULL,'mail@mail.com',7980,'bla23','2017-12-22',NULL,0,NULL),(65508,'Store24','Shoes','3','03-656-9917',NULL,'mail@mail.com',7981,'bla24','2017-12-22',NULL,0,NULL),(65509,'Store25','Stationery','1','03-656-9918',NULL,'mail@mail.com',7982,'bla25','2017-12-22',NULL,0,NULL),(65510,'Store26','Stationery','2','03-656-9919',NULL,'mail@mail.com',7983,'bla26','2017-12-22',NULL,0,NULL),(65511,'Store27','Stationery','3','03-656-9920',NULL,'mail@mail.com',7984,'bla27','2017-12-22',NULL,0,NULL),(65512,'Store28','Tailor','1','03-656-9921',NULL,'mail@mail.com',7985,'bla28','2017-12-22',NULL,0,NULL),(65513,'Store29','Tailor','2','03-656-9922',NULL,'mail@mail.com',7986,'bla29','2017-12-22',NULL,0,NULL),(65514,'Store30','Tailor','3','03-656-9923',NULL,'mail@mail.com',7987,'bla30','2017-12-22',NULL,0,NULL),(65515,'Store31','Toys','1','03-656-9924',NULL,'mail@mail.com',7988,'bla31','2017-12-22',NULL,0,NULL),(65516,'Store32','Toys','2','03-656-9925',NULL,'mail@mail.com',7989,'bla32','2017-12-22',NULL,0,NULL),(65517,'Store33','Toys','3','03-656-9926',NULL,'mail@mail.com',7990,'bla33','2017-12-22',NULL,0,NULL),(65518,'Store34','Watches','1','03-656-9927',NULL,'mail@mail.com',7991,'bla34','2017-12-22',NULL,0,NULL),(65519,'Store35','Watches','2','03-656-9928',NULL,'mail@mail.com',7992,'bla35','2017-12-22',NULL,0,NULL),(65520,'Store36','Watches','3','03-656-9929',NULL,'mail@mail.com',7993,'bla36','2017-12-22',NULL,0,NULL),(65521,'Store37','Workshop','1','03-656-9930',NULL,'mail@mail.com',7994,'bla37','2017-12-22',NULL,0,NULL),(65522,'Store38','Workshop','2','03-656-9931',NULL,'mail@mail.com',7995,'bla38','2017-12-22',NULL,0,NULL),(65523,'Store39','Workshop','2','03-656-9931',NULL,'mail@mail.com',7996,'bla38','2017-12-22',NULL,0,NULL);
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-22 16:08:56
