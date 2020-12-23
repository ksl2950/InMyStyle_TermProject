$(document).ready(function(){
  //올라온 게시물 클릭시 실행되는 js
  var temp = decodeURI(location.href.split("#")[1]); //받아온 게시물 이름을 디코드
  var title = temp;//게시물 이름 title로 저장

  //게시물 제목을 통해 서버에서 알맞는 게시물 정보 가져옴
  $.ajax({
    type :"POST",
    url:"../php/post.php",
    data: { title: title },
    async:false, //동기형으로
    error : function(data) {   },
    success : function(data) {
      //게시물 정보를 json형태로 받아옴
      $.each(JSON.parse(data), function(i,item){
        var title = item['title']; //글 제목
        var content = item['content']; // 글 내용
        var file = decodeURI(item['file']);// 첨부한 이미지 주소
        // 페이지에 정보 불러온다. 
          $('.item_div').prepend("<div class='image'><img class = sample src='"+file+"'></div>");
          $('#title').append(title);
          $('#content').append(content);
        });
      }
  });
});
