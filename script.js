/*------------------------------------------------------------------------------------JAVASCRIPT------------------------------------------------------------------------------------*/

/*-------------------------------------------------SEARCH--------------------------------------------------*/

function find(){
	
	var temp = document.getElementById("tbSearch").value.toLowerCase();
	
	if(temp == ""){
		alert("You didn't type anything!");
	}
	else{
		
		var xmlhttp;
			
		if (window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();
		}
		else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET", "characters.xml", false);
		xmlhttp.send();
		
		var response = xmlhttp.responseXML;
		var character = response.getElementsByTagName("character");
		var result = "";
			
		for(var i=0; i < character.length; i++){
			var name = character[i].getElementsByTagName("name")[0].childNodes[0]
			var name1 = name.nodeValue.toLowerCase();
			var place = character[i].getElementsByTagName("place")[0].childNodes[0]
			var place1 = place.nodeValue.toLowerCase();
			var game = character[i].getElementsByTagName("game")[0].childNodes[0]
			var game1 = game.nodeValue.toLowerCase();
			if(name1.indexOf(temp)!=(-1)||place1.indexOf(temp)!=(-1)||game1.indexOf(temp)!=(-1))
				{
					result += "Full name: " + name.nodeValue + "\n\nPlace of birth: " + place.nodeValue + "\n\nGames where he appears: " + game.nodeValue + "\n\n";
				}
			}	
			if(result == "")
			{
				alert("There are no results!");
			}
		else
		alert(result);
	}
}

/*-------------------------------------------------/SEARCH-------------------------------------------------*/
/*-------------------------------------------------FORM----------------------------------------------------*/

function buy(){
	var name = document.getElementById("tbName");
	var name_2 = document.getElementById("tbName_2");
	var age = document.getElementById("tbAge");
	var mail = document.getElementById("tbMail");
	var gender = document.getElementsByName("rbGender");
	var country = document.getElementById("ddlCountry");
	var city = document.getElementById("tbCity");
	var address = document.getElementById("tbAddress");
	var code = document.getElementById("tbCode");
	var game = document.getElementById("ddlGame");
	var platform = document.getElementsByName("chbPlatform");
	
	var reName = /^[A-Z]{1}[a-z]{2,14}$/;
	var reName_2 = /^[A-Z]{1}[a-z]{2,19}$/;
	var reAge = /(1[8-9]|2[0-9]|6[0-5])/;
	var reMail = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
	var reCity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
	var reAddress = /^[a-zA-Z0-9\s,'-]*$/
	var reCode = /^[0-9A-Z]{3,10}$/
	
	var errors = new Array();
	var content = new Array();
	
	if(!name.value.match(reName) && name.value != ""){
		errors.push("First name is not in good format!");
		document.getElementById("tbName").style.border = "2px solid red";
	}
	else if(name.value == ""){
		errors.push("Field for first name is empty!");
		document.getElementById("tbName").style.border = "2px solid red";
	}
	else{
		content.push(name.value);
		document.getElementById("tbName").style.border = "1px solid #000000";
	}
	
	if(!name_2.value.match(reName_2) && name_2.value != ""){
		errors.push("Last name is not in good format!");
		document.getElementById("tbName_2").style.border = "2px solid red";
	}
	else if(name_2.value == ""){
		errors.push("Field for last name is empty!");
		document.getElementById("tbName_2").style.border = "2px solid red";
	}
	else{
		document.getElementById("tbName_2").style.border = "1px solid #000000";
		content.push(name_2.value);
	}
	
	if(!age.value.match(reAge) && age.value != ""){
		errors.push("Age is not in good format!");
		document.getElementById("tbAge").style.border = "2px solid red";
	}
	else if(age.value == ""){
		errors.push("Field for age is empty!");
		document.getElementById("tbAge").style.border = "2px solid red";
	}
	else{
		document.getElementById("tbAge").style.border = "1px solid #000000";
		content.push(age.value);
	}
	
	if(!mail.value.match(reMail) && mail.value != ""){
		errors.push("E-Mail is not in good format!");
		document.getElementById("tbMail").style.border = "2px solid red";
	}
	else if(mail.value == ""){
		errors.push("Field for e-mail is empty!");
		document.getElementById("tbMail").style.border = "2px solid red";
	}
	else{
		document.getElementById("tbMail").style.border = "1px solid #000000";
		content.push(mail.value);
	}
	
	var chGender = "";
	for(var i=0; i<gender.length; i++){
		if(gender[i].checked){
			chGender = gender[i].value; break;
		} 
	}
	if(chGender == ""){
		errors.push("You didn't choоse your gender!");
	}
	else{
		content.push(chGender);
	}
	
	if(ddlCountry.selectedIndex == "0"){
		errors.push("You didn't choose your country!");
		document.getElementById("ddlCountry").style.border = "2px solid red";
	}
	else{
		document.getElementById("ddlCountry").style.border = "1px solid #000000";
		content.push(country.value); 
	}
		
	if(!city.value.match(reCity) && city.value != ""){
		errors.push("City name is not in good format!");
		document.getElementById("tbCity").style.border = "2px solid red";
	}
	else if(city.value == ""){
		errors.push("Field for city is empty!");
		document.getElementById("tbCity").style.border = "2px solid red";
	}
	else{
		document.getElementById("tbCity").style.border = "1px solid #000000";
		content.push(city.value);
	}
	
	if(!address.value.match(reAddress) && address.value != ""){
		errors.push("Address is not in good format!");
		document.getElementById("tbAddress").style.border = "2px solid red";
	}
	else if(address.value == ""){
		errors.push("Field for address is empty!");
		document.getElementById("tbAddress").style.border = "2px solid red";
	}
	else{
		document.getElementById("tbAddress").style.border = "1px solid #000000";
		content.push(address.value);
	}
	
	if(!code.value.match(reCode) && code.value != ""){
		errors.push("Postal code is not in good format!");
		document.getElementById("tbCode").style.border = "2px solid red";
	}
	else if(code.value == ""){
		errors.push("Field for postal code is empty!");
		document.getElementById("tbCode").style.border = "2px solid red";
	}
	else{
		document.getElementById("tbCode").style.border = "1px solid #000000";
		content.push(code.value);
	}
	
	if(ddlGame.selectedIndex == "0"){
		errors.push("You didn't choose your game!");
		document.getElementById("ddlGame").style.border = "2px solid red";
	}
	else{
		document.getElementById("ddlGame").style.border = "1px solid #000000";
		content.push(game.value);
	}
		
	var chPlatform = "";
	for(var i=0; i<platform.length; i++){
		if(platform[i].checked){
			chPlatform += platform[i].value + " ";
			} 
		}
		if(chPlatform == ""){
			errors.push("You didn't choose the platform!");
		}
		else{
			content.push(chPlatform);
		}
		
	if(errors.length == 0){
		var txt = "<h2>You successfully bought the selected game! We will contact you shortly.</h2>";
		document.getElementById("result").innerHTML = txt; 
		}
		else{
			var errorList = "<ul>";
			for(var i=0; i<errors.length; i++){
				errorList += "<li>" + errors[i] + "</li>";
				}
			errorList += "</ul>";
			document.getElementById("result").innerHTML = errorList
			}
		}
		
function change(){
	document.getElementById("result").style.display = "block";
	}
	
/*-------------------------------------------------/FORM---------------------------------------------------*/
/*-------------------------------------------------GALLERY-------------------------------------------------*/

function fillPics(){	
	
	var request = window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	request.open("GET", "screen.xml", false);
	request.send();
	var xmlDoc = request.responseXML;
	show(xmlDoc);
	}
	
function show(xmlDoc){
	document.getElementById('gallery').innerHTML = "";
	
	var pictures = document.getElementById('gallery');

	var allPictures = xmlDoc.getElementsByTagName('picture');
	for(var i=0; i<allPictures.length; i++){
		
		var data = allPictures[i].getElementsByTagName('data')[0].childNodes[0].nodeValue;
		var src = allPictures[i].getElementsByTagName('src')[0].childNodes[0].nodeValue;
		var alt = allPictures[i].getElementsByTagName('alt')[0].childNodes[0].nodeValue;
		
		pictures.innerHTML += "<a href='"+src+".jpg' data-lightbox='"+data+"'><img src='"+src+".jpg' alt='"+alt+"'/></a>";		
	}
	pictures.style.display = "block";
	return;
}

/*-------------------------------------------------/GALLERY------------------------------------------------*/

/*--------------------------------------------------------------------------------------JQUERY--------------------------------------------------------------------------------------*/

/*-------------------------------------------------SLIDER-------------------------------------------------*/

$(document).ready(function(){

	$('#checkbox').change(function(){
		setInterval(function () {
			moveRight();
		}, 3000);
	});
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft(){
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function (){
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight(){
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function (){
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function (){
        moveLeft();
    });

    $('a.control_next').click(function (){
        moveRight();
    });

/*-------------------------------------------------/SLIDER-------------------------------------------------*/	
/*------------------------------------------------CHARACTERS-----------------------------------------------*/
	
	$(".charover").hover(
		function(){
			$(this).attr('src', 'Pictures/Characters/'+$(this).attr("alt")+'.png');
			$('#charname').html("<h3>"+$(this).attr("alt")+"</h3>");
		},
		function(){
			$(this).attr('src', 'Pictures/Characters/'+$(this).attr("alt")+'_1.png');
			$('#charname').html("");
		}
	);
	
	$("#popUp_1").click(function() {
		$("#AltairWrap").css("display", "block");
	});
	$("#AltairWrap #close").click(function() {
		$(this).parent().parent().hide();
	});

	$("#popUp_2").click(function() {
		$("#EzioWrap").css("display", "block");
	});
	$("#EzioWrap #close").click(function() {
		$(this).parent().parent().hide();
	});

	$("#popUp_3").click(function() {
		$("#ConnorWrap").css("display", "block");
	});
	$("#ConnorWrap #close").click(function() {
		$(this).parent().parent().hide();
	});

	$("#popUp_4").click(function() {
		$("#EdwardWrap").css("display", "block");
	});
	$("#EdwardWrap #close").click(function() {
		$(this).parent().parent().hide();
	});

	$("#popUp_5").click(function() {
		$("#ShayWrap").css("display", "block");
	});
	$("#ShayWrap #close").click(function() {
	$(this).parent().parent().hide();
	});

	$("#popUp_6").click(function() {
		$("#ArnoWrap").css("display", "block");
	});
	$("#ArnoWrap #close").click(function() {
		$(this).parent().parent().hide();
	});
	
/*------------------------------------------------/CHARACTERS----------------------------------------------*/	
/*-------------------------------------------------DDM-----------------------------------------------------*/
	
	$(function (){
		$('#nav_bar li ul').hide().removeClass('drop');
		$('#nav_bar li').hover(function () {
			$('ul', this).stop().slideToggle(200);
		});
	});
});

/*-------------------------------------------------/DDM----------------------------------------------------*/
	