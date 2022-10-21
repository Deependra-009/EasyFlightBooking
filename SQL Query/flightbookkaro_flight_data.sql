-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: flightbookkaro
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

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
-- Table structure for table `flight_data`
--

DROP TABLE IF EXISTS `flight_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight_data` (
  `id` int NOT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `arrival` varchar(255) DEFAULT NULL,
  `arrival_time` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `destination_time` varchar(255) DEFAULT NULL,
  `flight_id` varchar(255) DEFAULT NULL,
  `flight_name` varchar(255) DEFAULT NULL,
  `total_time` varchar(255) DEFAULT NULL,
  `flight_type` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `total_seat` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight_data`
--

LOCK TABLES `flight_data` WRITE;
/*!40000 ALTER TABLE `flight_data` DISABLE KEYS */;
INSERT INTO `flight_data` VALUES (1,'5467','Lucknow','10:55','Delhi','11:45','6E-2281','Indigo','0h 50m','Non-Stop','./../../../assets/images/Indigo.png','50',NULL),(2,'4,313','Lucknow','07:45','Delhi','08:45','6E-2281','Indigo','1h 0m','Non-Stop','./../../../assets/images/Indigo.png','50',NULL),(3,'4,894','Lucknow','11:00','Delhi','17:35','6E-7322','Indigo','6h 35m','1 Stop(s)','./../../../assets/images/Indigo.png','50',NULL),(4,'5,153','Lucknow','23:35','Delhi','00:40','6E-2089','Indigo','1h 5m','Non-Stop','./../../../assets/images/Indigo.png','50',NULL),(5,'5,153','Lucknow','17:45','Delhi','19:00','6E-2027','Indigo','1h 15m','Non-Stop','./../../../assets/images/Indigo.png','50',NULL),(6,'5,258','Lucknow','09:05','Delhi','10:05','I5-552','AirAsia India','1h 0m','Non-Stop','./../../../assets/images/airasia.png','50',NULL),(7,'5,258','Lucknow','23:45','Delhi','01:05','I5-547','AirAsia India','1h 20m','Non-Stop','./../../../assets/images/airasia.png','50',NULL),(8,'4,315','Lucknow','15:25','Delhi','16:35','UK-642','Vistara','1h 10m','Non-Stop','./../../../assets/images/Vistara.png','50',NULL),(9,'4,315','Delhi','15:25','Lucknow','16:35','UK-642','Vistara','1h 10m','Non-Stop','./../../../assets/images/Vistara.png','50',NULL);
/*!40000 ALTER TABLE `flight_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-20 19:53:11
