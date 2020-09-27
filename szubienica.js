var sentencja = new Array(5);
sentencja [0] = "Bez pracy nie ma kołaczy";
sentencja [1] = "It is after the birds";
sentencja [2] = "First cats behind the fences";
sentencja [3] = "Something is no yes";
sentencja [4] = "Bileciki do kontroli";

function losowanie()
{
var wylosowano = Math.round(Math.random() *sentencja.length);
wylosowane_haslo = sentencja[wylosowano];
}

losowanie();

/* tutaj należy zmienić wartość hasło na wylosowane_hasło */

var haslo = wylosowane_haslo;

haslo=haslo.toUpperCase();


var dlugosc=haslo.length;
var ile_skuch=0;

var yes= new Audio("yes.wav");
var no= new Audio("no.wav");

var haslo1="";

for(i=0; i<dlugosc; i++)
{
	if(haslo.charAt(i)==" ") haslo1=haslo1+" ";
	else haslo1=haslo1+"-";		
		
}

function wypiszhaslo()
{
	document.getElementById("plansza").innerHTML=haslo1;
	
}
window.onload=start;

var litery=new Array(35);
litery=["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż"];

function start()
{
	
	var tresc_diva="";
	
	for(i=0; i<=34; i++)
	{
		var element="lit"+i;
		tresc_diva=tresc_diva+'<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if((i+1)%7==0) tresc_diva=tresc_diva+'<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML=tresc_diva;
	wypiszhaslo();
	
	
}

String.prototype.ustawZnak=function(miejsce, znak)
{
	if(miejsce>this.length-1)
	{
		return this.toString();
	}
	else return this.substr(0,miejsce)+znak+ this.substr(miejsce+1);
}

function sprawdz(nr)
{
	
	var trafiona=false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
		
	if(trafiona==true)
	{
			yes.play();
			var element="lit"+nr;
			document.getElementById(element).style.background="#003300";
			document.getElementById(element).style.color="#00c000";
			document.getElementById(element).style.border="3px solid #00c000";
			document.getElementById(element).style.cursor="default";
			wypiszhaslo();
			
			
	}
	else
	{
			no.play();
			var element="lit"+nr;
			document.getElementById(element).style.background="#330000";
			document.getElementById(element).style.color="#c00000";
			document.getElementById(element).style.border="3px solid #c00000";
			document.getElementById(element).style.cursor="default";
			document.getElementById(element).setAttribute("onclick",";");
			
			
		//skucha
			ile_skuch++;
			var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	//wygrana
	if(haslo==haslo1)
		document.getElementById("alfabet").innerHTML="Wygrana. Poprawne  hasło: "+haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ? </span> ';
	//przegrana
	if(ile_skuch>=9)
		document.getElementById("alfabet").innerHTML="Przegrana. Poprawne  hasło: "+haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ? </span> ';
		
		
	}
	

