window.onload = function() {
	bear_mouse();
	setInterval(turbo_cheese, 7500);
	
	document.body.style.backgroundColor = '#' + Math.floor((0xfffff0) * Math.random()).toString(16);
	document.body.style.transition = 'background-color 2s linear';
	
	if(document.title == "Home")
	{
		bideo();
	}
}



function send() {
	alert('Message Sent!');
}

function bideo() {
	
	document.getElementById("pg-content").innerHTML += '<iframe width = "80%" height = "400px" src = "https://www.youtube.com/embed/a5yBHv0nVBg" frameborder = "0" allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe><br/><br/>';
	
}

function getHexColor( color ){
	
    if( color.indexOf('#') != -1 ) return color;
    
    color = color.replace("rgba", "").replace("rgb", "").replace("(", "").replace(")", "").split(",");
	
	
    return  "#"
            + ( '0' + parseInt(color[0], 10).toString(16) ).slice(-2)
            + ( '0' + parseInt(color[1], 10).toString(16) ).slice(-2)
            + ( '0' + parseInt(color[2], 10).toString(16) ).slice(-2);
}

function turbo_cheese() {
	
	
	var bojica = getHexColor(document.body.style.backgroundColor);
	
	var bbojica = parseInt('0x' + bojica.substr(1, 6));
	bbojica = Math.min(bbojica + 4800, 0xffffff);
	if(bbojica == 0xffffff) bbojica = 0;
	
	document.body.style.backgroundColor = '#' + bbojica.toString(16);
}

function mouse_smile() {
	
	var l = document.getElementsByClassName("nezumi-eyelid");
	
	l[0].style.transform = 'none';
	l[1].style.transform = 'none';
}

function mouse_normal() {
	
	var l = document.getElementsByClassName("nezumi-eyelid");
	
	l[0].style.transform = 'translate(0px, 1.16vh)';
	l[1].style.transform = 'translate(0px, 1.16vh)';
}

function bear_mouse() {
	
	document.getElementById("nezumi-container").style.display = 'inline-block';
	
	var e = document.getElementsByClassName("nezumi-ear");
	
	e[0].style.left = '0.41vh';
	e[1].style.left = '5.41vh';
	
	var a = document.getElementsByClassName("nezumi-eye");
	var l = document.getElementsByClassName("nezumi-eyelid");
	
	a[0].style.left = '1.6vh';
	a[1].style.right = '1.6vh';
	l[0].style.left = '1.6vh';
	l[1].style.right = '1.6vh';
	
	var w = document.getElementsByClassName("nezumi-whisker");
	
	for(var i = 0; i < w.length; i++) {
		var hmmmm = w[i].getAttribute("data-epos");
		var broj = hmmmm[1];
		if(hmmmm[0] == "l") {
			w[i].style.left = '1.6vh';
			w[i].style.transform = 'rotate(' + (-30 * (2 - parseInt(broj))).toString() + 'deg)';
		} else {
			w[i].style.right = '1.6vh';
			w[i].style.transform = 'rotate(' + (30 * (2 - parseInt(broj))).toString() + 'deg)';
		}
		w[i].style.top = ((42 + (8 * (2 - parseInt(broj)))) / 12.0).toString() + 'vh';
	}
}
