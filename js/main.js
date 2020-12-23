$(document).ready(function(){
  //메인 페이지에서 검색창에 옷을 검색했을 때 실행되는 js
  var keyword='';
  $('.search_txt').click(function(){
    $('.search_txt').val(''); // 텍스트필드 누른 경우 value 초기화
  });
  $('.search_btn').click(function(){ // 검색 버튼 누른 경우
    keyword= $('.search_txt').val(); // 입력받은 텍스트값 keyword로 저장
    var link = 'http://localhost/TermProject/html/search.html?keyword:'+encodeURI(keyword);
    //넘어가는 페이지에 검색 키워드도 같이 보냄 
    location.href=link;
  });
});
