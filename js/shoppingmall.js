$(document).ready(function(){
  // 쇼핑몰 타입 버튼을 누를 때마다 해당하는 쇼핑몰들만 div에 띄운다.
  $('#style1').click(function(){
    $('#guide').remove();
    $('#shoppingmall_body').empty();
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://66girls.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/육육.png' alt='육육걸즈'></a>"+
      "<p>육육걸즈</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
     "<a href='http://shopperland.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/쇼퍼랜드.png' alt='쇼퍼랜드'></a>"+
     "<p>쇼퍼랜드</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://98doci.com/' target='_blank'><img src='../images/shoppingmall_icon/98.png' alt='98도씨'></a>"+
      "<p>98도씨</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='http://dejou.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/데쥬.png' alt='데쥬'></a>"+
      "<p>데쥬</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://www.ggsing.com/' target='_blank'><img src='../images/shoppingmall_icon/고고싱.jpg' alt='고고싱'></a>"+
      "<p>고고싱</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='http://perbit.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/퍼빗.png' alt='퍼빗'></a>"+
      "<p>퍼빗</p></div>");

  });
  $('#style2').click(function(){
      $('#guide').remove();
    $('#shoppingmall_body').empty();
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://www.dailyjou.com/' target='_blank'><img src='../images/shoppingmall_icon/데일리쥬.jpg' alt='육육걸즈'></a>"+
      "<p>데일리쥬</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
     "<a href='https://common-unique.com/' target='_blank'><img src='../images/shoppingmall_icon/커먼유니크.jpg' alt='쇼퍼랜드'></a>"+
     "<p>커먼유니크</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://stylenanda.com/' target='_blank'><img src='../images/shoppingmall_icon/스타일난다.jpg' alt='98도씨'></a>"+
      "<p>스타일난다</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://trendy-apparel.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/트랜디어패럴.png' alt='트랜디어패럴'></a>"+
      "<p>트랜디어패럴</p></div>");
  });
  $('#style3').click(function(){
      $('#guide').remove();
    $('#shoppingmall_body').empty();
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://merongshop.com/' target='_blank'><img src='../images/shoppingmall_icon/메롱샵.jpg' alt='메롱샵'></a>"+
      "<p>메롱샵</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
     "<a href='https://madejay.com/' target='_blank'><img src='../images/shoppingmall_icon/메이드제이.jpg' alt='메이드제이'></a>"+
     "<p>메이드제이</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://muahmuah.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/무아무아.jpg' alt='무아무아'></a>"+
      "<p>무아무아</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='http://www.chicfox.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/시크폭스.jpg' alt='시크폭스'></a>"+
      "<p>시크폭스</p></div>");
  });
  $('#style4').click(function(){
      $('#guide').remove();
    $('#shoppingmall_body').empty();
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://gifteabox.com/' target='_blank'><img src='../images/shoppingmall_icon/기프티박스.jpg' alt='기프티박스'></a>"+
      "<p>기프티박스</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
     "<a href='http://realyellow.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/리얼옐로우.jpg' alt='리얼옐로우'></a>"+
     "<p>리얼옐로우</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='http://yeah-b.com/' target='_blank'><img src='../images/shoppingmall_icon/예삐모드.jpg' alt='예삐모드'></a>"+
      "<p>예삐모드</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://sonyunara.com/?' target='_blank'><img src='../images/shoppingmall_icon/소녀나라.jpg' alt='소녀나라'></a>"+
      "<p>소녀나라</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://hotping.co.kr/' target='_blank'><img src='../images/shoppingmall_icon/핫핑.png' alt='핫핑'></a>"+
      "<p>핫핑</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='https://ririnco.com/' target='_blank'><img src='../images/shoppingmall_icon/리리앤코.png' alt='리리앤코'></a>"+
      "<p>리리앤코</p></div>");
    $('#shoppingmall_body').append("<div class='shoppingmall_icon'>"+
      "<a href='http://www.beginning.kr/' target='_blank'><img src='../images/shoppingmall_icon/프롬비기닝.png' alt='리리앤코'></a>"+
      "<p>프롬비기닝</p></div>");
  });
});
