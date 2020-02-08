<?php include('./template/head.php'); ?>
<body id="search.php">
<?php include('template/header.php'); ?>
<main>
  <div class="main-container">
  <div class="breadcrumb">
      <a href=""><i class="fas fa-home"></i><span>HOME</span><i class="fas fa-angle-right"></i></a>
      <a href=""><span>検索結果：検索内容</span><i class="fas fa-angle-right"></i></a>
    </div>

    <div class="heading">
      <h2>検索記事一覧</h2>
    </div>
  <?php include("template/article.php") ?>
    </div>
    <?php include("template/sidebar.php") ?>
  </main>
    <?php include("template/footer.php") ?>
 </body>
</html>