<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>회원가입</title>
    <link rel="stylesheet" href="../css/register.css"/>
  </head>
  <body>
    <div class="inputBox">
<?php
//POST 방식으로 회원가입 정보 받아옴
$id= $_POST["id"]; //id
$pw = $_POST["pw"];//pw
$name = $_POST['name'];//이름

//사용자 정보가 들어있는 user.txt 파일 생성
$userData = fopen("../data/user.txt","a+") or die("Unable to open file!");

//텍스트파일 한줄씩 읽고 아이디 중복 체크하기
$flag = 0; //아이디 중복 여부 확인하는 플래그
while(!feof($userData)) { //텍스트 파일 한줄씩 읽기
  $readLine=fgets($userData); //텍스트 파일 한줄씩 저장
  if($readLine!=''){
    $textId = explode('|',$readLine); //'|'단위로 문자열 끊어서 배열로 저장
    if ($id ==$textId[0]) { //이미 텍스트 파일에 아이디가 존재할 경우
      echo "이미 아이디가 존재합니다.<br>";
      $flag = 1;//아이디 중복이므로 플래그 1로 설정
      break;
    }
  }
}
//아이디가 중복되지 않는 경우에만 txt에 사용자 정보 저장
// id pw nickname 순으로 텍스트에 저장
if ($flag == 0){ //플래그가 0 이면 중복이 되지 않은 것임
  $makeInfo = $id.'|'.$pw.'|'.$name."\n";//텍스트 파일에 저장할 문자열 makeinfo 만들기 (id,pw,name)순
  fwrite($userData,$makeInfo);//userData파일에 makeInfo문자열 쓰기

?>
<p>회원가입이 완료되었습니다!</p>
<button type="button" name="button" onclick="location.href='../php/main.php'">홈으로 이동</button>
<?php } ?>

</div>
</body>
</html>
