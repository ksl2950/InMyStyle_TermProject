$(document).ready(function(){
  // 옷 종류 고르는 팝업창에서 확인 버튼 눌렀을 시 실행되는 쿼리
  $("#ok_btn").click(function(){
    var season = $("#season option:selected").val(); //계절 value
    var kinds = $("input[name='clothes']:checked").val(); // 옷 종류 value
    var keyword = $("#keyword").val(); // 키워드 value
    var exist_list=[];
    if(kinds==undefined){ // 옷 종류 선택 안한 경우
      alert("옷 종류를 선택해주세요");
      return;
    }
    // 입력한 폼 값에 맞는 옷 정보를 서버에서 가져온다.
    $.ajax({
      type :"POST",
      url:"../php/search_clothes.php",
      data: {season : season,
             kinds : kinds,
             keyword: keyword },
      async:false, //동기형으로
      error : function(data) {   },
      success : function(data) {
        $('.style_body').empty();
        //서버에서 맞는 정보들을 json형태로 묶어서 가져온다.
        $.each(JSON.parse(data), function(i,item){
          var itemName = item['item']; // 상품 이름
          var imageNum = item['imageNum']; //이미지 번호
          if (exist_list[itemName]==undefined){ // 중복 제거
            //검색한 결과 정보들을 띄운다.
            var encodeName = "'"+itemName+"'";
            $('.style_body').append('<div class="image"><img class = "sample" src="../images/clothes/'+imageNum+'.jpg" onclick="clickImage('+encodeName+')"><p>'+itemName+'</p></div>');
            exist_list[itemName]=true;
          }
        });
      } //통신이 성공적으로 이루어진 경우
    });
    location.href="#";
  });
});

//상품 이미지를 클릭한 경우 넘어가는 페이지 (상품 이름도 같이 넘긴다.)
function clickImage(id){
  var link = 'http://localhost/TermProject/html/clothesInfo.html#'+id;
  location.href=link;
}
