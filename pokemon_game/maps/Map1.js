function GetMap1(e){
	if(enterhouse<=0){
		//rechts
		if(e.keyCode==39){
			switch(xPos){
				case 950:
					if(yPos==250){
						playerlocation="map2";
						enterhouse = 1;
					}
					else{
						//nothing
					}
				break;
				case 100:
					if(yPos==100||yPos==150){
				
					}
					else{
						xPos+=50;
						totalx+=1;
					}
				break;
				case 250:
					if(yPos==300||yPos==350||yPos==400||yPos==450){
				
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
		}
		//links
		if(e.keyCode==37){
			switch(xPos){
				case 0:
					//nothing
				break;
				case 100:
					if(yPos==100||yPos==150){
				
					}
					else{
						xPos-=50;
						totalx-=1;
					}
				break;
				case 600:
					if(yPos==300||yPos==350||yPos==400||yPos==450){
				
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
		}
		//boven
		if(e.keyCode==38){
			switch(yPos){
				case 0:
					//nothing
				break;
				case 500:
					if(xPos==400||xPos==450){
						playerlocation="house1";
						enterhouse = 1;
					}
					else{
						if(xPos==300||xPos==350||xPos==500||xPos==550){
							
						}
						else{
							yPos-=50;
							totaly-=1;
						}
					}
				break;
				case 200:
					if(xPos==100){
						//brug
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
				case 550:
					//nothing
				break;
				case 50:
					//nothing
					//brug
					if(xPos==100){
						yPos+=50;
						totaly+=1;
					}
				break;
				case 250:
					if(xPos==300||xPos==350||xPos==400||xPos==450||xPos==500||xPos==550){
						//nothing HOUSE1
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
		}
		else{
			switch(enterhouse){
				case 1:
				enterhouse = 0;
				xPos=950;
				yPos=250;
				break;
				case 2:
				enterhouse = 0;
				xPos=400;
				yPos=500;
				break;
			}
		}
}