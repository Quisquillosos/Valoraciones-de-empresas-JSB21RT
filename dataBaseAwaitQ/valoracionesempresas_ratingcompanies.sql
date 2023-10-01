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
-- Table structure for table `ratingcompanies`
--

DROP TABLE IF EXISTS `ratingcompanies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratingcompanies` (
  `id` char(36) NOT NULL,
  `salary` tinyint unsigned NOT NULL,
  `workEnvironment` tinyint unsigned NOT NULL,
  `promotionPosibility` tinyint unsigned NOT NULL,
  `accesibility` tinyint unsigned NOT NULL,
  `review` text NOT NULL,
  `companyId` char(36) NOT NULL,
  `userId` char(36) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `companyId` (`companyId`),
  KEY `userId` (`userId`),
  CONSTRAINT `ratingcompanies_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`),
  CONSTRAINT `ratingcompanies_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratingcompanies`
--

LOCK TABLES `ratingcompanies` WRITE;
/*!40000 ALTER TABLE `ratingcompanies` DISABLE KEYS */;
INSERT INTO `ratingcompanies` VALUES ('19aabaa4-beab-419a-b1ec-cf341d41dd9b',2,4,3,5,'fun wokkring here sometimes was busy but sometimes it wasnt busy. fun working with the brand and the co workers were pretty cool and i had lots of fun','887b81ed-0e5e-446a-adc6-3d00e6c15efa','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 16:53:30'),('1ea8af4a-e89c-427a-8356-5faed0caa4b4',2,1,2,1,'Workplace culture wasn’t bad\ngreat people to work with . Scheduling was pretty good . Recruiting process wasn’t bad for new employees and training was too kind\n','250b5b89-6e91-4e46-bd98-59c3beec7219','9af1cb43-a724-42fd-a439-2984f478db76','2023-10-01 16:54:49'),('22660808-b2d6-49c0-8459-c7afccda80aa',2,3,4,1,'Didnt feel like i learned much about audit honestly. My team was going through busy season, so i was given a lot of grunt work. At least i got to visit the client site and see the general process of what an audit procedure is','06b4f3ff-6180-4838-8c69-af1847761b58','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 16:49:36'),('313ca0ed-f923-416e-b479-643b72ac8673',1,1,1,2,'Decent company to cruise, some team have the right amount of challenge but there are many people and seniors simply cruising within then company. Look elsewhere for more challenges\n','711a6477-703e-42fc-9667-0dcb22a969d3','9af1cb43-a724-42fd-a439-2984f478db76','2023-10-01 16:49:46'),('53e8eb4e-8a8e-40e9-b156-2f8d3f5c330a',2,2,2,2,'Good place to work far as work schedule 4 day work week, can be paid incentives on rate if forklift operator start at 18 make up to 21 depending on you.On site cafeteria & discount store\n','2c309472-117c-44b1-a2d3-cce35b415a2a','9af1cb43-a724-42fd-a439-2984f478db76','2023-10-01 16:47:26'),('5a50e7f6-97b6-4ca3-9ca8-6b25011d8a9c',1,2,1,3,'Team was great, felt welcomed most of the time. The lead team, managers and upper managers were absolutely horrible. They use you and abuse you to look better for their bosses','33ea566d-7612-45d1-9b34-698b8f1db665','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 16:53:59'),('5af7e897-79f3-488a-84aa-19b773654b0a',1,2,1,2,'It was a good experience being employed at Nike but I had to do exactly the same routine everyday so I ended up the relationship but I’m considering another job tittles in the future.\n','efa5aeaf-830c-491c-bbf6-b998519ab1da','31153307-ca45-4fa1-b262-c358cedb94d5','2023-10-01 17:12:21'),('5c2776b1-e97c-4224-9ebe-6bc5756eb231',1,2,1,2,'The most enjoyable part of the job is getting to help others and work across teams. I enjoy being stretched to learn new things and have opportunity for training. I work with great teammates that are compassionate, hard workers, and work as a team.\n','e1e00de5-7a00-4866-8cf3-de35d3ba8e5c','31153307-ca45-4fa1-b262-c358cedb94d5','2023-10-01 17:13:14'),('61bd2dc5-55fd-4274-8319-7d77d505136f',3,5,5,4,'The work load constantly pushes you to your Physical limits without care for employees well-being. Company also actively refuses to hire Disabled workers. If you are hired and they find out after the fact that you are Disabled they will actively single you out and constantly discipline you for your Disabilities until you either quit or are fired due to \"disciplinary issues\".','2c309472-117c-44b1-a2d3-cce35b415a2a','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 16:49:06'),('68955d3a-fdf8-4ed7-aa7a-e7f9b61b6c04',3,3,2,4,'good place , good good\nGood food , no time to play around ..all serious and all working all time\nsalary is ok but Work life balance is not good enough','389ac6a7-0894-4368-9648-7a1c42a064d0','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 17:01:17'),('6a5e07e5-0395-48a8-a87f-90ddb7b82d64',2,3,4,3,'Amazing company, great benefits, cool co-workers. Very demanding work in a challenging, fast paced environment where \"thriving in ambiguity\" is expected. Be prepared to be challenged!','e1e00de5-7a00-4866-8cf3-de35d3ba8e5c','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 16:53:06'),('6d7dfba2-8115-465a-881c-511c6d11aa35',1,5,1,1,'Great place to work at. Easy management job, so long as you can get a good relationship with your Dm, but you truly own your store, the KPIs, and the staffing.\n','d1dec765-a490-4576-85cb-d003d3979fb4','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 17:00:47'),('7501253e-a5c5-47b7-9022-af9f56a1abd0',1,2,1,1,'You come into work you do your job and you go home providing food for the world Quality is of the most important must be on time professional able to communicate read and write altogether the people are amazing needs help and management in upper front office but all in all a great steppingstone in life for anyone who’s looking to make to get things together I don’t regret working here at all never will\n','67fb1d46-d28c-48ec-9c71-292c01e695ed','31153307-ca45-4fa1-b262-c358cedb94d5','2023-10-01 17:06:27'),('78e719a7-4fcd-43a7-b1ea-860181c67f43',1,1,1,1,'I love here, really good place to work, a lot goals set for the future. Great pay, great people, great staff and engaging with all levels of employees\n','f5dc6692-8ecd-49fb-b6dd-7bbff5068051','9af1cb43-a724-42fd-a439-2984f478db76','2023-10-01 16:53:58'),('79f60ad7-cadd-461f-b1ed-21b91c2a1ab2',2,1,4,2,'Overall a good place to work with good pay and benefits that is the best I have experienced personally. It is up to you to learn and grow and there are many opportunities and channels you can focus on and be the best at that.','0f3e1033-7cab-4ffd-bc02-742500f596ee','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 16:47:39'),('7d58f313-55d1-46fa-816a-6012fe19b64e',1,2,1,2,'Good hours and flexibility on schedules. Coworkers are respectful and put effort in their daily duties to keep everything clean for guests. Management is also good.\n','06b4f3ff-6180-4838-8c69-af1847761b58','9af1cb43-a724-42fd-a439-2984f478db76','2023-10-01 16:52:45'),('92c05892-7274-4f9d-b228-2a9253d0a93e',2,3,4,4,'I worked here part time several years ago right after graduating college. It was a basic sales associate job where I mostly worked at the register. There was a time when hours were cut severely and inexplicably, which made the job feel like a waste of time.','f343920f-dbd4-4541-9e5c-e29b8506f607','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 16:47:31'),('a38e655c-a914-48fc-b3b8-45f901816831',4,1,5,5,'Great place to work, little to no issues at all. Compensated well for the amount of work that you do.','3f890a62-b689-4ee3-8b7e-e915c9b19923','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 17:00:53'),('b7379456-694b-42d0-b72e-1858dc3d35e0',4,4,5,4,' I would start the day by tidying up my section, then I would replenish the merchandise that was in stock. Once everything had been replenished, I was in charge of receiving the merchandise and taking it to the store to check that everything was in order. I learned how to use the stock and price control system and I have received training courses.\nWhat I liked the most was receiving the merchandise and putting it in the store and changing prices.','fedf8c35-c597-4904-836e-b91ffd47d575','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 16:54:26'),('bc3249e6-d94c-4f84-888b-32e75e638e17',4,5,3,5,'One of the best companies I have ever worked for. Amazing people with good intentions. Everyone there is payed so nobody is hurting for money. It\'s like being a rich poor person.','efa5aeaf-830c-491c-bbf6-b998519ab1da','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 17:01:50'),('c7ef2da2-fa03-4dff-a117-80f688dc47aa',5,4,4,5,'Strong work ethic will lead to great success. Lots of hands on learning. Great mentorship and ability to connect with new individuals. Would Defintley recommend\n','67fb1d46-d28c-48ec-9c71-292c01e695ed','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 16:49:29'),('d1fed0a8-2d9b-40f3-9822-2ef02a44ee0c',5,5,5,5,'Lidl was one of the best jobs i ever had at first, decent pay, pto, among other benefits but it all changed when new management stepped in. It felt as if associates\' work life balance and concerns were irrelevant to management. Oh and dont even think about taking a 9 day vacation because when your back your hours will be completely stripped from you no matter how hard you work or positively you impact the team.','f5dc6692-8ecd-49fb-b6dd-7bbff5068051','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 17:00:00'),('d3c11571-b1ed-451e-ae81-aab8df40b49d',1,2,1,2,'good company to work for. benefits for part time employees. fast paced store, workplace culture is good, management is good. learned to multi task. great coworkers.\n','8143b263-cac6-4b0d-b28f-227a27680d05','31153307-ca45-4fa1-b262-c358cedb94d5','2023-10-01 17:11:47'),('d81d470a-0405-4e0b-938a-5fe255dcb5d7',1,2,1,2,'Hours were not good. Pay low. Physically demanding job. If you want to work there for 2 years and save your money good… but no t a job you want to stay at for the rest of your life\n','5196b856-683a-4d06-abd4-7bc547aa3d60','31153307-ca45-4fa1-b262-c358cedb94d5','2023-10-01 17:02:36'),('d8966d7d-d873-4c59-8488-47a2b3596640',5,4,4,3,'it was great! i loved the job i got to meet lots of cool people, cool people got to meet me! made lots of connections and was just overall satisfied with my time there','5196b856-683a-4d06-abd4-7bc547aa3d60','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 16:48:18'),('de394c32-95a1-41bd-9ad0-0ce3fbed8e4c',3,4,1,5,'Laid back environment upper management seems to care most of the time. There is a lack of communication from upper management at times. Pay used to be highly competitive with the area and it has since started to fall behind.','ce8a200e-a8f8-45e6-acb8-faef062c8ae9','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 16:48:33'),('e02652fd-567d-46f2-9c92-4cf98e71a221',1,2,1,2,'Been at Microsoft little past a year now. My time at Microsoft has been ok.. I do not agree with getting two cases a day and having to work on other complex cases and it starts to become very overwhelming then the next day you get two more cases.. it’s to much at times and I wish they would change that.. it’s burn out rate 10000%\n','9f8a3294-caf3-43b2-bf94-ffa89d267948','9af1cb43-a724-42fd-a439-2984f478db76','2023-10-01 16:53:32'),('fba821aa-22f2-441a-89dd-b0f840ab9fe7',2,1,3,4,'In regards to sales department: Long days for utility workers. Hard work but the pay is decent so you can’t complain. They also have a CDL program which is a plus','8143b263-cac6-4b0d-b28f-227a27680d05','31b385ed-b544-4cdd-b39e-4f2996ec5701','2023-10-01 17:01:21'),('fdd31ea9-fe96-4efa-9952-3b94c527a5e7',1,1,1,1,'I don\'t have good experiences, you work under a lot of pressure, it depends on the boss, on the shop you work in, it depends on the psychological state you are in at the end of your job, they are usually not very tolerant, and the treatment is usually demeaning.','250b5b89-6e91-4e46-bd98-59c3beec7219','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 17:01:46'),('feb12fde-2f8e-45cd-abfb-4d6145e874a4',1,5,3,2,'Loved working here, cannot wait to return. Fun management and coworkers, super flexible and willing to work around your schedule. Highly recommend! Very nice','9f8a3294-caf3-43b2-bf94-ffa89d267948','6b7c15cc-3b54-46ba-9a62-4fd942afd96c','2023-10-01 16:53:59');
/*!40000 ALTER TABLE `ratingcompanies` ENABLE KEYS */;
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
