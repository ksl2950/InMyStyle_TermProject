<?php
  include 'session.php';
  $clothesFile = fopen("../data/clothes.json","a+") or die("Unable to open file!");

  $season = $_POST["season"]; //계절
  $kinds = $_POST["kinds"]; // 옷 종류
  $keyword = $_POST["keyword"]; // 키워드

  $newArray = []; //클라이언트에게 전달할 json 배열
    while(!feof($clothesFile)){ // 파일 끝날때까지 한줄씩 읽기
      $str = fgets($clothesFile); //한줄씩 추출
      if(!empty($str)){
        $s = explode('"',$str); //따옴표 기준으로 split
        if ($s[11] == $season && $s[15] == $kinds){ //받아온 계절,옷 종류와 일치하는 정보인 경우
          if($keyword=='') //키워드를 입력받지 않은 경우
            array_push($newArray,["imageNum"=>$s[3],"item"=>$s[7],"season"=>$s[11],"kinds"=>$s[15],"shoppingmall"=>$s[19],"link"=>$s[23]]);
          else //키워드를 입력받은 경우
            if(strpos($s[7],$keyword)!=false){ //키워드가 포함된 아이템만 push
              array_push($newArray,["imageNum"=>$s[3],"item"=>$s[7],"season"=>$s[11],"kinds"=>$s[15],"shoppingmall"=>$s[19],"link"=>$s[23]]);
            }
        }
      }
    }
  echo json_encode($newArray, JSON_UNESCAPED_UNICODE);

 ?>
