function GetHouse1(e){
	if(enterhouse==0){
		//rechts
		if(e.keyCode==39){
			switch(xPos){
				case 750:
					//nothing
				break;
				case 250:
					if(yPos==150||yPos==200){
						//nothing
					}
					else{
						xPos+=50;
						totalx+=1;
					}
				break;
				case 600:
					if(yPos==350||yPos==400){
						//nothing
					}
					else{
						xPos+=50;
						totalx+=1;
					}
				break;
				case 450:
					if(yPos==500){
						//nothing
					}
					else{
						xPos+=50;
						totalx+=1;
					}
				break;
				default:
					xPos+=50;
					totalx+=1;
				break;				
			}
			walkstyle = "right";
			if(begin_pokemon==1||begin_pokemon==2){
			begin_pokemon+=1;
			}
		}
		//links
		if(e.keyCode==37){
			switch(xPos){
				case 200:
					//nothing
				break;
				case 700:
					if(yPos==150||yPos==200){
						//nothing
					}
					else{
						xPos-=50;
						totalx-=1;
					}
				break;
				case 750:
					if(yPos==350||yPos==400){
						//nothing
					}
					else{
						xPos-=50;
						totalx-=1;
					}
				break;
				case 400:
					if(yPos==500){
						//nothing
					}
					else{
						xPos-=50;
						totalx-=1;
					}
				break;
				default:
					xPos-=50;
					totalx-=1;
				break;				
			}
			walkstyle = "left";
			if(begin_pokemon==2||begin_pokemon==3){
			begin_pokemon-=1;
			}
		}
		//boven
		if(e.keyCode==38){
			switch(yPos){
				case 150:
					//nothing
				break;
				case 250:
					if(xPos==200||xPos==250||xPos==700||xPos==750){
						yPos-=50;
						totaly-=1;
					}
					else{
						if(totalm<=0){
						totalm=1;
						}
					}
				break;
				case 450:
					if(xPos==650||xPos==700){
						//nothing
					}
					else{
						yPos-=50;
						totaly-=1;
					}
				break;
				default:
					yPos-=50;
					totaly-=1;
				break;
			}
			walkstyle = "upper";
		}
		//beneden
		if(e.keyCode==40){
			switch(yPos){
				case 450:
					if(xPos==400||xPos==450){
						//get out house...
						playerlocation="map1";
						enterhouse = 2;
					}
					else{
						//nothing
					}
				break;
				case 500:
					//nothing
				break;
				case 300:
					if(xPos==650||xPos==700){
						//nothing
					}
					else{
						yPos+=50;
						totaly+=1;
					}
				break;
				default:
					yPos+=50;
					totaly+=1;
				break;
			}
			walkstyle = "lower";
		}
		
		canvas.width=canvas.width;
		drawing.globalCompositeOperation='destination-over';
		
		switch(totalm){
			case 1:
			drawing.fillStyle = "black";
			drawing.font = "18px Verdana";
			drawing.fillText("Hi there! New here? I will help you today. Lets get you",218,432);
			drawing.fillText("your first Pokémon!",218,452);
			
			drawing.fillStyle = "cyan";
			drawing.font = "11px Verdana";
			drawing.fillText("Next!",710,485);
			 drawing.beginPath();
			  drawing.moveTo(750, 475);
			  drawing.lineTo(770, 475);
			  drawing.lineTo(760, 490);
			 drawing.lineTo(750, 475);
			drawing.fill();
			var notification = document.getElementById("text600");
			drawing.drawImage(notification, 200, 400);
			totalm+=1;
			break;
			case 2:
			drawing.fillStyle = "black";
			drawing.font = "18px Verdana";
			drawing.fillText("Welkom in our Pokémon machine. You canb choose between",218,432);
			drawing.fillText("three Pokémon! Choose wisely and catch more Pokémon with",218,452);
			drawing.fillText("your Pokéballs.",218,472);
			
			drawing.fillStyle = "cyan";
			drawing.font = "11px Verdana";
			drawing.fillText("Choose!",710,485);
			 drawing.beginPath();
			  drawing.moveTo(750, 475);
			  drawing.lineTo(770, 475);
			  drawing.lineTo(760, 490);
			 drawing.lineTo(750, 475);
			drawing.fill();
			var notification = document.getElementById("text600");
			drawing.drawImage(notification, 200, 400);
			totalm+=1;
			begin_pokemon=2;
			break;
			case 3:
			case 4:
			switch(begin_pokemon){
				case 1:
				drawing.fillStyle= "white";
				drawing.font = "30px Verdana";
				drawing.fillText("Bulbasaur!", 70, 480);
				drawing.beginPath();
				drawing.lineWidth="8";
				drawing.strokeStyle="white";
				drawing.rect(3,3,330,593); 
				drawing.stroke();
				break;
				case 2:
				drawing.fillStyle= "white";
				drawing.font = "30px Verdana";
				drawing.fillText("Charmander!", 400, 480);
				drawing.beginPath();
				drawing.lineWidth="8";
				drawing.strokeStyle="white";
				drawing.rect(333,3,333,593); 
				drawing.stroke();
				break;
				case 3:
				drawing.fillStyle= "white";
				drawing.font = "30px Verdana";
				drawing.fillText("Squirtle!", 740, 480);
				drawing.beginPath();
				drawing.lineWidth="8";
				drawing.strokeStyle="white";
				drawing.rect(666,3,330,593); 
				drawing.stroke();
				break;
				totalm=3;
			}
			
			var pokemon001 = document.getElementById("001");
			drawing.drawImage(pokemon001, 0, 0);
			var pokemon004 = document.getElementById("004");
			drawing.drawImage(pokemon004, 333, 0);
			var pokemon007 = document.getElementById("007");
			drawing.drawImage(pokemon007, 666, 0);
			
			if(e.keyCode==13&&totalm==4){
			switch(begin_pokemon){
				case 1: chosen_pokemon="Bulbasaur";test=1; break;
				case 2: chosen_pokemon="Charmander"; break;
				case 3: chosen_pokemon="Squirtle"; break;
			}
			alert("Je kiest voor " + chosen_pokemon + "!");
			SavePokemon();
			}
			totalm=4;
			break;
		}
		
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
		}
		else{
			//dont walk
			enterhouse = 0;
			xPos=400;
			yPos=500;
		}
}