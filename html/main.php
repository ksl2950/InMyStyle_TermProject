<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/main.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>In my style</title>
  </head>
  <body>
    <br>
    <div class="div_register">
      <?php include '../php/session.php';
      if($login){ // 로그인이 되어있는 경우 메인 페이지에 사용자 이름이 뜬다.
        echo "<p id='user'>".$_SESSION['userName'].'님'."</p>";
        ?>
        <button  id="logout" type="button" name="button" onclick="location.href='../php/logout.php'">로그아웃</button>
      <?php  }
      else{// 로그인이 되어있지 않은 경우 로그인 버튼과 회원가입 버튼이 뜬다.
        ?>
        <p id= "login_btn" onclick="location.href='login.html'">LOGIN</p>   <!--로그인버튼 -->
        <p id= "join_btn" onclick="location.href='join.html'">JOIN</p>  <!--회원가입 버튼 -->
  <?php } ?>
      </div>
      <!-- 웹페이지 타이틀 -->
    <div class="div_top" >
      <h1> In my style
        <img id="profile" src="../images/pageIcon.png" alt="profile" >
      </h1>
    </div>
        <!-- 검색창 -->
      <div class="search">
        <input type="text"  class="search_txt" value="원하는 옷을 검색해보세요!">
        <input type="image" class="search_btn" src="../images/search.png"></div>
    <!-- 메뉴바 -->
    <div class="menu">
      <ul>
        <li class="menu_btn"><a href="main.php">HOME </a> |</li>
        <li class="menu_btn"><a href="clothes.html"> clothes </a>|</li>
        <li class="menu_btn"><a href="styleshare.php"> styleshare </a>|</li>
        <li class="menu_btn"><a href="shoppingmall.html"> shoppingmall </a></li>
      </ul>
      </div>
      <!--배너 꾸미기용 사진 -->
      <img id ='banner_1'src="../images/banner1.PNG" alt="banner1">
      <img id ='banner_2' src="../images/banner2.PNG" alt="banner2">
      <img id ='home_icon' src="../images/home.PNG" alt="home">
      <img id ='banner_3' src="../images/banner3.PNG" alt="banner3">
      <img id ='banner_4' src="../images/banner4.PNG" alt="banner4">
      <script src="../js/main.js"></script>
  </body>
</html>
