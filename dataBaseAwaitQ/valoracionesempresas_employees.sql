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
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` char(36) NOT NULL,
  `position` varchar(50) NOT NULL,
  `userId` char(36) NOT NULL,
  `companyId` char(36) NOT NULL,
  `validationCode` char(30) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT '0',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `companyId` (`companyId`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `employees_ibfk_2` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES ('05d6c91d-4afb-44d8-8ff7-e3d2eeff8a7b','Scrum Master','31153307-ca45-4fa1-b262-c358cedb94d5','5196b856-683a-4d06-abd4-7bc547aa3d60',NULL,1,'2023-10-01 16:40:22'),('124661c5-503c-482e-941d-fc97ee02998d','Scrum Master','31153307-ca45-4fa1-b262-c358cedb94d5','e1e00de5-7a00-4866-8cf3-de35d3ba8e5c',NULL,1,'2023-10-01 16:41:41'),('16b4404f-3f78-4161-8a2d-9b300ebf2a0b','Scrum Master','31153307-ca45-4fa1-b262-c358cedb94d5','0f3e1033-7cab-4ffd-bc02-742500f596ee','hHzWDXPCGrIuUPVRZq6z9GsO06Xh5G',0,'2023-10-01 16:40:08'),('1871271a-e44e-4782-b5ed-fe4eb2eea600','Scrum Master','9af1cb43-a724-42fd-a439-2984f478db76','9f8a3294-caf3-43b2-bf94-ffa89d267948',NULL,1,'2023-10-01 16:42:47'),('22f98872-6c8b-4a4e-9ea0-f7914f7c6a54','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','d1dec765-a490-4576-85cb-d003d3979fb4',NULL,1,'2023-10-01 16:42:05'),('24be0e45-75dd-42b9-9cd9-91477a8873f1','Director','31b385ed-b544-4cdd-b39e-4f2996ec5701','3f890a62-b689-4ee3-8b7e-e915c9b19923',NULL,1,'2023-10-01 16:42:40'),('2558ba7a-c14e-46d5-a4cf-047b0531b54a','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','06b4f3ff-6180-4838-8c69-af1847761b58',NULL,1,'2023-10-01 16:40:38'),('2576173e-da03-4b4e-9096-324500cc008e','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','9f8a3294-caf3-43b2-bf94-ffa89d267948',NULL,1,'2023-10-01 16:41:20'),('277b628c-3694-4d9f-aa57-bb485a8e90d6','Manager','31b385ed-b544-4cdd-b39e-4f2996ec5701','0f3e1033-7cab-4ffd-bc02-742500f596ee',NULL,1,'2023-10-01 16:39:54'),('29096dac-7e39-425b-9828-c4c25f21edbc','Scrum Master','9af1cb43-a724-42fd-a439-2984f478db76','06b4f3ff-6180-4838-8c69-af1847761b58',NULL,1,'2023-10-01 16:43:40'),('2a3eb810-cb3d-4ccc-8b98-9eb3235d48ab','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','f5dc6692-8ecd-49fb-b6dd-7bbff5068051',NULL,1,'2023-10-01 16:41:36'),('2e7b5b4b-0a86-4d5d-a050-cb57d8e64739','Scrum Master','9af1cb43-a724-42fd-a439-2984f478db76','250b5b89-6e91-4e46-bd98-59c3beec7219',NULL,1,'2023-10-01 16:43:55'),('304ed37c-43d4-4e2f-a9f3-5ec7ab38b71a','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','9f8a3294-caf3-43b2-bf94-ffa89d267948',NULL,1,'2023-10-01 16:41:20'),('36f73ce4-5643-40c4-8f5e-d1f7355474ea','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','887b81ed-0e5e-446a-adc6-3d00e6c15efa',NULL,1,'2023-10-01 16:41:07'),('37d5f029-27ff-408e-afbf-1135abb6b1d1','Manager','31b385ed-b544-4cdd-b39e-4f2996ec5701','0f3e1033-7cab-4ffd-bc02-742500f596ee',NULL,1,'2023-10-01 16:39:55'),('407e685f-0f2a-40fd-b822-240f8ade83ea','manager','0e13585f-b0ae-4e04-b167-0e29365c6709','0f3e1033-7cab-4ffd-bc02-742500f596ee',NULL,1,'2023-10-01 12:34:55'),('426518c4-c8c0-4c62-b009-dff550993e4f','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','ce8a200e-a8f8-45e6-acb8-faef062c8ae9',NULL,1,'2023-10-01 16:40:20'),('464494ad-462c-44f0-abd3-84824be50776','Scrum Master','31153307-ca45-4fa1-b262-c358cedb94d5','8143b263-cac6-4b0d-b28f-227a27680d05',NULL,1,'2023-10-01 16:41:01'),('5029c44f-f266-4159-8e0f-bbee97cb6329','Scrum Master','9af1cb43-a724-42fd-a439-2984f478db76','2c309472-117c-44b1-a2d3-cce35b415a2a',NULL,1,'2023-10-01 16:43:18'),('535a65cd-7da6-4655-84f7-342967e282c3','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','ce8a200e-a8f8-45e6-acb8-faef062c8ae9','hjG3Pt7J1oMAUsN7VWA3nEFv2hJYaJ',0,'2023-10-01 16:40:21'),('5572300a-8a89-45b8-bdce-d46178d25364','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','389ac6a7-0894-4368-9648-7a1c42a064d0',NULL,1,'2023-10-01 16:42:18'),('691e9420-4d03-40df-ad0d-64f330ef2cf5','Assistant','31b385ed-b544-4cdd-b39e-4f2996ec5701','711a6477-703e-42fc-9667-0dcb22a969d3',NULL,1,'2023-10-01 16:43:26'),('73445d0f-1760-4307-a6ca-0505d76a05b6','Employee','31b385ed-b544-4cdd-b39e-4f2996ec5701','efa5aeaf-830c-491c-bbf6-b998519ab1da',NULL,1,'2023-10-01 16:44:16'),('7e58a429-1e21-4e00-9505-2f1655fe5c42','Scrum Master','9af1cb43-a724-42fd-a439-2984f478db76','f5dc6692-8ecd-49fb-b6dd-7bbff5068051',NULL,1,'2023-10-01 16:42:34'),('7fbb9511-6b3d-4ffb-a661-cc75ffbfe17f','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','389ac6a7-0894-4368-9648-7a1c42a064d0',NULL,1,'2023-10-01 16:42:17'),('8044e23c-82c8-4a52-a432-f0d430bd9833','Store manager','31b385ed-b544-4cdd-b39e-4f2996ec5701','5196b856-683a-4d06-abd4-7bc547aa3d60',NULL,1,'2023-10-01 16:40:25'),('8beb4f54-d277-4936-a741-316b4d0ad534','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','e1e00de5-7a00-4866-8cf3-de35d3ba8e5c',NULL,1,'2023-10-01 16:40:55'),('95de01ee-53bc-4103-bc5a-ebb68573cb83','Scrum Master','31153307-ca45-4fa1-b262-c358cedb94d5','2c309472-117c-44b1-a2d3-cce35b415a2a','ET0hAgSOdV3TWFzIANIutcgjTmpOqT',0,'2023-10-01 16:40:34'),('99964a27-55e1-458b-b866-59ab64e3df7d','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','d1dec765-a490-4576-85cb-d003d3979fb4',NULL,1,'2023-10-01 16:42:03'),('9bc93c66-8999-48b1-bce5-be2ae9422877','cleaner','31b385ed-b544-4cdd-b39e-4f2996ec5701','2c309472-117c-44b1-a2d3-cce35b415a2a',NULL,1,'2023-10-01 16:40:57'),('a28c9699-8bae-4693-b00b-5b2d18d4f480','CEO','31b385ed-b544-4cdd-b39e-4f2996ec5701','67fb1d46-d28c-48ec-9c71-292c01e695ed',NULL,1,'2023-10-01 16:41:33'),('a65ad388-9f7a-462d-a158-d5b52a85d3fc','Scrum Master','9af1cb43-a724-42fd-a439-2984f478db76','711a6477-703e-42fc-9667-0dcb22a969d3',NULL,1,'2023-10-01 16:43:28'),('a7132959-8fbd-468d-b9d2-b3fc844a9d41','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','250b5b89-6e91-4e46-bd98-59c3beec7219',NULL,1,'2023-10-01 16:42:31'),('a86f9d97-8d93-405e-91d7-5e039b72a8ad','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','887b81ed-0e5e-446a-adc6-3d00e6c15efa',NULL,1,'2023-10-01 16:41:08'),('aa44b707-a531-4f39-9d37-7acb9d5dc2a1','analyst','31b385ed-b544-4cdd-b39e-4f2996ec5701','8143b263-cac6-4b0d-b28f-227a27680d05',NULL,1,'2023-10-01 16:43:48'),('ab8ea635-5cb4-4283-8801-3f0cc5494140','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','f343920f-dbd4-4541-9e5c-e29b8506f607',NULL,1,'2023-10-01 16:39:51'),('ac821a65-55d0-4773-bb04-20df5c8649a2','developer','31b385ed-b544-4cdd-b39e-4f2996ec5701','33ea566d-7612-45d1-9b34-698b8f1db665',NULL,1,'2023-10-01 16:41:56'),('cfaf5947-f1a1-4d36-b513-a7c9266b2efa','Scrum Master','31153307-ca45-4fa1-b262-c358cedb94d5','67fb1d46-d28c-48ec-9c71-292c01e695ed',NULL,1,'2023-10-01 16:40:44'),('d6fa4e84-fc27-4df0-8e3f-4520b28dc70a','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','f5dc6692-8ecd-49fb-b6dd-7bbff5068051',NULL,1,'2023-10-01 16:41:35'),('e948d5fc-fc28-4c92-b4a9-15291855031d','Junior Developer','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','f5dc6692-8ecd-49fb-b6dd-7bbff5068051',NULL,1,'2023-10-01 16:41:36'),('ee47e875-ee4b-45f8-a19e-5ef2aaa52d50','cleaner','31b385ed-b544-4cdd-b39e-4f2996ec5701','2c309472-117c-44b1-a2d3-cce35b415a2a',NULL,1,'2023-10-01 16:40:56'),('f3fddc3b-1811-4227-834d-f9038c663448','Scrum Master','31153307-ca45-4fa1-b262-c358cedb94d5','efa5aeaf-830c-491c-bbf6-b998519ab1da',NULL,1,'2023-10-01 16:41:24'),('fcec5028-7fcf-4b15-a33c-49dfb6786fe8','supervisor','31b385ed-b544-4cdd-b39e-4f2996ec5701','fedf8c35-c597-4904-836e-b91ffd47d575',NULL,1,'2023-10-01 16:42:19'),('febf900a-6c0e-40b0-8513-6603eb321214','Scrum Master','9af1cb43-a724-42fd-a439-2984f478db76','373a3d9d-dfca-4376-bd93-059ce820502d',NULL,1,'2023-10-01 16:43:01');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
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
