<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="../css/styleshare.css">
  </head>
  <body>
    <!-- 사이트 로고 -->
    <div class="div_top" >
      <h1> In my style
        <img id="profile" src="../images/pageIcon.png" alt="profile" width="50" >
      </h1>
    </div>
    <!-- 메뉴 -->
    <div class="menu">
      <ul>
        <li class="menu_btn"><a href="main.php">HOME </a> |</li>
        <li class="menu_btn"><a href="clothes.html"> clothes </a>|</li>
        <li class="menu_btn"><a href="styleshare.php"> styleshare </a>|</li>
        <li class="menu_btn"><a href="shoppingmall.html"> shoppingmall </a></li>
      </ul>
      </div>
      <br><br>
    <!-- 게시물 등록버튼과 등록된 게시물이 올라오는 div -->
    <div class="body_div">
      <?php include "../php/session.php";
        if($login){
          ?><button type="button" id="register_btn" name="button" onclick=isPossible()>나의 스타일 등록</button>
          <?php }
        else { ?>
          <button type="button" id="register_btn" name="button" onclick=isNotPossible()>나의 스타일 등록</button>
        <?php } ?>
      <table class="postTable">
        <tbody id="tbody">
        <tr>
          <th>제목 &nbsp;</th>
          <th id="content">내용 &nbsp;</th>
          <th>작성자 &nbsp; </th>
        </tr>
        </tbody>
      </table>
    </div>
    <br><br>
    <script src="../js/styleshare.js"></script>
  </body>
</html>
