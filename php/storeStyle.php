<?php
  include "session.php";
  //게시물 저장을 위한 php
  $title = $_POST['title']; //글 제목
  $content = $_POST['content']; // 글 내용
  $file = $_POST['file']; // 이미지 링크

  $styleData = fopen("../data/style.json","a+")  or die("Unable to open file!");
  // 클라이언트에게 받아온 게시물 정보 배열로 만듬
  $infoArray = ['title'=>$title, 'content'=>$content, 'file'=>$file, 'userName'=>$_SESSION['userName']];
  $myObj = json_encode($infoArray, JSON_UNESCAPED_UNICODE)."\n";
  $flag = 0;

  while(!feof($styleData)){ //style.json파일 끝날때까지 한줄씩 읽음
    $readLine=fgets($styleData);//한줄씩 추출
    if($readLine!=''){
    $text = explode('"',$readLine); //따옴표 기준으로 split
    if ($title ==$text[3]) { // 받아온 게시물 제목과 일치하는 정보가 이미 있는 경우
      echo "이미 해당 제목의 글이 존재합니다.";
      $flag = 1;
      break;
      }
    }
  }
  if ($flag == 0){ //게시물 제목이 중복되지 않는 경우
    fwrite($styleData,$myObj); // json 파일에 쓴다 
    echo "게시글 등록이 완료되었습니다.";
  }
 ?>
