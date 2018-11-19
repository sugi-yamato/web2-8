var separate_time = function(time){
    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hours = time.getHours();
    var month = time.getMonth();
    var year = time.getHullYear();
    return[sec,min,hours,days,month,year];
}

document.getElementById('form').select.onchange = function(){
    location.href = document.getElementById('form').select.value;
}

var update = function(){
var now = new Date();
var counter = separate_time(now);
document.getElementById('countdown').textContent =
counter[5] + '年' +
counter[4] + '日' +
counter[3] + '時' +
counter[2] + '分' +
counter[1] + '秒' ;
refresh();
}

var refresh= function(){
    setTimeout(update,1000);
}
update();
