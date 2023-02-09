var Links = {
 setColor : function(color){
  //  var alist = document.querySelectorAll('a');
  //  var i = 0;
  //  while(i < alist.length){
  //   alist[i].style.color = color;
  //   i = i + 1;
  // }
   $('a').css('color', color); //$('a') -> 이 웹페이지에 있는 모든 a태그를 jQuery로 제어하겠다는
 }
}
 var Body = {
   setColor : function(color){
  //   document.querySelector('body').style.color =  color;
  $('body').css('color',color);
},
  setBackgroundColor : function(color){
   // document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor',color);
   }
 }
function nightDayHandler(self){
      var target =  document.querySelector('body');
      if(self.value === 'night'){
       Body.setBackgroundColor('black');
       Body.setColor('white');
       self.value = 'day';

       Links.setColor('powderblue');
     } else {
       Body.setBackgroundColor('white');
       Body.setColor('black');
       self.value = 'night';

       Links.setColor('blue');
     }
   }
   //객체 = 폴더
   //객체에 속해 있는 함수 = 함수가 아니라 '메소드(method)'라고 부름, 변수는 '프로퍼티(property)
   // cf. 함수 = 코드가 많아지면 정리정돈하는 도구
   // 객체 = 함수와 변수가 많아지면 연관된 것들을 그룹핑해서 정리정돈하는 도구
   //페이지에 쪼개서 저장하면, 페이지에서만 수정하면 다른 페이지에서도 다 동일하게 수정되기 때문에
   // 아주 편리함.
