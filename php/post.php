<?php
  $styleData = fopen("../data/style.json","r+") or die("Unable to open file!");

  $title = $_POST["title"]; // 게시물 제목

  $newArray = []; //클라이언트에게 전달할 json 배열
    while(!feof($styleData)){ //style.json 한줄씩 읽는다.
      $str = fgets($styleData); //한줄씩 추출
      if(!empty($str)){
        $s = explode('"',$str);//따옴표 기준으로 split
            if($s[3]==$title){ //게시물 제목이 같을 경우 push
              array_push($newArray,["title"=>$s[3],"content"=>$s[7],"file"=>$s[11]]);
              break;
          }
      }
    }
    // js로 동일한 게시물 제목을 가진 게시물 정보를 보낸다. 
  echo json_encode($newArray, JSON_UNESCAPED_UNICODE);

 ?>
