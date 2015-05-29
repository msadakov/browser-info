// Var
var de = document.documentElement,
    dw = screen.width,
    dh = screen.height,
    chcookie = navigator.cookieEnabled,
    ratio = ('devicePixelRatio' in window) ? devicePixelRatio : 'unsupported'

if (!window.onload){
  window.onload = init;
}

window.onresize = runtest;

function init(){
  info = document.getElementById('info');
  document.getElementById('test').onclick = runtest;
  runtest();
  runtest();
}

//Cookie
function fcookie(){
  if(chcookie == true){
    cookie = 'Включены';
  }
  else{
    cookie = 'Выключены';
  }
}
//Сокращение соотношений
function reduce(num1, num2) {
  var gcd, temp, divisor;

  gcd = function (a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  if (num1 === num2) {
    return '1/1';
  }

  if (+num1 < +num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }

  divisor = gcd(+num1, +num2);

  return 'undefined' === typeof temp ? (num1 / divisor) + '/' + (num2 / divisor) : (num2 / divisor) + '/' + (num1 / divisor);
}

function runtest(){
  fcookie();
  var hn1 = '<h3>Информация об окне</h3>',
      ul = '<ul>',
      liw = '<li>Ширина<b>'+de.clientWidth+'px/'+de.clientWidth/16+'em</b></li><p>width. Ширина окна</p>',
      lih = '<li>Высота<b>'+de.clientHeight+'px/'+de.clientHeight/16+'em</b></li><p>height. Высота окна</p>',
      lidw = '<li>Ширина устройства<b>'+dw+'px/'+dw/16+'em</b></li><p>device-width. Ширина экрана устройства</p>',
      lidh = '<li>Высота устройства<b>'+dh+'px/'+dh/16+'em</b></li><p>device-height. Высота экрана устройства</p>',
      lidpi = '<li>Чёткость<b>'+ratio+'</b></li><p>devicePixelRatio. Соотношение физического пикселя к CSS пикселю</p>',
      liwindowratio = '<li>Соотношение окна<b>'+reduce(de.clientWidth,de.clientHeight)+'</b></li><p>aspect-ratio. Соотношение ширины и высоты окна</p>',
      lideviceratio = '<li>Соотношение устройства<b>'+reduce(dw,dh)+'</b></li><p>device-aspect-ratio. Соотношение ширины и высоты устройства</p>',
      liorient = '<li>Ориентация<b><div id="orient"></div></b></li>',
      ulend = '</ul>',
      ulua = '<h3>Пользовательский агент</h3><ul><li>'+navigator.userAgent+'</li><p>userAgent</p></ul>',
      ulcookie = '<h3>Куки</h3><ul><li>'+cookie+'</li><p>cookieEnabled</p></ul>',
      ulleng = '<h3>Язык</h3><ul><li>'+navigator.language+'</li><p>language</p></ul>'
  info.innerHTML = hn1+ul+liw+lih+lidw+lidh+lidpi+liwindowratio+lideviceratio+liorient+ulend+ulua+ulcookie+ulleng;
}
