function GetMap2(e){
	if(enterhouse==0){
		//rechts
		if(e.keyCode==39){
			switch(xPos){
				case 950:
					//nothing
				break;
				case 50:
					if(yPos==200||yPos==300||yPos==350||yPos==400||yPos==450){
						//nothing
					}
					else{
						xPos+=50;
						totalx+=1;
					}
				break;
				case 700:
					if(yPos==500||yPos==550){
						//nothing
					}
					else{
						xPos+=50;
						totalx+=1;
					}
				break;
				case 250:
					if(yPos==250){
						//nothing
					}
					else{
						xPos+=50;
						totalx+=1;
					}
				break;
				case 550:
					if(yPos==250){
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
		}
		//links
		if(e.keyCode==37){
			switch(xPos){
				case 0:
					if(yPos==250){
						playerlocation="map1";
						enterhouse = 1;
					}
				break;
				case 200:
					if(yPos==100||yPos==150||yPos==300||yPos==350){
						//nothing
					}
					else{
						xPos-=50;
						totalx-=1;
					}
				break;
				case 550:
					if(yPos==250){
						//nothing
					}
					else{
						xPos-=50;
						totalx-=1;
					}
				break;
				case 350:
					if(yPos==200){
						//nothing
					}
					else{
						xPos-=50;
						totalx-=1;
					}
				break;
				case 850:
					if(yPos==400||yPos==450||yPos==500||yPos==550){
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
		}
		//boven
		if(e.keyCode==38){
			switch(yPos){
				case 0:
					//nothing
				break;
				case 200:
					if(xPos==0||xPos==50){
						//nothing
					}
					else{
						yPos-=50;
						totaly-=1;
					}
				break;
				case 250:
					if(xPos==100||xPos==150||xPos==200||xPos==250){
						//nothing
					}
					else{
						yPos-=50;
						totaly-=1;
					}
				break;
				case 500:
					if(xPos==0||xPos==50||xPos==850||xPos==900||xPos==950){
						yPos-=50;
						totaly-=1;
					}
					else{
						//nothing
					}
				break;
				case 300:
					if(xPos==300||xPos==350||xPos==400||xPos==450||xPos==500||xPos==600||xPos==650||xPos==700||xPos==750||xPos==800||xPos==850||xPos==900||xPos==950){
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
				case 550:
					//nothing
				break;
				case 50:
					if(xPos==0||xPos==50||xPos==100||xPos==150){
						//nothing
					}
					else{
						yPos+=50;
						totaly+=1;
					}
				break;
				case 150:
					if(xPos==200||xPos==250||xPos==300){
						//nothing
					}
					else{
						yPos+=50;
						totaly+=1;
					}
				break;
				case 200:
					if(xPos==350||xPos==400||xPos==450||xPos==500||xPos==600||xPos==650||xPos==700||xPos==750||xPos==800||xPos==850||xPos==900||xPos==950){
						//nothing
					}
					else{
						yPos+=50;
						totaly+=1;
					}
				break;
				case 350:
					if(xPos==0||xPos==50||xPos==850||xPos==900||xPos==950){
						yPos+=50;
						totaly+=1;
					}
					else{
						//nothing
					}
				break;
				case 250:
					if(xPos==100||xPos==150){
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
		}
		else{
			//dont walk
			enterhouse = 0;
			xPos=0;
			yPos=250;
		}
}