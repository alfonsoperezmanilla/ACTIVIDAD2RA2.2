function iniciar(){
	var elemento=document.getElementById("lienzo1");
	lienzo1=elemento.getContext("2d");

	var degradado1 = lienzo1.createLinearGradient(0, 0, 280, 0,0);
	degradado1.addColorStop(0,"#FF0000");
	degradado1.addColorStop(0.25,"#FFFF00");
	degradado1.addColorStop(0.5,"#36FF00");
	degradado1.addColorStop(0.75,"#00FFE8");
	degradado1.addColorStop(1,"#000FFF");

	lienzo1.fillStyle=degradado1;
	lienzo1.fillRect(0,20,300,300);

}

window.addEventListener("load",iniciar,false);

function iniciar1(){
	var elemento=document.getElementById("lienzo2");
	lienzo1=elemento.getContext("2d");

	var degradado1 = lienzo1.createLinearGradient(0, 0,270,0);
	degradado1.addColorStop(0.25,"#FF0000");
	degradado1.addColorStop(0.55,"#FFFF00");
	degradado1.addColorStop(1,"#000FFF");

	lienzo1.fillStyle=degradado1;
	lienzo1.fillRect(0,20,300,300);

}

window.addEventListener("load",iniciar1,false);

function iniciar2(){
	var elemento=document.getElementById("lienzo3");
	lienzo1=elemento.getContext("2d");

	var degradado1 = lienzo1.createRadialGradient(150,155,190,150,155,50);
	degradado1.addColorStop(0,"#000FFF");
	degradado1.addColorStop(0.5,"#36FF00");
	degradado1.addColorStop(1,"#4F0074");


	lienzo1.fillStyle=degradado1;
	lienzo1.fillRect(0,20,300,300);

}

window.addEventListener("load",iniciar2,false);

function iniciar3(){
	var elemento=document.getElementById("lienzo4");
	lienzo1=elemento.getContext("2d");

	var degradado1 = lienzo1.createRadialGradient(150,155,180,150,155,30);
	degradado1.addColorStop(0,"#FF0000");
	degradado1.addColorStop(0.25,"#FFFF00");
	degradado1.addColorStop(0.5,"#36FF00");
	degradado1.addColorStop(0.75,"#00FFE8");
	degradado1.addColorStop(1,"#000FFF");


	lienzo1.fillStyle=degradado1;
	lienzo1.fillRect(0,20,300,300);

}

window.addEventListener("load",iniciar3,false);

function iniciar4(){
	var elemento=document.getElementById("lienzo5");
	lienzo1=elemento.getContext("2d");

	var degradado1 = lienzo1.createLinearGradient(0, 0,270,300);
	degradado1.addColorStop(0.35,"#FFAA00");
	degradado1.addColorStop(0.45,"#0061FF");
	degradado1.addColorStop(0.75,"#740062");

	lienzo1.fillStyle=degradado1;
	lienzo1.fillRect(0,20,300,300);

}

window.addEventListener("load",iniciar4,false);



