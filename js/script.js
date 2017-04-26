var btnPush = document.getElementById('press');

btnPush.addEventListener('click', function(){
      changeColor();
});


function changeColor(){
  var usrContent = document.getElementById('content');
  var usrColor = document.getElementById('txtColor');
  usrContent.style.backgroundColor = usrColor;

}
