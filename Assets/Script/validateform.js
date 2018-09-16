xRoot='http://www.realtransilvania.com/';

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}
String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}
String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}

 function stop(what) {
	clearTimeout(what);
 }
 function nothing() {
}

function HideDiv(id) {
	div = document.getElementById(id);
	div.style.display='none';
}
function ShowDiv(id) {
	div = document.getElementById(id);
	div.style.display='block';
}

function do_newsflash(rut,d1)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Your browser does not support AJAX!");
		return;
	} 
	
	var url=rut+"ajx_newsflash.php";
	url=url+"?d1="+d1+"&lg="+lg;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=stateChanged_newsflash;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
	
	nxtt = (parseInt(d1)+1);
	if (nxtt>nfmax) nxtt=1;
	//alert(nxtt);
	tick=setTimeout("do_newsflash('"+rut+"','"+nxtt+"')",7000);   
}

function stateChanged_newsflash() 
{ 
	if (xmlHttp.readyState==4)	{ 
		document.getElementById("newsflash").innerHTML=xmlHttp.responseText;
	}
}

// create a function
function validate_message(){
	div = document.getElementById('contact_form');
	if(div.full_name.value.trim()==""){
		alert('Please enter your Full Name');
	}
	else if(div.email.value.trim()=="");{
		alert('Please enter your Email Address');
	}
	
	else if(div.address.value.trim()==""){
		alert('Please enter your Address');
	}
	else{
		div.submit()'
	}
	
}

function do_cautare(){ 
	div= document.getElementById('frm_cauta');
	if((div.cv_cheie.value.trim()=="")||(div.cv_cheie.value.trim()=="cauta in site")||(div.cv_cheie.value.trim()=="search")){
		alert('Nu ati introdus nimic.');
	} 
	else if(div.cv_cheie.value.length<4){
		alert('Cuvantul introdus este prea scurt.');
	} 
	else{
		div.submit();
	}
}

function do_login(){
	div= document.getElementById('frm_login');
	if((div.usr.value.trim()=="utilizator")||(div.usr.value.trim()=="")||(div.usr.value.trim()=="user")){
		alert('Nu ati introdus username-ul.');
	}
	else if(div.pass.value.trim()==""){
		alert('Nu ati introdus parola.');
	}
	else{
		div.submit();
	}
}

function validateEmail(email)	{
	var	re	=	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-
	9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				
	return	re.test(email);
}

function do_foto(id1,id2,id3)
{ 
                xmlHttp6=GetXmlHttpObject();
                if (xmlHttp6==null) {
                               alert ("Your browser does not support AJAX!");
                               return;
                } 
                
				document.getElementById("MainPic").innerHTML='<div class="gal_err1"><img src="'+xRoot+'img/ajax-loader_gal.gif" style="margin-top:200px;" /></div>';
			   var url=rut+"ajx_foto.php";
                url=url+"?sid="+Math.random()+"&album="+id1+"&foto="+id2+"&lg="+id3;
                xmlHttp6.onreadystatechange=stateChanged_foto;
                xmlHttp6.open("GET",url,true);
                xmlHttp6.send(null);

}
function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}
