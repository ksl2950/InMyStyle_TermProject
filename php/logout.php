<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/register.css"/>
    <title>로그아웃</title>
  </head>
  <body>
    <!--로그아웃 기능을 구현한 페이지 -->
    <div class="inputBox">
    <p>로그아웃 되었습니다.</p>
    <a href="../php/main.php">홈으로 이동</a>
  </div>
    <?php
    include 'session.php'; //로그인 세션이 저장되어 있는 php
    session_destroy(); //세션 파괴 ?>
  </body>
</html>
