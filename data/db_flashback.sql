-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 29, 2021 at 10:26 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_flashback`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_accounts`
--

CREATE TABLE `tbl_accounts` (
  `account_id` int(11) NOT NULL,
  `account_username` varchar(50) NOT NULL,
  `account_password` varchar(100) NOT NULL,
  `account_email` varchar(320) NOT NULL,
  `account_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_accounts`
--

INSERT INTO `tbl_accounts` (`account_id`, `account_username`, `account_password`, `account_email`, `account_date`) VALUES
(1, 'demo123', 'pass123', 'demo@example.com', '2021-01-29 17:42:13');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `comments_id` int(11) NOT NULL,
  `comments_copy` text NOT NULL,
  `comments_user_id` int(11) NOT NULL,
  `comments_media_id` int(11) NOT NULL,
  `comments_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_levels`
--

CREATE TABLE `tbl_levels` (
  `levels_id` int(11) NOT NULL,
  `levels_title` varchar(40) NOT NULL,
  `levels_protected` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_levels`
--

INSERT INTO `tbl_levels` (`levels_id`, `levels_title`, `levels_protected`) VALUES
(1, '1', 1),
(2, '2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media`
--

CREATE TABLE `tbl_media` (
  `media_id` int(11) NOT NULL,
  `media_cover` varchar(100) NOT NULL,
  `media_title` varchar(80) NOT NULL,
  `media_desc` text NOT NULL,
  `media_runtime` varchar(25) NOT NULL,
  `media_src` varchar(100) NOT NULL,
  `media_type_id` int(11) NOT NULL,
  `media_release` year(4) NOT NULL,
  `media_mature` tinyint(1) NOT NULL,
  `media_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media`
--

INSERT INTO `tbl_media` (`media_id`, `media_cover`, `media_title`, `media_desc`, `media_runtime`, `media_src`, `media_type_id`, `media_release`, `media_mature`, `media_added`) VALUES
(1, 'rock_around_the_clock_poster.jpg', 'Rock around the Clock', 'If rock and roll was a social and cultural revolution, then “(We\'re Gonna) Rock Around The Clock” was its Declaration of Independence.', '2m', 'rock_around_the_clock.mp3', 3, 1955, 1, '2021-01-29 21:11:16'),
(2, 'im_a_believer_poster.jpg', 'I\'m a Believer', '\"I\'m a Believer\" is a song composed by Neil Diamond and recorded by The Monkees in 1966 with the lead vocals by Micky Dolenz. ', '3m', 'im_a_believer.mp3', 3, 1967, 1, '2021-01-29 21:13:47'),
(3, 'dancing_queen_poster.jpg', 'Dancing Queen', '\"Dancing Queen\" is a Europop song by the Swedish group ABBA, and the lead single from their fourth studio album, Arrival.', '4m', 'dancing_queen.mp3', 3, 1975, 1, '2021-01-29 21:14:58'),
(4, 'take_on_me_poster.jpg', 'Take on me', '\"Take On Me\" is a 1984 song by Norwegian synth-pop band A-ha. The original version was produced by Tony Mansfield and remixed by John Ratcliff.', '4m', 'take_on_me.mp3', 3, 1985, 1, '2021-01-29 21:16:23'),
(5, 'wannabe_poster.jpg', 'Wannabe', '\"Wannabe\" is the debut single by British girl group the Spice Girls. ', '3m', 'wannabe.mp3', 3, 1996, 1, '2021-01-29 21:17:44'),
(6, 'twinkle_twinkle_little_star_poster.jpg', 'Twinkle Twinkle Little Star', 'winkle, Twinkle, Little Star\" is a popular English lullaby. The lyrics are from an early-19th-century English poem by Jane Taylor, \"The Star\".', '2m', 'twinkle_twinkle_little_star.mp3', 3, 1951, 0, '2021-01-29 21:19:32'),
(7, 'old_king_cole_poster.jpg', 'Old King Cole', '\"Old King Cole\" is a British nursery rhyme first attested in 1708. Though there is much speculation about the identity of King Cole, it is unlikely that he can be identified reliably as any historical figure.', '3m', 'old_king_cole.mp3', 3, 1963, 0, '2021-01-29 21:21:26'),
(8, 'cats_in_the_cradle_poster.jpg', 'Cats in the cradle', '\"Cat\'s in the Cradle\" is a 1974 folk rock song by Harry Chapin from the album Verities & Balderdash.', '4m', 'cats_in_the_cradle.mp3', 3, 1974, 0, '2021-01-29 21:22:49'),
(9, 'the_big_rock_candy_mountain_poster.jpg', 'The Big Rock Candy Mountain', 'Big Rock Candy Mountain\", first recorded by Harry McClintock in 1928, is a country folk song about a hobo\'s idea of paradise, a modern version of the medieval concept of Cockaigne.', '2m', 'the_big_rock_candy_mountain.mp3', 3, 1982, 0, '2021-01-29 21:24:13'),
(10, 'wiggerly_woo_poster.jpg', 'Wiggerly Woo', 'A 1992 PIF by the Community Hygiene Concern about preventing the spread of the Toxicara Canis worm, which can cause blindness in children.', '2m', 'wiggerly_woo.mp3 ', 3, 1992, 0, '2021-01-29 21:25:43'),
(11, 'moby_dick_poster.jpg', 'Moby Dick', 'Moby Dick is a 1956 film adaptation of Herman Melville\'s 1851 novel Moby-Dick. It was directed by John Huston with a screenplay by Huston and Ray Bradbury.', '3m', 'moby_dick.mp4', 1, 1956, 1, '2021-01-29 21:30:20'),
(12, 'cleopatra_poster.jpg', 'Cleopatra', 'Cleopatra is a 1963 American epic historical drama film directed by Joseph L. Mankiewicz.', '6m', 'cleopatra.mp4', 1, 1963, 1, '2021-01-29 21:34:40'),
(13, 'captain_america_poster.jpg', 'Captain America', 'Captain America is a 1979 American made-for-television superhero film loosely based on the Marvel Comics character of the same name, directed by Rod Holcomb and starring Reb Brown', '1m', 'captain_america.mp4', 1, 1979, 1, '2021-01-29 21:36:49'),
(14, 'batman_poster.jpg', 'Batman', 'Batman is a 1989 American superhero film directed by Tim Burton and produced by Jon Peters and Peter Guber, based on the DC Comics character of the same name.', '2m', 'batman.mp4', 1, 1989, 1, '2021-01-29 21:37:38'),
(15, 'twister_poster.jpg', 'Twister', 'Twister is a 1996 American epic disaster adventure film directed by Jan de Bont from a screenplay by Michael Crichton and Anne-Marie Martin.', '3m', 'twister.mp4', 1, 1996, 1, '2021-01-29 21:43:18'),
(16, 'peter_pan_poster.jpg', 'Peter Pan', 'Peter Pan is a 1953 American animated adventure fantasy film produced by Walt Disney Productions and based on the 1904 play Peter Pan, or The Boy Who Wouldn\'t Grow Up by J. M. Barrie.', '1m', 'peter_pan.mp4', 1, 1953, 0, '2021-01-29 21:47:32'),
(17, 'how_the_grinch_stole_christmas_poster.jpg', 'How the Grinch Stole Christmas', 'How the Grinch Stole Christmas! (also known as Dr. Seuss\' How the Grinch Stole Christmas!) is a 1966 American animated television special, directed and co-produced by Chuck Jones.', '1m', 'how_the_grinch_stole_christmas.mp4', 1, 1966, 0, '2021-01-29 21:51:34'),
(18, 'petes_dragon_poster.jpg', 'Pete\'s Dragon', 'Pete\'s Dragon is a 1977 American live-action/animated musical fantasy comedy film directed by Don Chaffey, produced by Jerome Courtland and Ron Miller, and written by Malcolm Marmorstein.', '2m', 'petes_dragon.mp4', 1, 1977, 0, '2021-01-29 22:05:05'),
(19, 'the_goonies_poster.jpg', 'The Goonies', 'The Goonies is a 1985 American adventure comedy film co-produced and directed by Richard Donner from a screenplay by Chris Columbus, based on a story by executive producer Steven Spielberg.', '3m', 'the_goonies.mp4', 1, 1985, 0, '2021-01-29 22:06:31'),
(20, 'hercules_poster.jpg', 'Hercules', 'Hercules is a 1997 American animated musical fantasy film produced by Walt Disney Feature Animation for Walt Disney Pictures.', '1m', 'hercules.mp4', 1, 1997, 0, '2021-01-29 22:07:25'),
(21, 'zorro_poster.jpg', 'Zorro', 'Zorro (also known as Disney\'s Zorro) is an American Spanish action-adventure western series produced by Walt Disney Productions and starring Guy Williams', '2m', 'zorro.mp4', 2, 1957, 1, '2021-01-29 22:09:34'),
(22, 'gilligans_island_poster.jpg', 'Gilligans Island', 'illigan\'s Island is an American sitcom created and produced by Sherwood Schwartz.', '1m', 'gilligans_island.mp4', 2, 1964, 1, '2021-01-29 22:10:42'),
(23, 'wonder_woman_poster.jpg', 'Wonder Woman', 'Wonder Woman, known for seasons 2 and 3 as The New Adventures of Wonder Woman, is an American action superhero television series based on the DC Comics comic book superhero of the same name. ', '2m', 'wonder_woman.mp4', 2, 1975, 1, '2021-01-29 22:11:46'),
(24, 'full_house_poster.jpg', 'Full House', 'ull House is an American television sitcom created by Jeff Franklin for ABC. ', '2m', 'full_house.mp4', 2, 1987, 1, '2021-01-29 22:13:04'),
(25, 'oz_poster.jpg', 'Oz', 'Oz is an American television drama series set at a fictional men\'s prison created by Tom Fontana, who also wrote or co-wrote all of the series\'s 56 episodes.', '1m', 'oz.mp4', 2, 1997, 1, '2021-01-29 22:13:54'),
(26, 'the_mickey_mouse_club_poster.jpg', 'The Mickey Mouse Club House', 'Mickey Mouse Clubhouse is an American interactive computer-animated children\'s television series which aired from May 5, 2006, to November 6, 2016.', '3m', 'the_mickey_mouse_club.mp4', 2, 1955, 0, '2021-01-29 22:14:51'),
(27, 'the_archie_show_poster.jpg', 'The Archie Show', 'The Archie Show (also known as The Archies) is an American musical sitcom television series produced by Filmation for CBS. Based on the Archie Comics, created by Bob Montana in 1941.', '1m', 'the_archie_show.mp4', 2, 1968, 0, '2021-01-29 22:15:48'),
(28, 'fat_albert_poster.jpg', 'Fat Albert', 'at Albert and the Cosby Kids is an American animated television series created, produced, and hosted (in live action bookends) by comedian Bill Cosby.', '1m', 'fat_albert.mp4', 2, 1972, 0, '2021-01-29 22:16:50'),
(29, 'the_inrcedible_hulk_poster.jpg', 'The Incredible Hulk', 'he Incredible Hulk is an American television series based on the Marvel Comics character The Hulk.', '1m', 'the_inrcedible_hulk.mp4', 2, 1977, 0, '2021-01-29 22:18:03'),
(30, 'the_real_ghostbusters_poster.jpg', 'The Real Ghostbusters', 'The Real Ghostbusters is an American animated television series, a spin-off/sequel of the 1984 comedy movie Ghostbusters.', '1m', 'the_real_ghostbusters.mp4', 2, 1986, 0, '2021-01-29 22:18:58');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media_likes`
--

CREATE TABLE `tbl_media_likes` (
  `likes_id` int(11) NOT NULL,
  `likes_media_id` int(11) NOT NULL,
  `likes_user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media_types`
--

CREATE TABLE `tbl_media_types` (
  `types_id` int(11) NOT NULL,
  `types_title` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media_types`
--

INSERT INTO `tbl_media_types` (`types_id`, `types_title`) VALUES
(1, 'movie'),
(2, 'tvshow'),
(3, 'audio');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_profiles`
--

CREATE TABLE `tbl_profiles` (
  `profiles_id` int(11) NOT NULL,
  `profiles_account_id` int(11) NOT NULL,
  `profiles_name` varchar(20) NOT NULL,
  `profiles_icon` varchar(100) NOT NULL,
  `profiles_level_id` int(11) NOT NULL,
  `profiles_pin` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_profiles`
--

INSERT INTO `tbl_profiles` (`profiles_id`, `profiles_account_id`, `profiles_name`, `profiles_icon`, `profiles_level_id`, `profiles_pin`) VALUES
(1, 1, 'Admin', 'admin.jpg', 1, 1234),
(2, 1, 'Kids', 'kids.jpg', 2, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  ADD PRIMARY KEY (`comments_id`);

--
-- Indexes for table `tbl_levels`
--
ALTER TABLE `tbl_levels`
  ADD PRIMARY KEY (`levels_id`);

--
-- Indexes for table `tbl_media`
--
ALTER TABLE `tbl_media`
  ADD PRIMARY KEY (`media_id`);

--
-- Indexes for table `tbl_media_likes`
--
ALTER TABLE `tbl_media_likes`
  ADD PRIMARY KEY (`likes_id`);

--
-- Indexes for table `tbl_media_types`
--
ALTER TABLE `tbl_media_types`
  ADD PRIMARY KEY (`types_id`);

--
-- Indexes for table `tbl_profiles`
--
ALTER TABLE `tbl_profiles`
  ADD PRIMARY KEY (`profiles_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  MODIFY `comments_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_levels`
--
ALTER TABLE `tbl_levels`
  MODIFY `levels_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_media`
--
ALTER TABLE `tbl_media`
  MODIFY `media_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_media_likes`
--
ALTER TABLE `tbl_media_likes`
  MODIFY `likes_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_media_types`
--
ALTER TABLE `tbl_media_types`
  MODIFY `types_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_profiles`
--
ALTER TABLE `tbl_profiles`
  MODIFY `profiles_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
