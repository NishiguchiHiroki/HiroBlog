<?php include('./template/head.php'); ?>
<body id="index.php">
  <?php include('./template/header.php'); ?>
  <main>
   <div class="main-container">
     <?php include('./template/swiper.php'); ?>
       <div class="heading">
         <h2>新着記事</h2>
       </div>
     <?php include("./template/article.php") ?>
    </div>
    <?php include("./template/sidebar.php") ?>
  </main>
    <?php include("./template/footer.php") ?>
 </body>
</html>
