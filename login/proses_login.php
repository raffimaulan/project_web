<?php
session_start();

include '../koneksi.php';

$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM tb_user WHERE username='$username' AND password='$password' AND status=1";
$data = mysqli_query($koneksi, $query);

$cek = mysqli_num_rows($data);

if ($cek > 0) {
    $_SESSION['username'] = $username;
    $_SESSION['status'] = 'login';
    header("location:../index.php");
    exit();
} else {
    echo "<script>alert('username atau password salah');window.location.href='../login.php';</script>";
}
