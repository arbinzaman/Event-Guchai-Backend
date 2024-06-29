-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2024 at 11:47 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event_guchai`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookevent`
--

CREATE TABLE `bookevent` (
  `bookingID` int(11) NOT NULL,
  `eventTitle` varchar(20) NOT NULL,
  `customerEmail` varchar(50) NOT NULL,
  `price` varchar(11) NOT NULL,
  `food` varchar(100) NOT NULL,
  `people` varchar(100) NOT NULL,
  `sound_system` varchar(50) NOT NULL,
  `decoration` varchar(100) NOT NULL,
  `media` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookevent`
--

INSERT INTO `bookevent` (`bookingID`, `eventTitle`, `customerEmail`, `price`, `food`, `people`, `sound_system`, `decoration`, `media`) VALUES
(12, '', '', '0', 'Limited Food Item [5]', '100', '', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]'),
(13, 'Starter', '', '250', 'Limited Food Item [5]', '100', '', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]'),
(213414, 'Starter', 'arbin@zaman.com', '৳250K', 'Limited Food Item [5]', 'Limited People [100]', '', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]'),
(213415, 'Starter', 'arbin@zaman.com', '৳250K', 'Limited Food Item [5]', 'Limited People [100]', '', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]'),
(213416, 'Starter', 'arbin@zaman.com', '৳250K', 'Limited Food Item [5]', 'Limited People [100]', 'Limited Sound System [2 Pair]', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]'),
(213417, 'Premium', 'arbin@zaman.com', '৳2.8M', 'Food Items [100 Items Buffet]', 'People [1100]', '', 'Luxurious Decoration', 'Next Level Media Support [3 Senior Photographer & 2 Senior Cinematographer]'),
(213418, 'Starter', 'as@if.com', '৳250K', '', 'Limited People [100]', 'Limited Sound System [2 Pair]', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]'),
(213419, 'Starter', 'arbin@zaman.com', '৳250K', '', 'Limited People [100]', 'Limited Sound System [2 Pair]', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]'),
(213420, 'Premium', 'as@if.com', '৳2.8M', '', 'People [1100]', 'Next Level Sound System With One of the best Dj In', 'Luxurious Decoration', 'Next Level Media Support [3 Senior Photographer & 2 Senior Cinematographer]'),
(213421, 'Premium', 'as@if.com', '৳2.8M', '', 'People [1100]', 'Next Level Sound System With One of the best Dj In', 'Luxurious Decoration', 'Next Level Media Support [3 Senior Photographer & 2 Senior Cinematographer]'),
(213422, 'Premium', 'as@if.com', '৳2.8M', '', 'People [1100]', 'Next Level Sound System With One of the best Dj In', 'Luxurious Decoration', 'Next Level Media Support [3 Senior Photographer & 2 Senior Cinematographer]'),
(213423, 'Starter', 'sohana@anika.com', '৳500K', '', 'Limited People [100]', '', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]'),
(213424, 'Starter', 'arbin@zaman.com', '৳500K', 'Limited Food Item [5]', 'Limited People [100]', 'Limited Sound System [2 Pair]', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]');

-- --------------------------------------------------------

--
-- Table structure for table `catering`
--

CREATE TABLE `catering` (
  `cateringID` int(11) NOT NULL,
  `customerEmail` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `catering`
--

INSERT INTO `catering` (`cateringID`, `customerEmail`, `description`, `status`) VALUES
(1, 'ashar@haque.com', 'Limited Food Item [5]', 'done'),
(2, 'ashar@haque.com', 'Limited Food Item [5]', 'done'),
(3, 'ashar@haque.com', 'Limited Food Item [5]', 'done'),
(4, 'ashar@haque.com', 'Limited Food Item [5]', 'done'),
(5, 'ashar@haque.com', 'Limited Food Item [5]', 'done'),
(6, 'ashar@haque.com', 'Food Items [100 Items Buffet]', 'done'),
(7, 'ashar@haque.com', 'Food Items [100 Items Buffet]', 'done'),
(8, 'ashar@haque.com', 'Food Items [100 Items Buffet]', 'done'),
(9, 'ashar@haque.com', 'Food Items [100 Items Buffet]', 'done'),
(10, 'ashar@haque.com', 'Limited Food Item [5]', 'done'),
(11, 'ashar@haque.com', 'Limited Food Item [5]', 'done'),
(12, 'fa@him.com', 'Limited Food Item [5]', 'done');

-- --------------------------------------------------------

--
-- Table structure for table `custompackage`
--

CREATE TABLE `custompackage` (
  `packageID` int(11) NOT NULL,
  `customerEmail` varchar(20) NOT NULL,
  `foodQuantity` int(15) NOT NULL,
  `foodPrice` int(15) NOT NULL,
  `mediaTeam` varchar(50) NOT NULL,
  `mediaPrice` int(15) NOT NULL,
  `soundSystemQuantity` int(10) NOT NULL,
  `soundSystemPrice` int(15) NOT NULL,
  `decorationTitle` varchar(50) NOT NULL,
  `decorationPrice` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `custompackage`
--

INSERT INTO `custompackage` (`packageID`, `customerEmail`, `foodQuantity`, `foodPrice`, `mediaTeam`, `mediaPrice`, `soundSystemQuantity`, `soundSystemPrice`, `decorationTitle`, `decorationPrice`) VALUES
(1, 'fa@him.com', 100, 25000, 'Team Alpha', 110000, 1, 5000, 'Premium Decoration', 750000),
(2, 'fa@him.com', 100, 25000, 'Team Beta', 240000, 1, 5000, 'Premium Decoration', 750000);

-- --------------------------------------------------------

--
-- Table structure for table `cutomersreviews`
--

CREATE TABLE `cutomersreviews` (
  `id` int(10) NOT NULL,
  `cutomersName` varchar(20) NOT NULL,
  `customerImg` varchar(50) NOT NULL,
  `customerReview` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `decoration`
--

CREATE TABLE `decoration` (
  `decorationID` int(11) NOT NULL,
  `customerEmail` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `decoration`
--

INSERT INTO `decoration` (`decorationID`, `customerEmail`, `description`, `status`) VALUES
(1, 'kala@pahar.com', 'Moderate Decoration', 'done'),
(2, 'kala@pahar.com', 'Luxurious Decoration', 'done'),
(3, 'kala@pahar.com', 'Moderate Decoration', 'not done'),
(4, 'kala@pahar.com', 'Moderate Decoration', 'not done'),
(5, 'kala@pahar.com', 'Moderate Decoration', 'done'),
(6, 'kala@pahar.com', 'Moderate Decoration', 'not done'),
(7, 'kala@pahar.com', 'Moderate Decoration', 'not done');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eventID` int(11) NOT NULL,
  `eventTitle` text NOT NULL,
  `price` varchar(10) NOT NULL,
  `shortDescription` varchar(600) NOT NULL,
  `food` varchar(500) NOT NULL,
  `people` varchar(500) NOT NULL,
  `sound_system` varchar(500) NOT NULL,
  `decoration` varchar(600) NOT NULL,
  `media` varchar(600) NOT NULL,
  `img` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventID`, `eventTitle`, `price`, `shortDescription`, `food`, `people`, `sound_system`, `decoration`, `media`, `img`) VALUES
(111, 'Starter', '৳500K', 'Starter for all your needs that match with your event', 'Limited Food Item [5]', 'Limited People [100]', 'Limited Sound System [2 Pair]', 'Moderate Decoration', 'Mid Level Photographer [1 Mid Photographer]', 'https://chitrogolpo.com/wp-content/uploads/2023/04/7-7-1024x683.jpg'),
(122, 'Popular', '৳1.5M', 'Popular For All Types Of Events', 'Moderate Food Items[10]', 'Moderate People [400]', 'Sound System With Mid Level Dj [4 pair]', 'Premium Level Decoration', 'Media Support [1 Senior Photographer & 1 Senior Cinematographer]', 'https://chitrogolpo.com/wp-content/uploads/2023/04/5-5-1024x882.jpg'),
(133, 'Premium', '৳28M', 'Luxury At Your Finger Tips', 'Food Items [100 Items Buffet]', 'People [1100]', 'Next Level Sound System With One of the best Dj In Country & One Best Dance Crew', 'Luxurious Decoration', 'Next Level Media Support [3 Senior Photographer & 2 Senior Cinematographer]', 'https://i.ibb.co/dQG8WZJ/premium-Package.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `mediaID` int(11) NOT NULL,
  `customerEmail` varchar(20) NOT NULL,
  `description` varchar(300) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`mediaID`, `customerEmail`, `description`, `status`) VALUES
(1, 'tush@ar.com', 'Next Level Media Support [3 Senior Photographer & 2 Senior Cinematographer]', 'done'),
(2, 'tush@ar.com', 'Mid Level Photographer [1 Mid Photographer]', 'done'),
(3, 'saj@id.com', 'Next Level Media Support [3 Senior Photographer & 2 Senior Cinematographer]', 'not done');

-- --------------------------------------------------------

--
-- Table structure for table `sound_system`
--

CREATE TABLE `sound_system` (
  `sound_systemID` int(11) NOT NULL,
  `customerEmail` varchar(20) NOT NULL,
  `quantity` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sound_system`
--

INSERT INTO `sound_system` (`sound_systemID`, `customerEmail`, `quantity`, `status`) VALUES
(212, 'asdfas@asd.com', 'asdfas', 'done'),
(213333, 'asdfas@asd.com', 'asdfas', 'done'),
(213344, 'arbin@zaman.com', 'Limited Sound System [2 Pair]', 'done'),
(213345, 'arbin@zaman.com', 'Next Level Sound System With One of the best Dj In', 'done'),
(213346, 'arbin@zaman.com', 'Limited Sound System [2 Pair]', 'done'),
(213347, 'arbin@zaman.com', 'Limited Sound System [2 Pair]', 'done'),
(213348, 'arbin@zaman.com', 'Limited Sound System [2 Pair]', 'done'),
(213349, 'arbin@zaman.com', 'Limited Sound System [2 Pair]', 'done'),
(213350, 'arbin@zaman.com', 'Limited Sound System [2 Pair]', 'done'),
(213351, 'arbin@zaman.com', 'Limited Sound System [2 Pair]', 'done'),
(213352, 'arbin@zaman.com', 'Next Level Sound System With One of the best Dj In', 'done'),
(213353, 'arbin@zaman.com', 'Limited Sound System [2 Pair]', 'done');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `role` varchar(20) NOT NULL,
  `vendorRole` varchar(20) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` int(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `userName`, `role`, `vendorRole`, `address`, `phone`, `email`, `password`) VALUES
(1, 'arbin', 'admin', 'sound_system', 'adfa', 338, 'arbin@zaman.com', 'a1s1d1f1'),
(33, 'Sajid', 'admin', '', 'komuna', 169696969, 'arbin@zaman', 'a1s1d1d1'),
(36, 'arbin1', 'admin', '', 'afadf', 3413, 'ar@bin', 'a1s1d1f1'),
(37, 'arbin1', 'admin', '', 'afadf', 3413, 'ar@bin', 'a1s1d1f1'),
(49, 'fahim', '', 'catering', 'komuna', 232412, 'fa@him.com', 'a1s1d1f1'),
(52, 'asif', 'vendor', 'media', 'komuna', 341341, 'as@if.com', 'a1s1d1f1'),
(53, 'kala@pahar', 'vendor', 'decorator', 'kala@pahar', 2339, 'kala@pahar.com', 'a1s1d1f1'),
(54, 'ashar', 'vendor', 'catering', 'asdfsadf', 2345320, 'ashar@haque.com', 'a1s1d1f1'),
(55, 'ashar', 'vendor', 'catering', 'sadfas', 3414, 'ashar@haque', 'a1s1d1f1'),
(56, 'ashar', 'vendor', 'catering', 'sadfas', 3414, 'ashar@haque.com', 'a1s1d1f1'),
(57, 'tusher', 'vendor', 'media', 'asdfas', 234121, 'tush@ar.com', 'a1s1d1f1'),
(58, 'Sohana', 'vendor', '', 'komuna', 2234234, 'sohana@anika.com', 'a1s1d1f1'),
(59, 'sajid', 'vendor', 'media', 'dsfasdf', 234132, 'saj@id.com', 'a1s1d1f1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookevent`
--
ALTER TABLE `bookevent`
  ADD PRIMARY KEY (`bookingID`);

--
-- Indexes for table `catering`
--
ALTER TABLE `catering`
  ADD PRIMARY KEY (`cateringID`);

--
-- Indexes for table `custompackage`
--
ALTER TABLE `custompackage`
  ADD PRIMARY KEY (`packageID`);

--
-- Indexes for table `cutomersreviews`
--
ALTER TABLE `cutomersreviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `decoration`
--
ALTER TABLE `decoration`
  ADD PRIMARY KEY (`decorationID`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eventID`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`mediaID`);

--
-- Indexes for table `sound_system`
--
ALTER TABLE `sound_system`
  ADD PRIMARY KEY (`sound_systemID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookevent`
--
ALTER TABLE `bookevent`
  MODIFY `bookingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213426;

--
-- AUTO_INCREMENT for table `catering`
--
ALTER TABLE `catering`
  MODIFY `cateringID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `custompackage`
--
ALTER TABLE `custompackage`
  MODIFY `packageID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `decoration`
--
ALTER TABLE `decoration`
  MODIFY `decorationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eventID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `mediaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sound_system`
--
ALTER TABLE `sound_system`
  MODIFY `sound_systemID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213354;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
