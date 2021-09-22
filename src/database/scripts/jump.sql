-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 22, 2021 at 08:06 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `jump`
--
CREATE DATABASE IF NOT EXISTS `jump` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `jump`;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Under Armour'),
(2, 'Nike'),
(3, 'Adidas'),
(4, 'Reebok'),
(5, 'Puma'),
(6, 'Champion');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Accesorios'),
(2, 'Zapatillas'),
(3, 'Remeras'),
(4, 'Tops'),
(5, 'Pantalones'),
(6, 'Buzos');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text,
  `id_category` int(11) DEFAULT NULL,
  `price` float NOT NULL,
  `id_size` int(11) DEFAULT NULL,
  `id_brands` int(11) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `id_category`, `price`, `id_size`, `id_brands`, `image`) VALUES
(1, 'Under Armour Bag', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 1, 8000, 1, 1, 'bolso.jpg'),
(2, 'Nike Shoes', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 2, 10000, 1, 2, 'zapas.jpg'),
(3, 'Adidas T-shirt', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 3, 7500, 1, 3, 'ropa.jpg'),
(4, 'Reebok Top', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 4, 4000, 1, 4, 'top.jpg'),
(5, 'Puma Short', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 5, 6800, 1, 5, 'short.jpg'),
(6, 'Adidas Combo', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 6, 11300, 1, 3, 'combo.jpg'),
(7, 'Backpacking', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 1, 9000, 1, 6, 'product-1630431157708.jpg'),
(8, 'Running Socks', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 1, 1500, 1, 6, 'product-1630431306371.jpg'),
(9, 'Nike Shoes Womens Odyssey React 2 ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 2, 9250, 1, 2, 'product-1630441821404.jpg'),
(10, 'Under Armour Boys Shorts', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 5, 4000, 1, 1, 'product-1630431879356.jpg'),
(11, 'Nike Sportswear Hoddie', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 6, 12000, 1, 2, 'product-1630432300365.jpg'),
(12, 'Nike Women\'s Dri-Fit Classic Sports', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 4, 5000, 1, 2, 'product-1630432475357.jpg'),
(13, 'Under Armour Women\'s Shorts', ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt ', 5, 6400, 1, 1, 'product-1630455366635.jpg'),
(14, 'Nike Men\'s Legend Long Sleeve Tee ', ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt ', 3, 7800, 1, 2, 'product-1630456133859.jpg'),
(15, 'Champion Men\'s Manuscript Backpack', ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt ', 1, 18000, 1, 6, 'product-1630456894084.jpg'),
(16, 'Adidas Women\'s Pacer 3-Stripes Woven Shorts ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt ', 5, 4100, 1, 3, 'product-1631882778629.jpg'),
(18, 'Nike Women\'s Swoosh Top', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt ', 4, 5000, 1, 2, 'product-1631883139347.jpg'),
(19, 'Nike Brasilia Medium Training Backpack', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt ', 1, 7000, 1, 2, 'product-1631883533601.jpg'),
(20, 'Nike Men\'s Flex Experience Run 8 Shoes ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 2, 8000, 1, 2, 'product-1631883726086.jpg'),
(22, 'Adidas Women\'s Tiro Track Jacket ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 6, 12000, 1, 3, 'product-1631884009600.jpg'),
(23, 'Nike Dri-FIT Short ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sit minima obcaecati inventore id, sapiente molestiae eveniet nostrum ad similique cupiditate error quisquam modi illo expedita exercitationem saepe nisi nesciunt', 5, 3000, 1, 2, 'product-1631884243056.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `products_colors`
--

CREATE TABLE `products_colors` (
  `id` int(11) NOT NULL,
  `id_product_fk` int(11) DEFAULT NULL,
  `id_color` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products_orders`
--

CREATE TABLE `products_orders` (
  `id` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `id_order` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `id_product_fk2` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`id`, `name`, `id_product_fk2`) VALUES
(1, 'bolso.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `rols`
--

CREATE TABLE `rols` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rols`
--

INSERT INTO `rols` (`id`, `name`) VALUES
(1, 'cliente'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `name`) VALUES
(1, NULL),
(2, '8.5'),
(3, 'S'),
(4, 'M'),
(5, 'XL'),
(6, 'S');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar_image` varchar(100) DEFAULT NULL,
  `id_rol_fk` int(11) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `avatar_image`, `id_rol_fk`, `country`, `location`) VALUES
(2, 'Valentin', 'valentinlamothecoulomme@hotmail.com', '$2b$10$Z/cwRJwPB1herndOe0mvA.Q0UfYR1cxTAELV41/56k9LonZkcjKaK', 'avatar-1630442417714.jpg', 2, NULL, NULL),
(3, 'Ivan', 'ivanfrancoarg@gmail.com', '$2b$10$4.kUx.AJ0V2trjzlsTXQtepOIp5H0pQ4g8fR85YqRp4x6uFd/F76y', 'avatar-1630445040050.jpg', 1, NULL, NULL),
(4, 'Joel', 'joelmanzino@gmail.com', '$2b$10$fJgTWui4gSlRiyYZDVuICekjzvzIxhhrPdqhwhtMW4RP8rvBT7vtC', 'avatar-1630607511005.jpg', 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user_idx` (`id_user`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category_idx` (`id_category`),
  ADD KEY `id_size_idx` (`id_size`),
  ADD KEY `id_brands_idx` (`id_brands`);

--
-- Indexes for table `products_colors`
--
ALTER TABLE `products_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product_idx` (`id_product_fk`),
  ADD KEY `id_color_idx` (`id_color`);

--
-- Indexes for table `products_orders`
--
ALTER TABLE `products_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product_idx` (`id_product`),
  ADD KEY `id_order_idx` (`id_order`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product_fk2_idx` (`id_product_fk2`);

--
-- Indexes for table `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `id_rol_idx` (`id_rol_fk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `products_colors`
--
ALTER TABLE `products_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rols`
--
ALTER TABLE `rols`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `id_brands` FOREIGN KEY (`id_brands`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_size` FOREIGN KEY (`id_size`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products_colors`
--
ALTER TABLE `products_colors`
  ADD CONSTRAINT `id_color` FOREIGN KEY (`id_color`) REFERENCES `colors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_product_fk` FOREIGN KEY (`id_product_fk`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products_orders`
--
ALTER TABLE `products_orders`
  ADD CONSTRAINT `id_order` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `id_product_fk2` FOREIGN KEY (`id_product_fk2`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `id_rol_fk` FOREIGN KEY (`id_rol_fk`) REFERENCES `rols` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
