	plyr.setup(document.querySelectorAll('.js-plyr'), {});
	
	var canvas = document.getElementById('canvas');
	var drawing = canvas.getContext('2d');
	drawing.globalCompositeOperation='destination-over';
	
	//start position
	var vijftig = 50;
	var xPos = x_position * vijftig;
	var yPos = y_position * vijftig;
	
	var	totalx = x_position;
	var totaly = x_position;
	
	//niet in gebruik...
	var mapy = canvas.height;
	var mapx = canvas.width;
	
	var test = 0;
	var totalm = 0;
	var begin_pokemon = 0;
	var chosen_pokemon= 0;
	
	var enterhouse = 0;
	var walkstyle = "lower";
	var playerlocation = map;
	
	if(saved==1){
	switch(playerlocation){
			//map1/////////////////////////////////////////////////////////////////////////
			case "map1":
				//Buildings
				var house1 = document.getElementById("begin-house");
				drawing.drawImage(house1, 300, 282);
				
				//Ash (player)
				switch (walkstyle) {
						case "right":
							var img = document.getElementById("right");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "lower":
							var img = document.getElementById("front");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "upper":
							var img = document.getElementById("upper");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "left":
							var img = document.getElementById("left");
							drawing.drawImage(img, xPos, yPos);
							break;
				}
			
				//next map arrows
				var arrow1 = document.getElementById("arrowright");
				drawing.drawImage(arrow1, 950, 250);
				var arrow2 = document.getElementById("arrowup");
				drawing.drawImage(arrow2, 100, 0);
				var arrow3 = document.getElementById("arrowdown");
				drawing.drawImage(arrow3, 250, 550);
				
				//path
				drawing.fillStyle="#c2b897";
				drawing.fillRect(100, 0, 50, 250);
				drawing.fillRect(100, 250, 900, 50);
				drawing.fillRect(250, 300, 50, 300);
				drawing.fillRect(300, 500, 300, 50);
				drawing.fillRect(400, 450, 100, 50);
				drawing.fillRect(600, 300, 50, 250);
			
				//bridge holders
				drawing.fillStyle="#68540e";
				drawing.fillRect(83, 83, 17, 133);
				drawing.fillRect(150, 83, 17, 133);
				
				//river
				drawing.fillStyle="blue";
				drawing.fillRect(0, 100, 1000, 100);
			break;
			
			//house1///////////////////////////////////////////////////////////////////////
			case "house1":
				canvas.width=canvas.width;
				drawing.globalCompositeOperation='destination-over';
				
				//Ash (player)
				switch (walkstyle) {
						case "right":
							var img = document.getElementById("right");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "lower":
							var img = document.getElementById("front");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "upper":
							var img = document.getElementById("upper");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "left":
							var img = document.getElementById("left");
							drawing.drawImage(img, xPos, yPos);
							break;
				}
				var house1 = document.getElementById("house1-inside");
				drawing.drawImage(house1, 200, 100);
				
				var doorpath = document.getElementById("doorpath");
				drawing.drawImage(doorpath, 400, 500);
				
				//floor
				drawing.fillStyle="lightgray";
				drawing.fillRect(200, 100, 600, 400);
				drawing.fillRect(400, 500, 100, 50);
				
				//background
				drawing.fillStyle="gray";
				drawing.fillRect(0, 0, 1000, 600);
			break;
			
			//map2/////////////////////////////////////////////////////////////////////////
			case "map2":
				canvas.width=canvas.width;
				drawing.globalCompositeOperation='destination-over';
				
				//Ash (player)
				switch (walkstyle) {
						case "right":
							var img = document.getElementById("right");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "lower":
							var img = document.getElementById("front");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "upper":
							var img = document.getElementById("upper");
							drawing.drawImage(img, xPos, yPos);
							break;
						case "left":
							var img = document.getElementById("left");
							drawing.drawImage(img, xPos, yPos);
							break;
				}
				
				//high grass
				var grass = document.getElementById("map2grass");
				drawing.drawImage(grass, 0, 0);
			
				//next map arrows
				var arrowleft = document.getElementById("arrowleft");
				drawing.drawImage(arrowleft, 0, 250);
				var arrowdown = document.getElementById("arrowdown");
				drawing.drawImage(arrowdown, 900, 550);
				
				//path
				drawing.fillStyle="#c2b897";
				drawing.fillRect(0, 250, 300, 50);
				drawing.fillRect(250, 300, 650, 50);
				drawing.fillRect(550, 150, 50, 200);
				drawing.fillRect(900, 300, 50, 300);
			
				//walls
				drawing.fillStyle="#525252";
				drawing.fillRect(200, 216, 133, 17);
				drawing.fillRect(316, 216, 17, 67);
				drawing.fillRect(333, 266, 200, 17);
				drawing.fillRect(617, 266, 383, 17);
			
				//bridge holders
				drawing.fillStyle="#68540e";
				drawing.fillRect(83, 233, 133, 17);
				drawing.fillRect(83, 300, 133, 17);
				
				//river
				drawing.fillStyle="blue";
				drawing.fillRect(0, 100, 100, 100);
				drawing.fillRect(100, 100, 100, 400);
				drawing.fillRect(200, 400, 650, 100);
				drawing.fillRect(750, 500, 100, 200);
			break;
		}
	}else{
	drawing.fillStyle= "white";
	drawing.font = "30px Verdana";
	drawing.fillText("Press any button to start the game!", 250, 480);
	
	var startscreen = document.getElementById("startscreen");
	drawing.drawImage(startscreen, 0, 0);
	}
	
	function move(e){
		switch(playerlocation){
			//map1/////////////////////////////////////////////////////////////////////////
			case "map1":
			GetMap1(e);
			break;
			
			//house1///////////////////////////////////////////////////////////////////////
			case "house1":
			GetHouse1(e);
			break;
			
			//map2/////////////////////////////////////////////////////////////////////////
			case "map2":
			GetMap2(e);
			break;
		}
	}
	(function settings(e) {
		GetSettings(e);
		//save button
		document.querySelectorAll('.save-button')[0].addEventListener('click', function(event) {
			SaveAll(e);
		});
		document.querySelectorAll('.pokemons-button')[0].addEventListener('click', function(event) {
			PokemonMenu(e);
		});
	})();
	drawing.stroke();
	document.onkeydown = move;