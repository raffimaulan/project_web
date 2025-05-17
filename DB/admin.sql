/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.32-MariaDB : Database - db_project_web
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_project_web` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `db_project_web`;

/*Table structure for table `tb_barang` */

DROP TABLE IF EXISTS `tb_barang`;

CREATE TABLE `tb_barang` (
  `id_brg` varchar(5) NOT NULL,
  `nama_brg` varchar(250) NOT NULL,
  `jenis` varchar(20) NOT NULL,
  `satuan` char(5) NOT NULL,
  `stok_awal` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `input_date` datetime NOT NULL,
  `updater` varchar(20) NOT NULL,
  PRIMARY KEY (`id_brg`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tb_barang` */

LOCK TABLES `tb_barang` WRITE;

insert  into `tb_barang`(`id_brg`,`nama_brg`,`jenis`,`satuan`,`stok_awal`,`harga`,`input_date`,`updater`) values ('B0001','indomie','Makanan','06',234,2600,'2024-06-20 17:55:53','raffi'),('B0002','le mineral','ATK','03',206,20000,'2024-06-26 18:29:29','raffi'),('B0003','tanggo','ATK','07',2000,1050,'2024-06-26 19:02:22','raffi'),('B0004','wafer','null','07',200,2000,'2024-07-01 17:33:13','raffi'),('B0005','wafer','J001','06',199,2000,'2024-07-01 17:37:21','raffi'),('B0006','aqua','J002','03',40,16000,'2024-07-01 17:38:17','raffi'),('B0007','pulpen','J003','07',300,2500,'2024-07-01 17:38:57','raffi'),('B0008','bata merah','J004','07',1000,700,'2024-07-01 17:40:51','raffi');

UNLOCK TABLES;

/*Table structure for table `tb_jenis` */

DROP TABLE IF EXISTS `tb_jenis`;

CREATE TABLE `tb_jenis` (
  `id_jenis` varchar(5) DEFAULT NULL,
  `jenis` varchar(30) DEFAULT NULL,
  `input_date` datetime DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci ROW_FORMAT=COMPACT;

/*Data for the table `tb_jenis` */

LOCK TABLES `tb_jenis` WRITE;

insert  into `tb_jenis`(`id_jenis`,`jenis`,`input_date`,`updater`) values ('J001','MAKANAN','2024-07-01 17:35:42','raffi'),('J002','MINUMAN','2024-07-01 17:35:57','raffi'),('J003','ATK','2024-07-01 17:36:07','raffi'),('J004','MATERIAL','2024-07-01 17:36:19','raffi');

UNLOCK TABLES;

/*Table structure for table `tb_keluar` */

DROP TABLE IF EXISTS `tb_keluar`;

CREATE TABLE `tb_keluar` (
  `id_keluar` varchar(20) NOT NULL,
  `tgl_keluar` date DEFAULT NULL,
  `barang_id` varchar(15) DEFAULT NULL,
  `jml_keluar` int(11) DEFAULT NULL,
  `input_date` datetime DEFAULT NULL,
  `updater` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_keluar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tb_keluar` */

LOCK TABLES `tb_keluar` WRITE;

insert  into `tb_keluar`(`id_keluar`,`tgl_keluar`,`barang_id`,`jml_keluar`,`input_date`,`updater`) values ('B-20240628-0001','2024-06-29','B0001',2600,'2024-06-28 16:23:52','raffi'),('B-20240628-0004','2024-06-13','B0003',447,'2024-06-28 17:16:04','raffi');

UNLOCK TABLES;

/*Table structure for table `tb_masuk` */

DROP TABLE IF EXISTS `tb_masuk`;

CREATE TABLE `tb_masuk` (
  `id_masuk` varchar(20) NOT NULL,
  `tgl_masuk` date DEFAULT NULL,
  `barang_id` varchar(15) DEFAULT NULL,
  `jml_masuk` int(11) DEFAULT NULL,
  `input_date` datetime DEFAULT NULL,
  `updater` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_masuk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tb_masuk` */

LOCK TABLES `tb_masuk` WRITE;

insert  into `tb_masuk`(`id_masuk`,`tgl_masuk`,`barang_id`,`jml_masuk`,`input_date`,`updater`) values ('B-20240628-0001','2024-06-29','B0001',200,'2024-06-28 16:31:31','raffi');

UNLOCK TABLES;

/*Table structure for table `tb_satuan` */

DROP TABLE IF EXISTS `tb_satuan`;

CREATE TABLE `tb_satuan` (
  `id_satuan` char(2) NOT NULL,
  `satuan` varchar(50) NOT NULL,
  PRIMARY KEY (`id_satuan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tb_satuan` */

LOCK TABLES `tb_satuan` WRITE;

insert  into `tb_satuan`(`id_satuan`,`satuan`) values ('01','unit'),('02','butir'),('03','dus'),('04','kg'),('05','liter'),('06','bungkus'),('07','pcs');

UNLOCK TABLES;

/*Table structure for table `tb_user` */

DROP TABLE IF EXISTS `tb_user`;

CREATE TABLE `tb_user` (
  `users_id` varchar(50) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` int(1) NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tb_user` */

LOCK TABLES `tb_user` WRITE;

insert  into `tb_user`(`users_id`,`username`,`password`,`status`,`create_date`) values ('0248','raffi','admin',1,'2024-06-18 16:15:13'),('0247','maulana','admin',1,'2024-06-26 19:00:01'),('0249','raffi maulana','admin',1,'2024-06-26 19:00:36'),('0234','kim jong un','admin',1,'2024-06-26 19:01:03');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
