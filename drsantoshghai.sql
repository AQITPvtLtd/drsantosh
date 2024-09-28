-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2024 at 07:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drsantoshghai`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `short_name` varchar(200) NOT NULL,
  `short_desc` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `tags` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `name`, `short_name`, `short_desc`, `image`, `description`, `date`, `tags`, `url`) VALUES
(1, 'Diabetes Management: Tips for Controlling Blood Sugar Levels', 'Diabetes Management', 'Diabetes is a chronic condition that affects millions of people worldwide. It occurs when the body is unable to produce or effectively use insulin', 'BlogImage1.png', '<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\">Diabetes is a chronic condition that affects millions of people worldwide. It occurs when the body is unable to produce or effectively use insulin, a hormone that regulates blood sugar levels. Managing diabetes effectively requires healthy lifestyle choices, medication, and regular monitoring of blood sugar levels. In this blog, we will discuss essential tips for controlling blood sugar levels and managing diabetes with the expertise of the <strong>Best General Physician in Karol Bagh</strong>.</span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><strong><span style=\"font-size: 24px;\">Understanding Blood Sugar Levels</span></strong></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\">Blood sugar levels, also known as blood glucose levels, are measured in milligrams per deciliter (mg/dL). The <strong>Best General Physician in Karol Bagh</strong> recommends the following blood sugar level targets based on guidelines from the American Diabetes Association:</span></p>\r\n<ul style=\"margin-bottom:0in;margin-top:0in;\" type=\"disc\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Fasting Blood Sugar</strong>: Less than 130 mg/dL</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Before Meals</strong>: 70-130 mg/dL</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>After Meals</strong>: Less than 180 mg/dL</li>\r\n</ul>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><strong><span style=\"font-size: 24px;\">Tips for Controlling Blood Sugar Levels</span></strong></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><strong><span style=\"font-size: 22px;\">1. Healthy Eating Habits</span></strong><span style=\"font-size: 22px;\"><br>One of the key recommendations by the <strong>Best General Physician in Karol Bagh</strong> for managing diabetes is maintaining a healthy diet. Focus on consuming whole, nutrient-dense foods like:</span></p>\r\n<ul style=\"margin-bottom:0in;margin-top:0in;\" type=\"disc\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Vegetables</strong>: Dark leafy greens, broccoli, carrots, and sweet potatoes</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Fruits</strong>: Berries, citrus fruits, and apples</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Protein</strong>: Lean meats, poultry, fish, and plant-based proteins such as beans and lentils</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Whole Grains</strong>: Brown rice, quinoa, and whole-grain bread</li>\r\n</ul>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\">Avoid sugary beverages, refined carbohydrates, and saturated fats to help keep your blood sugar levels stable. Consult the <strong>Best General Physician in Karol Bagh</strong> for personalized dietary advice.</span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><strong><span style=\"font-size: 22px;\">2. Regular Physical Activity</span></strong><span style=\"font-size: 22px;\"><br>Physical activity plays a critical role in diabetes management by improving insulin sensitivity and lowering blood sugar levels. The <strong>Best General Physician in Karol Bagh</strong> suggests:</span></p>\r\n<ul style=\"margin-bottom:0in;margin-top:0in;\" type=\"disc\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>150 Minutes of Aerobic Exercise</strong>: Aim for moderate-intensity exercises such as brisk walking, cycling, or swimming each week.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Strength Training</strong>: Include strength training to build muscle mass and improve glucose regulation. Focus on major muscle groups like legs, arms, and core.</li>\r\n</ul>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\"><strong>3. Monitor Blood Sugar Levels</strong><br>Regular monitoring is essential in controlling diabetes. The <strong>Best General Physician in Karol Bagh</strong> recommends using a glucometer to track your blood sugar levels at these times:</span></p>\r\n<ul style=\"margin-bottom:0in;margin-top:0in;\" type=\"disc\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Before Meals</strong>: To ensure blood sugar is within your target range.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>After Meals</strong>: To check for spikes in blood sugar.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>At Bedtime</strong>: To ensure stable blood sugar levels during sleep.</li>\r\n</ul>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\"><strong>4. Medication Adherence</strong><br>If you have been prescribed medication for diabetes by the <strong>Best General Physician in Karol Bagh</strong>, it is vital to take it as directed. Skipping or adjusting your medication without medical advice can result in dangerous blood sugar fluctuations.</span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><strong><span style=\"font-size: 22px;\">5. Stay Hydrated</span></strong><span style=\"font-size: 22px;\"><br>Staying hydrated helps regulate blood sugar levels and prevents dehydration. The <strong>Best General Physician in Karol Bagh</strong> advises drinking:</span></p>\r\n<ul style=\"margin-bottom:0in;margin-top:0in;\" type=\"disc\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>At Least 8 Cups of Water</strong>: Spread out throughout the day to support healthy kidney function and blood sugar control.</li>\r\n</ul>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\"><strong>6. Manage Stress</strong><br>Chronic stress can negatively impact blood sugar levels. The <strong>Best General Physician in Karol Bagh</strong> suggests incorporating stress-reducing practices such as:</span></p>\r\n<ul style=\"margin-bottom:0in;margin-top:0in;\" type=\"disc\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Yoga</strong>: Aids in reducing stress and improving flexibility.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Meditation</strong>: Helps reduce mental stress and enhances emotional well-being.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Deep Breathing</strong>: Calms the mind and body, promoting relaxation.</li>\r\n</ul>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\"><strong>7. Get Enough Sleep</strong><br>Adequate sleep is critical for overall health and blood sugar management. The <strong>Best General Physician in Karol Bagh</strong> recommends:</span></p>\r\n<ul style=\"margin-bottom:0in;margin-top:0in;\" type=\"disc\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>7-8 Hours of Sleep Per Night</strong>: Establish a consistent sleep schedule to promote balanced blood sugar levels.</li>\r\n</ul>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\"><strong>8. Regular Health Check-Ups</strong><br>Routine health check-ups with the <strong>Best General Physician in Karol Bagh</strong> are essential for managing diabetes effectively. During these visits, your doctor will:</span></p>\r\n<ul style=\"margin-bottom:0in;margin-top:0in;\" type=\"disc\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Monitor Blood Sugar Levels</strong>: Regular testing to ensure blood sugar levels are within the target range.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 22px; font-family: Calibri, sans-serif;\"><strong>Check for Complications</strong>: Assess for any complications, such as nerve damage or kidney disease, related to diabetes.</li>\r\n</ul>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><strong><span style=\"font-size: 24px;\">Overall Summary</span></strong></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-size: 22px;\">Effective diabetes management requires a combination of healthy lifestyle habits, medication adherence, and regular blood sugar monitoring. By following the tips provided by the <strong>Best General Physician in Karol Bagh</strong>, you can control your blood sugar levels and reduce the risk of complications. Make sure to stay hydrated, manage stress, and get enough sleep to promote overall health. Regular check-ups with the <strong>Best General Physician in Karol Bagh</strong> will ensure you stay on top of your diabetes management plan.</span></p>', '2024-09-28', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
