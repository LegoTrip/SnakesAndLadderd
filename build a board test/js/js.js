
  alert("hello");
  var numOfWindows = 9;

var arrayDiv = new Array();
for (var i = 0; i < numOfWindows; i++) {
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].id = 'block' + i;
    arrayDiv[i].style.backgroundColor = 'green';
    arrayDiv[i].className = 'block' + i;

    arrayDiv[i].className = 'bordered';

    document.body.appendChild(arrayDiv[i]);
}
