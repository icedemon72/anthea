-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2024 at 11:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `classroom`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `user_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `classrooms`
--

CREATE TABLE `classrooms` (
  `id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `name` varchar(191) NOT NULL,
  `code` varchar(6) NOT NULL,
  `created_by` int(11) NOT NULL,
  `archived` tinyint(1) NOT NULL DEFAULT 0,
  `color` varchar(191) NOT NULL DEFAULT '#842481',
  `joinable` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `classrooms`
--

INSERT INTO `classrooms` (`id`, `subject_id`, `created_at`, `name`, `code`, `created_by`, `archived`, `color`, `joinable`) VALUES
(1, 1, '2024-06-03 19:02:58.884', 'Web programiranje', '729207', 1, 0, '#842481', 1),
(2, 1, '2024-06-04 15:49:02.840', 'Test', '1920A5', 1, 0, '#842481', 1);

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL DEFAULT 'OAS'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `type`) VALUES
(1, 'Informatika', 'OAS'),
(2, 'Matematika', 'OAS');

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `path` varchar(191) NOT NULL,
  `post_id` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `destination` varchar(191) NOT NULL,
  `filename` varchar(191) NOT NULL,
  `mimetype` varchar(191) NOT NULL,
  `originalname` varchar(191) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `path`, `post_id`, `created_at`, `destination`, `filename`, `mimetype`, `originalname`, `size`) VALUES
(1, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\1\\1717441969639-311324926.pdf', 1, '2024-06-03 19:12:49.652', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/1/', '1717441969639-311324926.pdf', 'application/pdf', 'Database.ER.diagram.pdf', 48125),
(2, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\1\\1717441996139-844891047.pdf', 2, '2024-06-03 19:13:16.148', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/1/', '1717441996139-844891047.pdf', 'application/pdf', 'Database.ER.diagram.pdf', 48125),
(3, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\1\\1717442732407-580750520.7z', 6, '2024-06-03 19:25:32.433', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/1/', '1717442732407-580750520.7z', 'application/octet-stream', '7z2406-extra.7z', 1610111),
(4, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\1\\1717442764009-663702213.webp', 7, '2024-06-03 19:26:04.022', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/1/', '1717442764009-663702213.webp', 'image/webp', 'nothing.webp', 37422),
(5, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\1\\1717442795064-418750803.zip', 8, '2024-06-03 19:26:36.072', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/1/', '1717442795064-418750803.zip', 'application/x-zip-compressed', 'v20 - C# - upis - deo II.zip', 2736583),
(6, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\1\\1717442809711-495395152.7z', 9, '2024-06-03 19:26:49.728', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/1/', '1717442809711-495395152.7z', 'application/octet-stream', '7z2406-extra.7z', 1610111),
(7, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516545807-745135832.pdf', 12, '2024-06-04 15:55:45.827', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516545807-745135832.pdf', 'application/pdf', 'Database.ER.diagram.pdf', 48125),
(8, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516545822-848206942.pdf', 13, '2024-06-04 15:55:45.828', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516545822-848206942.pdf', 'application/pdf', 'Database.ER.diagram.pdf', 48125),
(9, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516640821-742324801.zip', 14, '2024-06-04 15:57:20.834', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516640821-742324801.zip', 'application/x-zip-compressed', 'earboxer free-file-icons master 48px.zip', 147180),
(10, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516640817-642990323.zip', 15, '2024-06-04 15:57:20.832', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516640817-642990323.zip', 'application/x-zip-compressed', 'earboxer free-file-icons master 48px.zip', 147180),
(11, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516844748-568786447.7z', 16, '2024-06-04 16:00:44.815', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516844748-568786447.7z', 'application/octet-stream', '7z2406-extra.7z', 1610111),
(12, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516844801-96884515.zip', 16, '2024-06-04 16:00:44.815', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516844801-96884515.zip', 'application/x-zip-compressed', 'earboxer free-file-icons master 48px.zip', 147180),
(13, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516844812-664184110.7z', 17, '2024-06-04 16:00:44.838', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516844812-664184110.7z', 'application/octet-stream', '7z2406-extra.7z', 1610111),
(14, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516844832-229930822.zip', 17, '2024-06-04 16:00:44.838', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516844832-229930822.zip', 'application/x-zip-compressed', 'earboxer free-file-icons master 48px.zip', 147180),
(15, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889513-744240425.zip', 18, '2024-06-04 16:01:29.822', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889513-744240425.zip', 'application/x-zip-compressed', 'earboxer free-file-icons master 48px.zip', 147180),
(16, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889515-782261049.zip', 18, '2024-06-04 16:01:29.822', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889515-782261049.zip', 'application/x-zip-compressed', 'better-off-dead-1985-english-yify-133699.zip', 25858),
(17, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889516-339568034.webp', 18, '2024-06-04 16:01:29.822', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889516-339568034.webp', 'image/webp', 'nothing.webp', 37422),
(18, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889562-952706388.msi', 18, '2024-06-04 16:01:29.822', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889562-952706388.msi', 'application/octet-stream', 'mysql-connector-net-7.0.3.msi', 8003584),
(19, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889683-650628568.exe', 18, '2024-06-04 16:01:29.822', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889683-650628568.exe', 'application/x-msdownload', 'sql2022-ssei-dev.exe', 4290992),
(20, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889750-446930307.zip', 19, '2024-06-04 16:01:29.879', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889750-446930307.zip', 'application/x-zip-compressed', 'earboxer free-file-icons master 48px.zip', 147180),
(21, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889753-356486149.zip', 19, '2024-06-04 16:01:29.879', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889753-356486149.zip', 'application/x-zip-compressed', 'better-off-dead-1985-english-yify-133699.zip', 25858),
(22, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889753-947504265.webp', 19, '2024-06-04 16:01:29.879', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889753-947504265.webp', 'image/webp', 'nothing.webp', 37422),
(23, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889758-266170016.msi', 19, '2024-06-04 16:01:29.879', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889758-266170016.msi', 'application/octet-stream', 'mysql-connector-net-7.0.3.msi', 8003584),
(24, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717516889847-812309441.exe', 19, '2024-06-04 16:01:29.879', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717516889847-812309441.exe', 'application/x-msdownload', 'sql2022-ssei-dev.exe', 4290992),
(25, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717519130419-691827563.mp3', 20, '2024-06-04 16:38:50.460', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717519130419-691827563.mp3', 'audio/mpeg', 'Zabranjeno puÅ¡enje - Dan Republike.mp3', 3582674),
(26, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717519130433-89325238.mp3', 21, '2024-06-04 16:38:50.464', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717519130433-89325238.mp3', 'audio/mpeg', 'Zabranjeno puÅ¡enje - Dan Republike.mp3', 3582674),
(27, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717541501719-945515991.docx', 22, '2024-06-04 22:51:41.762', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717541501719-945515991.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'Seminarski_E-Kviz.docx', 1281400),
(28, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717541501727-164840187.docx', 23, '2024-06-04 22:51:41.764', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717541501727-164840187.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'Seminarski_E-Kviz.docx', 1281400),
(29, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717571370244-249062052.docx', 25, '2024-06-05 07:09:30.264', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717571370244-249062052.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'Seminarski_E-Kviz.docx', 1281400),
(30, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717571370173-189482174.docx', 24, '2024-06-05 07:09:30.247', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717571370173-189482174.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'Seminarski_E-Kviz.docx', 1281400),
(31, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717571569372-843504291.7z', 26, '2024-06-05 07:12:49.448', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717571569372-843504291.7z', 'application/octet-stream', '7z2406-extra.7z', 1610111),
(32, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717571569442-637610947.zip', 26, '2024-06-05 07:12:49.448', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717571569442-637610947.zip', 'application/x-zip-compressed', 'earboxer free-file-icons master 48px.zip', 147180),
(33, 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server\\uploads\\2\\1717584430693-565737019.exe', 27, '2024-06-05 10:47:12.520', 'C:\\Users\\Hp\\Desktop\\programski_jezici\\JS\\Angular\\classroom\\server/uploads/2/', '1717584430693-565737019.exe', 'application/x-msdownload', 'mongodb-compass-1.42.2-win32-x64.exe', 137024008);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `type` enum('text','file','announcement') NOT NULL DEFAULT 'text',
  `title` varchar(255) NOT NULL,
  `body` mediumtext DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `classsroom_id` int(11) NOT NULL,
  `professor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `type`, `title`, `body`, `created_at`, `updated_at`, `classsroom_id`, `professor_id`) VALUES
(1, 'file', 'First file post', '123', '2024-06-03 19:12:49.652', '2024-06-03 19:12:49.652', 1, 1),
(2, 'text', 'Tekst file test', '123', '2024-06-03 19:13:16.148', '2024-06-03 19:13:16.148', 1, 1),
(3, 'text', 'Tekst file test', '123', '2024-06-03 19:14:38.801', '2024-06-03 19:14:38.801', 1, 1),
(4, 'text', '123', '123', '2024-06-03 19:21:16.021', '2024-06-03 19:21:16.021', 1, 1),
(5, 'text', '123', '123', '2024-06-03 19:24:22.347', '2024-06-03 19:24:22.347', 1, 1),
(6, 'announcement', '123', '123', '2024-06-03 19:25:32.433', '2024-06-03 19:25:32.433', 1, 1),
(7, 'announcement', '1212', '12121', '2024-06-03 19:26:04.022', '2024-06-03 19:26:04.022', 1, 1),
(8, 'announcement', 'asad', 'sdasdas', '2024-06-03 19:26:36.072', '2024-06-03 19:26:36.072', 1, 1),
(9, 'announcement', 'Test', '123', '2024-06-03 19:26:49.728', '2024-06-03 19:26:49.728', 1, 1),
(10, 'text', '212', '12121', '2024-06-04 15:54:29.683', '2024-06-04 15:54:29.683', 2, 1),
(11, 'text', '212', '12121', '2024-06-04 15:54:29.684', '2024-06-04 15:54:29.684', 2, 1),
(12, 'announcement', 'abc', 'abc', '2024-06-04 15:55:45.827', '2024-06-04 15:55:45.827', 2, 1),
(13, 'announcement', 'abc', 'abc', '2024-06-04 15:55:45.828', '2024-06-04 15:55:45.828', 2, 1),
(14, 'file', 'abc', 'abc', '2024-06-04 15:57:20.834', '2024-06-04 15:57:20.834', 2, 1),
(15, 'file', 'abc', 'abc', '2024-06-04 15:57:20.832', '2024-06-04 15:57:20.832', 2, 1),
(16, 'announcement', 'abc', 'abc', '2024-06-04 16:00:44.815', '2024-06-04 16:00:44.815', 2, 1),
(17, 'announcement', 'abc', 'abc', '2024-06-04 16:00:44.838', '2024-06-04 16:00:44.838', 2, 1),
(18, 'announcement', 'abc', 'abc', '2024-06-04 16:01:29.822', '2024-06-04 16:01:29.822', 2, 1),
(19, 'announcement', 'abc', 'abc', '2024-06-04 16:01:29.879', '2024-06-04 16:01:29.879', 2, 1),
(20, 'announcement', ':D', ':D', '2024-06-04 16:38:50.460', '2024-06-04 16:38:50.460', 2, 1),
(21, 'announcement', ':D', ':D', '2024-06-04 16:38:50.464', '2024-06-04 16:38:50.464', 2, 1),
(22, 'announcement', 'Da li ce dva?', '123', '2024-06-04 22:51:41.762', '2024-06-04 22:51:41.762', 2, 1),
(23, 'announcement', 'Da li ce dva?', '123', '2024-06-04 22:51:41.764', '2024-06-04 22:51:41.764', 2, 1),
(24, 'announcement', 'test', 'test', '2024-06-05 07:09:30.247', '2024-06-05 07:09:30.247', 2, 1),
(25, 'announcement', 'test', 'test', '2024-06-05 07:09:30.264', '2024-06-05 07:09:30.264', 2, 1),
(26, 'file', 'test', 'test', '2024-06-05 07:12:49.448', '2024-06-05 07:12:49.448', 2, 1),
(27, 'file', 'Test', 'test', '2024-06-05 10:47:12.520', '2024-06-05 10:47:12.520', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `professors`
--

CREATE TABLE `professors` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `professors`
--

INSERT INTO `professors` (`id`, `user_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `refresh_token` text NOT NULL,
  `user_agent` varchar(191) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `refresh_token`, `user_agent`, `active`, `created_at`) VALUES
(1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZWxpdGFAYWVsaXRhLmNvbSIsInJvbGVzIjpbInN0dWRlbnQiXSwiaWF0IjoxNzE3NDQxMjk2LCJleHAiOjE3MTc0ODQ0OTZ9.L6DJ8lM7PlpMpm4bzhAA7NhSDDfMoJ-swN1rOjNKKNk', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0', 0, '2024-06-03 19:01:36.224'),
(2, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZWxpdGFAYWVsaXRhLmNvbSIsInJvbGVzIjpbInN0dWRlbnQiLCJwcm9mZXNzb3IiLCJhZG1pbiJdLCJpYXQiOjE3MTc0NDEzNDYsImV4cCI6MTcxNzQ4NDU0Nn0.RXDli1Ms-vrykQAPvLaBux5BmfwC2D-ayPv1Jl3vP2o', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0', 1, '2024-06-03 19:02:26.519'),
(3, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZWxpdGFAYWVsaXRhLmNvbSIsInJvbGVzIjpbInN0dWRlbnQiLCJwcm9mZXNzb3IiLCJhZG1pbiJdLCJpYXQiOjE3MTc1MTYxMzAsImV4cCI6MTcxNzU1OTMzMH0.KsVI7bOn1s7NKfmvX9w5h2iAxCC56pHXZzbW2lZbGmk', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0', 1, '2024-06-04 15:48:50.431'),
(4, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZWxpdGFAYWVsaXRhLmNvbSIsInJvbGVzIjpbInN0dWRlbnQiLCJwcm9mZXNzb3IiLCJhZG1pbiJdLCJpYXQiOjE3MTc1NzEyMzAsImV4cCI6MTcxNzYxNDQzMH0.VDdJeCWBmTu3kN41w7rqXL5VeEeeWMJ4yLZ_mF-GFHo', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0', 1, '2024-06-05 07:07:10.379'),
(5, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZWxpdGFAYWVsaXRhLmNvbSIsInJvbGVzIjpbInN0dWRlbnQiLCJwcm9mZXNzb3IiLCJhZG1pbiJdLCJpYXQiOjE3MjQ4Nzk5NzQsImV4cCI6MTcyNDkyMzE3NH0.qVPerNQAB8eJE7_8FPIL8o8DbxIufWfRYYqvArR43CU', 'Mozilla/5.0 (Windows NT 10.0; rv:127.0) Gecko/20100101 Firefox/127.0', 1, '2024-08-28 21:19:34.874');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `user_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `department_id` int(11) NOT NULL,
  `semester` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `department_id`, `semester`) VALUES
(1, 'Web programiranje', 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `avatar` varchar(191) NOT NULL DEFAULT 'default.jpg',
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `avatar`, `password`) VALUES
(1, 'aelita@aelita.com', 'Aelita', 'default.jpg', '$2b$10$53PLh.OxOp0OHM./V5nWDu/3RFnc/8QLDoU.0nmbEm2hdjfw6pNtC');

-- --------------------------------------------------------

--
-- Table structure for table `_classroomtoprofessor`
--

CREATE TABLE `_classroomtoprofessor` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_classroomtoprofessor`
--

INSERT INTO `_classroomtoprofessor` (`A`, `B`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `_classroomtostudent`
--

CREATE TABLE `_classroomtostudent` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('34eff38b-0e2f-426d-9232-a1173cb10215', '61355a358599a6ec47c02d52d888090155e4a1f29916510ccbfd197580f26c23', '2024-06-03 19:00:03.563', '20240520204121_remove_year_from_departments', NULL, NULL, '2024-06-03 19:00:03.430', 1),
('3cb85632-e999-4e38-b3c3-c3c1bc197ebf', '0855e29570947ea5e2b234bc782e8341daffafcc1a55af427fa432444f3aaa73', '2024-06-03 19:00:03.400', '20240520201206_add_fields_to_classroom', NULL, NULL, '2024-06-03 19:00:02.150', 1),
('89bdcbd9-91f0-4c21-9d42-facbb343b905', '1728a3dece03e408324bc37baae5a50441b4c0185b46f53ae4e2dba21eedb148', '2024-06-03 19:00:06.774', '20240521162045_changes_in_db', NULL, NULL, '2024-06-03 19:00:03.811', 1),
('aab6bd8a-6ee2-4335-8155-71d35ca8f4f4', '99bdf9f86d9db517a89ae260198fa3e97dfa2f00348c573748f34093d4901bf6', '2024-06-03 19:00:02.113', '20240520200537_init', NULL, NULL, '2024-06-03 18:59:52.734', 1),
('c9b3fd72-2b1b-488b-b89d-df75e31b8bfe', 'c4e044a2c5eadbf8366cc09ac815f70ac52091dbd7b9b3f668964c8a725506e9', '2024-06-03 19:00:07.507', '20240523190516_updated_refresh_token_field', NULL, NULL, '2024-06-03 19:00:06.862', 1),
('da3a035b-06f3-44be-b696-5e4bda214713', '12492aa64c2e49620b544e4817404114c98db346c3a3bd33ecccbbee96ef77b5', '2024-06-03 19:00:08.461', '20240602193309_add_fields_to_classroom', NULL, NULL, '2024-06-03 19:00:07.562', 1),
('fd25b72a-c1a6-46b8-88db-02ee0c83115e', 'abb389aac873d4df07145c1934b11abd36f06e8dc6a3a11dd8ed6f9eea30e279', '2024-06-03 19:00:03.786', '20240520204425_add_semester_to_subjects', NULL, NULL, '2024-06-03 19:00:03.594', 1),
('ff460a39-e2b0-4169-aa86-eaed57857453', '2224563c3c1d55ba6bc63abacf84e56cb5c9cc4ed093afdaaf91d70d181da56a', '2024-06-03 19:00:47.154', '20240603190046_update_file_table', NULL, NULL, '2024-06-03 19:00:46.998', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_user_id_key` (`user_id`);

--
-- Indexes for table `classrooms`
--
ALTER TABLE `classrooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `classrooms_subject_id_fkey` (`subject_id`),
  ADD KEY `classrooms_created_by_fkey` (`created_by`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `files_post_id_fkey` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_professor_id_fkey` (`professor_id`),
  ADD KEY `posts_classsroom_id_fkey` (`classsroom_id`);

--
-- Indexes for table `professors`
--
ALTER TABLE `professors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `professors_user_id_key` (`user_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_fkey` (`user_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `students_user_id_key` (`user_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subjects_department_id_fkey` (`department_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- Indexes for table `_classroomtoprofessor`
--
ALTER TABLE `_classroomtoprofessor`
  ADD UNIQUE KEY `_ClassroomToProfessor_AB_unique` (`A`,`B`),
  ADD KEY `_ClassroomToProfessor_B_index` (`B`);

--
-- Indexes for table `_classroomtostudent`
--
ALTER TABLE `_classroomtostudent`
  ADD UNIQUE KEY `_ClassroomToStudent_AB_unique` (`A`,`B`),
  ADD KEY `_ClassroomToStudent_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `professors`
--
ALTER TABLE `professors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `classrooms`
--
ALTER TABLE `classrooms`
  ADD CONSTRAINT `classrooms_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `professors` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `classrooms_subject_id_fkey` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_classsroom_id_fkey` FOREIGN KEY (`classsroom_id`) REFERENCES `classrooms` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_professor_id_fkey` FOREIGN KEY (`professor_id`) REFERENCES `professors` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `professors`
--
ALTER TABLE `professors`
  ADD CONSTRAINT `professors_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `_classroomtoprofessor`
--
ALTER TABLE `_classroomtoprofessor`
  ADD CONSTRAINT `_ClassroomToProfessor_A_fkey` FOREIGN KEY (`A`) REFERENCES `classrooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_ClassroomToProfessor_B_fkey` FOREIGN KEY (`B`) REFERENCES `professors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_classroomtostudent`
--
ALTER TABLE `_classroomtostudent`
  ADD CONSTRAINT `_ClassroomToStudent_A_fkey` FOREIGN KEY (`A`) REFERENCES `classrooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_ClassroomToStudent_B_fkey` FOREIGN KEY (`B`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
