<?php
  session_start();
  //style.json에 저장되어있는 모든 게시물 정보 보내는 php
  $styleData = fopen("../data/style.json","r+")  or die("Unable to open file!");
  $array = [];
  while(!feof($styleData)){ // 파일 끝날때까지
    $str = fgets($styleData); //한줄씩 추출
    if (!empty($str)){//비어있지 않다면
      $s = explode('"',$str); // 따옴표 기준으로 split
      // 배열에 전부 push
      array_push($array,["title"=>$s[3],"content"=>$s[7],"file"=>$s[11],"userName"=>$s[15]]);
    }
  }
  //js로 모든 게시물 정보 보낸다. 
  echo json_encode($array, JSON_UNESCAPED_UNICODE);
 ?>
