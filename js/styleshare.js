$(document).ready(function(){
  //styleshare 메뉴 클릭시 등록된 게시물들을 불러온다.
  $.ajax({
    type : "POST",
    url : "../php/uploadStyle.php",
    async:false,
    error : function(data){},
    success : function(data){
      //style.json 파일에 저장되어있는 게시물 정보들을 전부 불러온다.
      $.each(JSON.parse(data), function(i,item){
        var title = item['title']; // 글 제목
        var content = item['content']; // 글 내용
        var userName = item['userName']; //작성자
        var replaceName = userName.substring(0,userName.length-2);
        //페이지에 게시물 띄운다. 
        $('#tbody').append('<tr id="tr"><td id="title">'+title+'</td><td>'+content+'</td><td>'+replaceName+'</td></tr>');
      });
    }
  });
  // 특정 게시물 행 클릭시
  $('.postTable tr').click(function(){
    //게시물 제목과 함께 페이지가 넘어간다.
    var title = $(this).children('td:eq(0)').text();
    location.href = 'http://localhost/TermProject/html/post.html#'+title;
  });
});
//로그인이 되어있지 않은 경우 게시물 등록 불가능
function isNotPossible(){
  alert("로그인이 되어있지않습니다.");
}
//게시물 등록 가능
function isPossible(){
  location.href="../html/registerStyle.html";
}
