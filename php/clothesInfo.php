<?php
  include 'session.php';
  $clothesFile = fopen("../data/clothes.json","a+") or die("Unable to open file!");

  $keyword = $_POST["keyword"]; // 키워드

  $newArray = []; //클라이언트에게 전달할 json 배열
    while(!feof($clothesFile)){ // clothes.json을 한줄씩 전부 읽는다.
      $str = fgets($clothesFile); //한줄씩 추출
      if(!empty($str)){
        $s = explode('"',$str); //따옴표 기준으로 split
            if($s[7]==$keyword){ //옷 제목이 같아야만 push
              array_push($newArray,["imageNum"=>$s[3],"item"=>$s[7],"season"=>$s[11],"kinds"=>$s[15],"shoppingmall"=>$s[19],"link"=>$s[23]]);
          }
      }
    }
    //json 형태로 인코딩하여 js로 다시 보낸다. 
  echo json_encode($newArray, JSON_UNESCAPED_UNICODE);

 ?>
