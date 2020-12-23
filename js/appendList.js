// styleshare 메뉴에서 스타일을 등록한 후 실행되는 js
$(document).ready(function(){
  $('#submit').click(function(){
    var title = $('#title').val(); // 게시물 제목
    var content = $('#content').val(); //게시물 내용
    var file = "../images/item/"+document.getElementById("file").files[0].name; // 파일 첨부 주소

    // 서버와 통신하여 json파일에 해당 게시물 정보를 저장한다.
    $.ajax({
      type : "POST",
      url : "../php/storeStyle.php",
      data: { title : title,
              content : content,
              file : file },
      async:false,
      error : function(data){},
      success : function(data){
        alert(data); //게시물 등록 성공여부가 뜨는 alert 창 
        location.href = "styleshare.php";
      }
    });
  });
});
