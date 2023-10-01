-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: valoracionesempresas
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `active` tinyint(1) DEFAULT '0',
  `photo` char(40) DEFAULT NULL,
  `bio` text,
  `registrationCode` char(30) DEFAULT NULL,
  `recoverPassCode` char(10) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `modifiedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `password` (`password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0c2c9739-4ee6-4121-9dcd-79a0c146d3bb','noelia.rocu92@gmail.com','$2b$10$HAoosLBgk.tjs7YvhbKzteZN4RdPa.0gIf7cSiOn.UTscp8vpcwLq','Noe','Cuxart',1,NULL,NULL,NULL,NULL,'2023-10-01 10:45:13','2023-10-01 10:46:29'),('0e13585f-b0ae-4e04-b167-0e29365c6709','angela.puime@gmail.com','$2b$10$YXE7rTJ6734BJ4owwqpDwOsstLeNJ./ScKb.KTEDAHTI1g8dS1eXW','Angela ','Puime Lopez',1,'4cad05bb-a523-4935-bb0b-7e452fb2cf69.jpg','Dedicated to helping others achieve their health goals through personalized training and nutrition plans. Certified personal trainer and nutritionist with over 5 years of experience. Let\'s work together to reach your full potential and live a healthier, happier life.',NULL,NULL,'2023-10-01 10:43:48','2023-10-01 16:08:31'),('15775ea4-2060-4999-aa44-020049f21807','d.rodriguez.gonzalez.123@gmail.com','$2b$10$fL8d4gMO.aaJ8Hqix.Efuu7aP2kAjbnxFwL2z2qGOzQRbIxqoxI.6','David','Rodriguez',1,'c6ffe515-7b48-4f0d-89d1-dec26906a06d.jpg','A passionate and expressive dancer with an innate connection to movement. Possesses a strong command of various dance styles and techniques, displaying grace, precision, and creativity in every performance. Dedicated to continuous improvement, tirelessly refining skills and exploring new choreographic possibilities. A storyteller through dance, evoking emotions and connecting with audiences on a profound level.',NULL,NULL,'2023-10-01 10:43:43','2023-10-01 16:30:24'),('31153307-ca45-4fa1-b262-c358cedb94d5','dimasmdv@gmail.com','$2b$10$OJ4M5Jhdl.3sjBzC7qSmGu4lBwu.gdvsRyUAN4GJ1wXr8SHKejIO6','Dumitru','Medvedev',1,'d3198082-f220-4f9f-bc8d-fc38d24757cc.jpg','Dedicated to helping others achieve their health goals through personalized training and nutrition plans. Certified personal trainer and nutritionist with over 5 years of experience. Let\'s work together to reach your full potential and live a healthier, happier life.',NULL,NULL,'2023-10-01 10:43:43','2023-10-01 16:39:17'),('31b385ed-b544-4cdd-b39e-4f2996ec5701','angelapuime87@gmail.com','$2b$10$wiiLRvntM7RHPbHqS3weCelNXY8aa7pep/o9FtOLCt7pUsHDC0ZmW','Angela','Puime Lopez',1,'2465ce0f-ba98-4c0f-9b28-2eb3b7353999.jpg','\r\nPassionate cook with over 10 years of experience in the culinary industry. Specializes in creating delicious and healthy meals using fresh, locally sourced ingredients. Dedicated to providing exceptional service and creating memorable dining experiences',NULL,NULL,'2023-10-01 12:02:00','2023-10-01 16:39:17'),('6936020f-097f-4402-aa0d-7d3c0c34f6f8','noelia.rocu@gmail.com','$2b$10$p5j5DodRA29BHuyr9LBaNuES9nWclVuirrOGAHewOhXBhboepncmq','Noelia','Rodriguez ',1,'46c6f0d7-1fdc-41ab-8bc0-2f37b80f41ba.jpg','Experienced professional with a passion for delivering results. Skilled in project management, team leadership, and strategic planning. Seeking new opportunities to apply my expertise and drive success. Let\'s connect and explore how we can work together to achieve our goals.',NULL,NULL,'2023-10-01 10:44:05','2023-10-01 18:36:45'),('6b7c15cc-3b54-46ba-9a62-4fd942afd96c','davidrguezglez933@gmail.com','$2b$10$SmHN/Car/KJ2ZrDxHHgm8.4oROZirQkhSlYPysRwdf2XpvUaFIGcO','David','Rodríguez González',1,'b3030cef-ca6d-48f4-b5e2-1bc9953f39f9.jpg','Experienced professional with a passion for delivering results. Skilled in project management, team leadership, and strategic planning. Seeking new opportunities to apply my expertise and drive success. Let\'s connect and explore how we can work together to achieve our goals.',NULL,NULL,'2023-10-01 10:44:29','2023-10-01 16:32:56'),('9af1cb43-a724-42fd-a439-2984f478db76','dimasmdv.seo@gmail.com','$2b$10$RUlIi0wMh4i.uZHomGVkFO9Fk1znh00mK0ojxWj347.P8cllXK9Di','Anne','Igartiburo',1,'56942375-d1e6-46dc-995f-55228b9d7044.jpg','Strategic human resources manager with a talent for fostering a positive workplace culture. Proficient in talent acquisition, employee development, and conflict resolution. Dedicated to maximizing the potential of the workforce\r\n\r\n',NULL,NULL,'2023-10-01 16:26:59','2023-10-01 16:28:02');
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

-- Dump completed on 2023-10-01 18:42:38
