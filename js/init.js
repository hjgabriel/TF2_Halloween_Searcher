var bp = "backpack_spells";
var out = "outpost_spells";
var scm = "scm_spells";

function toHTML(html) {
	var page = document.createElement('html');
	page.innerHTML = html;
	return page;
}

function GrabDOM(content_id,URL,c_page,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", URL, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
     	  //handle the xhr response here
	 	  //console.log("ready");
	 	  //console.log(xhr.responseURL);
	 	  //console.log(xhr.responseText);
	 	  //console.log(toHTML(xhr.responseText));
	 	  if(content_id == 0){
	 	  	callback(toHTML(xhr.responseText),c_page);
	 	  }else if(content_id == 1){
	 	  	callback(toHTML(xhr.responseText),c_page);
	 	  }else if(content_id == 2){
	 	  	callback(JSON.parse(xhr.responseText),c_page);
	 	  }
	 	  
	 	  
		}
	}
	xhr.send();
}