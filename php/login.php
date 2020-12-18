<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>로그인 결과</title>
    <link rel="stylesheet" href="../css/register.css"/>
  </head>
  <body>
    <div class="inputBox">
<?php
//로그인 성공 여부를 나타내는 페이지
  session_start(); //세션 열기
  $loginID = $_POST['loginId']; //로그인폼에서 입력한 id 가져옴
  $loginPW = $_POST['loginPW']; //로그인폼에서 입력한 pw 가져옴
  fopen("../data/user.txt","a+"); //텍스트 파일 없는 경우 생성
  $userData = fopen("../data/user.txt","r+") or die("Unable to open file!"); //텍스트 파일 읽기 모드로 열기
  $flag = 0;//로그인 성공여부를 결정할 플래그

  while(!feof($userData)) { //텍스트 파일 한줄씩 읽기
    $readLine=fgets($userData);//readline 변수에 한줄 저장
    if($readLine!=""){
    $textId = explode('|',$readLine);//'|'기준으로 문자열 잘라서 배열 만듬
      if ($loginID ==$textId[0]) { // 아이디가 같은 경우
        if ($loginPW == $textId[1]){ //비밀번호도 같은 경우
          $flag = 1;//로그인 성공이므로 플래그 1이 됨
          $_SESSION['userName']= $textId[2]; //세션에 사용자 이름 저장
          echo $_SESSION['userName']."님 환영합니다!";
          ?>
          <br>
          <a href="../php/main.php">홈으로 이동</a>

          <?php break;
        }
      }
    }
  }
  if($flag==0){ //플래그가  0인경우 로그인 실패
  echo "로그인 정보가 잘못되었습니다.  ";?>
  <br><br>
  <a href="../html/login.html">다시 로그인하기</a>&nbsp;&nbsp;
  <a href="../html/join.html">회원가입</a>
  <?php
  }
  ?>

</div>
</body>
</html>
