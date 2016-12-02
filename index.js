var  first = 0;
var second;
function focusFun(){
document.getElementById("num").value =null;
}
function sumResult(){
second = document.getElementById("num").value;
console.log("first : "+first+", second"+second);
cordova.plugins.Calculator.getSumResult(first,second,function(response){
first = parseInt(response);
document.getElementById("num").value =first;
	});
}
function minusResult(){
 second = document.getElementById("num").value
	cordova.plugins.Calculator.getminusResult(first,second,function(response){
		first = parseInt(response);
	document.getElementById("num").value =first;
	});
}
function intoResult(){
second = document.getElementById("num").value
	cordova.plugins.Calculator.getintoResult(first,second,function(response){
	first = parseInt(response);
	document.getElementById("num").value =first;
	});
}
function divResult(){
second = document.getElementById("num").value
	cordova.plugins.Calculator.getdivResult(first,second,function(response){
		first = parseInt(response);
	document.getElementById("num").value =first;
	});
}