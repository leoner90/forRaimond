-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2021 at 03:06 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `raimondsmysqlimplementation`
--

-- --------------------------------------------------------

--
-- Table structure for table `mysqlraimondstest`
--

CREATE TABLE `mysqlraimondstest` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mysqlraimondstest`
--

INSERT INTO `mysqlraimondstest` (`id`, `first_name`, `last_name`, `email`, `gender`) VALUES
(1, 'Boigie', 'Soame', 'bsoame0@privacy.gov.au', 'Male'),
(2, 'Valera', 'Filatovs', 'valera.filatovs@inbox.com', 'Female'),
(3, 'Leonids', 'Gurockins', 'leonsdf@gmail.com', 'Male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mysqlraimondstest`
--
ALTER TABLE `mysqlraimondstest`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mysqlraimondstest`
--
ALTER TABLE `mysqlraimondstest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
