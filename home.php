<html>
	<head>
		<title>Pokémon - Sander Dongelmans</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/slider.css">
	</head>
	<body id="container">
		<div class="header">
			<div class="red-row"><embed src="muziek/pokemonsong.mp3" width="65" height="60" hidden="false" style="margin-top: 100px;" /></div>
			<div class="nav">
			
				<div class="nav-image">
					
				</div>
				<div class="nav-content">
					<form action="home.php#content" method="POST">
						<input class="nav-items" type="text" value="" name="searchstring" placeholder="Zoek Pokémon op ID..."/>
					</form>
				</div>
			</div>
			<div class="white-row"></div>
		</div>
		
		<div class="banner">
			<div class="wrapper">
				<div class="logo_fade" style="position:absolute;">
					<img style="width: 55%;margin: 85px auto auto 36%;" src="images/slider-logo.png" />
				</div>
			</div>
			<div class="wrapper">
				<div class="logo_fade" style="position:absolute; width:1920px;">
					<div class="footer">
						<div class="footer-block">
						</div>
						<div class="footer-block" style="width: 100%;">
							<marquee style="color:#b1e46b;" behavior="scroll" direction="left" scrollamount="15"><a style="margin-right:950px;">(EPIC MUSIC)</a><a style="margin-right:300px;">I wanna be the very best...</a><a style="margin-right:200px;">like no one ever was...</a><a style="margin-right:150px;">To catch them is my real test</a><a style="margin-right:270px;">To train them is my cause</a><a style="margin-right:225px;">I will travel across the land</a><a style="margin-right:225px;">Searching far and wide</a><a style="margin-right:155px;">Each Pokemon to understand</a><a style="margin-right:405px;">The power that's inside</a>
							<a style="margin-right:240px;">Its you and me</a><a style="margin-right:200px;">I know it's my destiny</a><a style="margin-right:120px;">OOOOHHH! You're my best friend</a><a style="margin-right:500px;">In a world we must defend</a><a style="margin-right:200px;">A heart so true</a><a style="margin-right:80px;">Our courage will pull us through</a><a style="margin-right:600px;">You teach me and I'll teach you</a><a style="margin-right:580px;">Gotta catch 'em all!!</a><a style="margin-right:330px;">YEEEEEAAAHH!</a><a style="margin-right:175px;">Every challenge along the way</a><a style="margin-right:210px;">With courage I will face</a>
							<a style="margin-right:200px;">I will battle every day</a><a style="margin-right:250px;">To claim my rightful place</a><a style="margin-right:100px;">Come with me, the time is right</a><a style="margin-right:280px;">There's no better team</a><a style="margin-right:200px;">Arm in arm we'll win the fight</a><a style="margin-right:600px;">It's always been our dream</a><a style="margin-right:160px;">Its you and me</a><a style="margin-right:100px;">I know it's my destiny</a><a style="margin-right:100px;">OOOOHHH!! You're my best friend</a><a style="margin-right:420px;">In a world we must defend</a><a style="margin-right:200px;">A heart so true</a>
							<a style="margin-right:75px;">Our courage will pull us through</a><a style="margin-right:600px;">You teach me and I'll teach you</a><a style="margin-right:500px;">Gotta catch 'em all</a><a style="margin-right:1600px;">Gotta catch 'em aaaaaall</a><a style="margin-right:500px;">Gotta catch 'em aaaaaaaaaaaaall</a><a style="margin-right:180px;">Gotta catch 'em aaaaaaaaaaaaall</a><a style="margin-right:1000px;">YEEEEEAAAHH!!</a></marquee>
							<marquee style="color:#b1e46b;" behavior="scroll" direction="left" scrollamount="15"><a style="margin-left:5730px;">POKEMON! Gotta catch 'em all!</a><a style="margin-left:650px;">POKEMON!</a><a style="margin-left:1100px;">POKEMON! Gotta catch 'em all!</a><a style="margin-left:1300px;">POKEMON! Gotta catch 'em all!</a><a style="margin-left:6300px;">POKEMON! Gotta catch 'em all!</a><a style="margin-left:700px;">POKEMON!</a><a style="margin-left:1000px;">POKEMON! Gotta catch 'em all!</a><a style="margin-left:1400px;">POKEMON! Gotta catch 'em all!</a></marquee>
						</div>
						<div class="footer-block">
						</div>
					</div>
				</div>
			</div>
			<img src="images/slider-big.png" alt="" />
		</div>
		
		<div class="content" id="content">
			<div class="wrapper">
				<div class="logo_fade" style="position:absolute;">
					<div class="pokemon-main">
						<?php
							$found = true;
							$id = $_POST["searchstring"];
							
							if(isset($_POST)){
								if(is_numeric($id)){
									if($id <= 719){
										if($found && $id)
										{											
										$data = file_get_contents("http://pokeapi.co/api/v1/pokemon/".$id);
										$numlength = strlen((string)$id);
										if($numlength == "1"){$idd = "00".$id;}
										if($numlength == "2"){$idd = "0".$id;}
										if($numlength == "3"){$idd = $id;}
											
										if($data != ""){
											
											$rData = json_decode($data, true);
											?>
											<div class="pokemon-afbeelding">
											<?php
												echo "<img style='width:100%;' src='http://assets.pokemon.com/assets/cms2/img/pokedex/full/".$idd.".png'>";
											?>
											</div>
											<div class="pokemon-info">
												<table>
													<tbody>
													<?php 
														echo "<tr><td>Name:</td><td>".$rData['name']."</td></tr>";
														echo "<tr><td>Height:</td><td>".$rData['height']."</td></tr>";
														echo "<tr><td>Weight:</td><td>".$rData['weight']."</td></tr>";
													}
													else{
														die("No Pokemon found");
													}
												}
											}
											else{
												echo "Er zijn maar 719 Pokémon op deze wereld...";
											}
										}
										else{
											if($found && $id)
												{											
												$data = file_get_contents("http://pokeapi.co/api/v2/pokemon/".$id);
																									
												if($data != ""){
													
													$rData = json_decode($data, true);
													?>
													<div class="pokemon-afbeelding">
													<?php
														echo "<img style='width:100%;' src='http://assets.pokemon.com/assets/cms2/img/pokedex/full/".$id.".png'>";
													?>
													</div>
													<div class="pokemon-info">
														<table>
															<tbody>
															<?php 
																echo "<tr><td>Name:</td><td>".$rData['name']."</td></tr>";
																echo "<tr><td>Height:</td><td>".$rData['height']."</td></tr>";
																echo "<tr><td>Weight:</td><td>".$rData['weight']."</td></tr>";
															}
															else{
																die("No Pokemon found");
															}
														}
										}
									}
									?>		
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="wrapper">
				<div class="logo_fade" style="position:absolute; width:1920px;">
					<div class="footer">
						<div class="footer-block">
							<a>Contact</a><br/>
							info@pokemon.com
						</div>
						<div class="footer-block">
							<a>Social Media</a><br/>
							<img class="social-icon" alt="Facebook" src="images/facebook-icon.png" href="" target="_blank">
							<img class="social-icon" alt="Twitter" src="images/twitter-icon.png" href="" target="_blank">
							<img class="social-icon" alt="Instagram" src="images/instagram-icon.png" href="" target="_blank">
							<img class="social-icon" alt="Google+" src="images/google-icon.png" href="" target="_blank">
							<a href="home.php"><img class="social-icon" alt="YouTube" src="images/youtube-icon.png"></a>
						</div>
						<div class="footer-block">
							<a style="font-size:18px; color:#b1e46b;">Copyright &copy; Pokémon &trade;</a><br/>
							<a style="font-size:30px; color:#b1e46b; font-weight:600;" href="http://localhost:8080/pokemon_game/game.php" target="_blank">PLAY THE GAME</a>
						</div>
					</div>
				</div>
			</div>
			<img src="images/slider-big.png" alt="" />
		</div>
	</body>
</html>