function GetSettings(e){
//instellingen menu
	document.querySelectorAll('.button')[0].addEventListener('click', function(event) {
		document.getElementById("instellingen").style.display = "block";
		document.getElementById("instellingen-back-button").style.display = "block";
		document.getElementById("audiosounds").style.display = "block";
		
		var canvas_instellingen = document.getElementById('instellingen');
		var drawing_instellingen = canvas_instellingen.getContext('2d');
		
		drawing_instellingen.fillStyle= "black";
		drawing_instellingen.font = "30px Verdana";
		drawing_instellingen.fillText("Settings", 20, 40);
		drawing_instellingen.beginPath();
		drawing_instellingen.moveTo(20, 50);
		drawing_instellingen.lineTo(900, 50);
		drawing_instellingen.fill();
		drawing_instellingen.stroke();
		drawing_instellingen.font = "20px Verdana";
		drawing_instellingen.fillText("Account details", 20, 80);
		drawing_instellingen.fillText("Username:", 20, 110);
		drawing_instellingen.fillText(username, 300, 110);
		drawing_instellingen.fillText("Email:", 20, 140);
		drawing_instellingen.fillText(email, 300, 140);
		drawing_instellingen.fillText("Gender:", 20, 170);
		drawing_instellingen.fillText(gender, 300, 170);
		drawing_instellingen.fillText("Password:", 20, 200);
		drawing_instellingen.fillText(user_password, 300, 200);
		
		drawing_instellingen.font = "30px Verdana";
		drawing_instellingen.fillText("Music and Sounds", 20, 250);
		drawing_instellingen.beginPath();
		drawing_instellingen.moveTo(20, 260);
		drawing_instellingen.lineTo(900, 260);
		
		drawing_instellingen.fillText(xPos, 200, 400);
		drawing_instellingen.fillText(yPos, 300, 400);
		drawing_instellingen.fill();
		drawing_instellingen.stroke();
	});
	
	document.querySelectorAll('.instellingen-back-button')[0].addEventListener('click', function(event) {
		document.getElementById("instellingen").style.display = "none";
		document.getElementById("instellingen-back-button").style.display = "none";
		document.getElementById("audiosounds").style.display = "none";
	});
}
