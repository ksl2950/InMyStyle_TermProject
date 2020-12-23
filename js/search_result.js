$(document).ready(function(){
  //검색창에서 검색한 결과 뜨는 js
  //*******블로그 참고하여 만든 코드 *******
  var temp = decodeURI(location.href.split("?"));//주소
  data = temp.split(":"); // 검색한 값 받아오기
  var keyword = data[2]; //검색 키워드만 추출
  $('.search_txt').val(keyword); // 입력창에 검색한 값 남기기
  //******************************************
  $.ajax({
    type :"POST",
    url:"../php/search_result.php",
    data: { keyword: keyword },
    async:false, //동기형으로
    error : function(data) {   },
    success : function(data) {
      var exist_list=[]; // 중복 제거 위해 선언
      //이것도 마찬가지로 검색 키워드를 통해 받아온 정보를 띄운다.
      $.each(JSON.parse(data), function(i,item){
        var itemName = item['item']; // 상품 이름
        var imageNum = item['imageNum']; // 이미지 번호
        if (exist_list[itemName]==undefined){
          var encodeName = "'"+itemName+"'"; // 상품이름 문자열로
          //받아온 정보를페이지에 띄운다.
          $('.search_body').append('<div class="image"><img class = "sample" src="../images/clothes/'+imageNum+'.jpg" onclick="clickImage('+encodeName+')"><p>'+itemName+'</p></div>');
          exist_list[itemName]=true;
        }
      });
    }
  });
  // 검색창 누를시 value 비움
  $(".search_txt").click(function(){
    $('.search_txt').val('');
  });
  $(".search_btn").click(function(){
    var keyword = $('.search_txt').val();// 검색한 키워드 저장

  //검색 버튼 누를 시 위와 똑같은 작업 반복
  //위와 내용이 똑같아 주석은 생략
    $.ajax({
      type :"POST",
      url:"../php/search_result.php",
      data: { keyword: keyword },
      async:false, //동기형으로
      error : function(data) {   },
      success : function(data) {
        var exist_list=[];
        $('.search_body').empty();
        $.each(JSON.parse(data), function(i,item){
          var itemName = item['item'];
          var imageNum = item['imageNum'];
          if (exist_list[itemName]==undefined){
          var encodeName = "'"+itemName+"'";
          $('.search_body').append('<div class="image"><img class = "sample" src="../images/clothes/'+imageNum+'.jpg" onclick="clickImage('+encodeName+')"><p>'+itemName+'</p></div>');
          exist_list[itemName]=true;
          }
        });
      }
    });
  });
});
//이미지 클릭하면 넘어가는 주소 (상품 이름도 같이 넘어감)
function clickImage(id){
  var link = 'http://localhost/TermProject/html/clothesInfo.html#'+id;
  location.href=link;
}
