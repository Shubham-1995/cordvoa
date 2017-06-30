String.prototype.endsWith = function(searchString) {
var result = true;     
	 var subjectString = this.toString();
		for(var i=1;i<=searchString.length;i++){
			var lastcharsubjectString = subjectString.charAt(subjectString.length-i);
			console.log("lastcharsubjectString   ---- >> "+lastcharsubjectString);
			var lastcharsearchString =searchString.charAt(searchString.length-i);
			console.log("lastcharsearchString   ---- >> "+lastcharsearchString);
		if(lastcharsubjectString != lastcharsearchString){
			result = false;
			break;
		}
	}
    alert(result);  
      
  };
 "gridSelected-123".endsWith("123"); 
	