$(document).ready(function(){
  // 옷 사진 클릭시 실행되는 js
  var temp = decodeURI(location.href.split("#")[1]); // 주소 디코드(옷 이름을 주소로 넘김)
  var keyword = temp; //옷 이름 저장
  var exist_list = []; // 중복 제거위해 선언한 배열
  //주소로 받은 옷 이름을 통해 서버에서 검색하여 해당 옷의 정보를 불러옴
  $.ajax({
    type :"POST",
    url:"../php/clothesInfo.php",
    data: { keyword: keyword },
    async:false, //동기형으로
    error : function(data) {   },
    success : function(data) {
      var exist_list=[];
      //alert(data);
      $.each(JSON.parse(data), function(i,item){ // 옷 정보를 json 형태로 받아옴
        var itemName = item['item']; // 옷 이름
        var imageNum = item['imageNum']; // 옷 이미지 번호
        if (exist_list[itemName]==undefined){
          // 해당 상품이 처음 검색되었을 시 , 사이트에 정보가 뜨도록 한다.
          $('.item_div').prepend("<div class='image'><img class = sample src='../images/clothes/"+imageNum+".jpg'><p>"+itemName+"</p></div>");
          $('#shoppingmall').append(item['shoppingmall']); //쇼핑몰 이름 적기 
          $('#link').attr('href',item['link']); // 쇼핑몰 사이트 주소로 속성 설정
          exist_list[itemName]=true;
        }
      });
    }
  });

});
