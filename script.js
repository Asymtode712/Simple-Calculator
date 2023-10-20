function Insert(val) {
    var v = document.getElementById('tfield');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('tfield').value;
    var num2 = eval(num1);
    document.getElementById('tfield').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('tfield');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('tfield');
    ev.value = ev.value.slice(0,-1);
 }