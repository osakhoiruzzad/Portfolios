<?php
$page = $_GET['page'] ?? 'arts';
$allowed = ['arts', 'works', 'contact'];
if (!in_array($page, $allowed)) {
    $page = 'arts';
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Osa Khoiruzzad - Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
</head>
<body>

<header>
    <img class="img-logo" src="assets/OSA KHOIRUZZAD.png">
</header>

<nav>
    <a href="?page=arts" class="link arts">Arts</a>
    <a href="?page=works" class="link works">Works</a>
    <button class="link contact" id="contactTrigger">Contact Us</button>

</nav>

<main>
    <?php include "pages/$page.php"; ?>
</main>

<footer>
    © 2026 Osa Khoiruzzad — Powered by Myself, GitHub.io and also ChatGPT ofc.
</footer>

<div id="contactModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeContact()">×</span>

        <a class="contact-btn" href="https://wa.me/6282337251492" target="_blank">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg">
            WhatsApp
        </a>

        <a class="contact-btn" href="mailto:emailanda@gmail.com">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg">
            E-mail
        </a>
    </div>
</div>
<script src="script.js"></script>
</body>

</html>
