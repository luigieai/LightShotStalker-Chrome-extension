var aa = document.getElementById("screenshot-image");
var divMaster = aa.parentElement.parentElement;
var btn = document.createElement('input');
btn.setAttribute('type','image');
btn.setAttribute('src' , 'http://www.vancitymommyd.com/wp-content/uploads/2018/01/arrow-clipart-arrow-clipart-arrow-graphics-clipartcow-2-cliparting-history-clipart.png');
btn.setAttribute('width', '50px');
btn.setAttribute('height', '50px');
divMaster.appendChild(btn);

var url = location.href;
var char = url.substr(url.length - 1);


function nextChar(c) {
    var i = (parseInt(c, 36) + 1 ) % 36;
    return (!i * 10 + i).toString(36);
}

function nextNumber(i){
    if(i === 9){
        return 0;
    } else return i+=1;
}


btn.onclick = function(){
    var res = "";
    if(parseInt(char)){
        res = nextNumber(parseInt(char));
    } else res = nextChar(char);
    
    window.location.href = url.slice(0,-1) + res;

}
