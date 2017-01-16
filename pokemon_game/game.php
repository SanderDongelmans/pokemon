<?php 
session_start();
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql');
$dbname = 'pokemon';
mysql_select_db($dbname);

if(isset($_POST["bttLogin"])){
	$message="";
	$result = mysql_query("SELECT * FROM user WHERE username='" . $_POST["username"] . "' and password = '". $_POST["password"]."'");
	$row  = mysql_fetch_array($result);
	if(is_array($row)) {
	$_SESSION["userid"] = $row['id'];
	$_SESSION["username"] = $row['username'];
	$_SESSION["email"] = $row['email'];
	$_SESSION["password"] = $row['password'];
	$_SESSION["gender"] = $row['gender'];
	$_SESSION["map"] = $row['map'];
	$_SESSION["x-position"] = $row['x'];
	$_SESSION["y-position"] = $row['y'];
	$_SESSION["pokemon_1"] = $row['pokemon_1'];
	
		$result1 = mysql_query("SELECT * FROM pokemon WHERE id='" . $row['pokemon_1'] . "'");
		$row1  = mysql_fetch_array($result1);
		if(is_array($row1)) {
		$_SESSION["pokemon_1_name"] = $row1['name'];
		?>
		<script>
			alert(<?php $_SESSION["pokemon_1_name"] ?>);
		</script>
		<?php
		} else {
		$message = "Pokemon not found!";
		}
	
	header("Location:game.php");
	} else {
	$message = "Invalid Username or Password!";
	}
	if(isset($_SESSION["userid"])) {
		
	}
}
if(isset($_POST["bttRegister"])){	
	if($_POST["createpassword"]==$_POST["createpasswordrepetition"]){
	$create_username = $_POST["createusername"];
	$create_password = $_POST["createpassword"];
	$create_email = $_POST["createemail"];
	if($_POST["creategender"]=="Man"){$create_gender=1;}else{$create_gender=2;}
	$create_map	= "map1";
	$create_x = 2;
	$create_y = 3;
	
	mysql_query("INSERT INTO user VALUE (0,'$create_username','$create_email','$create_password','$create_gender','$create_map','$create_x','$create_y')");
	header("Location:game.php");
	}
	else{
	$message = "Passwords don't match!";
	}
}
 ?>
<html>
<head>
	<title>Pokémon Game</title>
	<link href="css.css" rel="stylesheet">
	<link href="bootstrap.min.css" rel="stylesheet">
	<link href="sticky-footer-navbar.css" rel="stylesheet">
	<link rel="stylesheet" href="plyr.css">
	<script src="plyr.js"></script>
	<script src="settings.js" type="text/javascript"></script>
	<script src="pokemon_menu.js" type="text/javascript"></script>
	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body>
<?php
	$id = isset($_SESSION["userid"]) ? $_SESSION["userid"] : "Onbekend";
	$naam = isset($_SESSION["username"]) ? $_SESSION["username"] : "Onbekend";
	$user_email = isset($_SESSION["email"]) ? $_SESSION["email"] : "Onbekend";
	$user_password = isset($_SESSION["password"]) ? $_SESSION["password"] : "Onbekend";
	$user_gender = isset($_SESSION["gender"]) ? $_SESSION["gender"] : "Onbekend";
	
	If(isset($_GET['x'])){
		$_SESSION["x-position"] = $_GET['x'] / 50;
		$_SESSION["y-position"] = $_GET['y'] / 50;
		$_SESSION["map"] 		= (string)$_GET['m'];
		
		$save_x 	= $_SESSION["x-position"];
		$save_y 	= $_SESSION["y-position"];
		$save_map 	= $_SESSION["map"];
		
		//echo "<script>alert('".$save_x.$save_y.$save_map."')</script>";
		
		mysql_query("UPDATE user SET map = '".$save_map."',x = '".$save_x."',y = '".$save_y."' WHERE username = '".$naam."'");
		$_SESSION["saved"] = date("h:i:s");
		echo "<script>window.location.href = 'game.php?saved';</script>";
	}
	
	$map = isset($_SESSION["map"]) ? $_SESSION["map"] : "Onbekend";
	$x_position = isset($_SESSION["x-position"]) ? $_SESSION["x-position"] : "Onbekend";
	$y_position = isset($_SESSION["y-position"]) ? $_SESSION["y-position"] : "Onbekend";
	$pokemon_1 = isset($_SESSION["pokemon_1"]) ? $_SESSION["pokemon_1"] : "Onbekend";
	$pokemon_1_name = isset($_SESSION["pokemon_1_name"]) ? $_SESSION["pokemon_1_name"] : "Onbekend";
	
	If(isset($_GET['p'])){
		$PP_pokemon = $_GET['p'];
		$PP_userid= $_GET['u'];
		
		$_SESSION["x-position"] = $_GET['x'] / 50;
		$_SESSION["y-position"] = $_GET['y'] / 50;
		$_SESSION["map"] 		= (string)$_GET['m'];
		
		$save_x 	= $_SESSION["x-position"];
		$save_y 	= $_SESSION["y-position"];
		$save_map 	= $_SESSION["map"];
		
		mysql_query("UPDATE user SET map = '".$save_map."',x = '".$save_x."',y = '".$save_y."' WHERE username = '".$naam."'");
		mysql_query("UPDATE pokemon SET user_id = '".$PP_userid."' WHERE name = '".$PP_pokemon."'");
		$_SESSION["saved"] = date("h:i:s");
		echo "<script>window.location.href = 'game.php?saved';</script>";
	}
	
	If(isset($_GET['saved'])){
		?>
		<script>var saved = 1;</script> 
		<?php
	}
	else{
		?>
		<script>var saved = 0;</script> 
		<?php
	}
	
	
?>
<!-- DATABASE SERVICES IN GAME -->
<script type='text/javascript'>
	<?php if($user_gender == 1){$user_gender = "Man";}else{$user_gender = "Woman";}  ?>
	var userid = "<?php echo $id; ?>";
	var username = "<?php echo $naam; ?>";
	var user_password = "<?php echo $user_password; ?>";
	var email = "<?php echo $user_email; ?>";
	var gender = "<?php echo $user_gender; ?>";
	var map = "<?php echo $map; ?>";
	var x_position = "<?php echo $x_position; ?>";
	var y_position = "<?php echo $y_position; ?>";
	var pokemon_1 = "<?php echo $pokemon_1; ?>";
	var pokemon_1_name = "<?php echo $pokemon_1_name; ?>";
	
	function SaveAll(){
		window.location.href = "game.php?x=" + xPos + "&y=" + yPos + "&m=" + playerlocation;
	}
	
	function SavePokemon(){
		window.location.href = "game.php?p=" + chosen_pokemon + "&u=" + userid + "&x=" + xPos + "&y=" + yPos + "&m=" + playerlocation;
	}
</script>
<!-- navbar -->
<div class="header">
	<div class="red-row"></div>
		<div class="nav">
			<div class="nav-content">
				<div class="black-ball"></div>
			</div>
		</div>
	<div class="white-row"></div>
</div>
<!-- /navbar -->
<div class="container" style="padding:200px 0px 50px 0px;">
<?php 
if(isset($_GET['logout'])) {
	unset($_SESSION["userid"]);
	unset($_SESSION["username"]);
	unset($_SESSION["email"]);
	unset($_SESSION["password"]);
	unset($_SESSION["gender"]);
	unset($_SESSION["saved"]);
	unset($_SESSION["map"]);
	unset($_SESSION["x-position"]);
	unset($_SESSION["y-position"]);
	unset($_SESSION["pokemon_1"]);
	unset($_SESSION["pokemon_1_name"]);
	echo "<script>window.location.href = 'game.php';</script>";
}
if(isset($_SESSION["username"])) { ?>
<div class="canvas-top"><?php $username = $_SESSION["username"]; echo $username; if(isset($_SESSION["saved"])){echo " - Saved "; echo $_SESSION["saved"];} ?></div>
<canvas id="canvas" height="600" width="1000" style="background-image:url('images/grasss.jpg');float: left;"></canvas>
<canvas id="instellingen" height="600" width="1000" style="background-color:white;float: left;"></canvas>
<canvas id="pokemons" height="600" width="1000" style="background-image:url('images/pokemonsachtergrond.jpg');float: left;"></canvas>
<a href="#" class="button" id="settings-button"><!-- instellingen --></a>
<a href="#" class="instellingen-back-button" id="instellingen-back-button"><!-- instellingen --></a>

<div  id="audiosounds" class="js-plyr">
<audio controls="" crossorigin="" loop autoplay>
  <source src="muziek1.mp3" type="audio/mp3">
</audio>
</div>

<a href="#" class="pokemons-button"></a>
<a href="#" class="save-button"></a>
<a href="game.php?logout" class="logout"></a>

<?php 
}
else{
	if(isset($_GET['new'])){
		?>
		<div class="container login" style="width: 300px; margin-left: 333px;">
			<p style="color: black; font-size: 25px;">Login</p><hr/>
			<form method="POST">
				<input class="form-control" type="text" name="createusername" placeholder="Username">
				<input class="form-control" style="margin:5px 0px 10px 0px;" type="password" name="createpassword" placeholder="Password">
				<input class="form-control" style="margin:5px 0px 10px 0px;" type="password" name="createpasswordrepetition" placeholder="Password repetition">
				<input class="form-control" style="margin:5px 0px 10px 0px;" type="text" name="createemail" placeholder="Email">
				<input class="form-control" style="margin:5px 0px 10px 0px;" type="text" name="creategender" placeholder="Gender">
				<?php
				if(isset($message)){
				echo "<div class='alert alert-danger' id='test'>";
					echo $message;
				echo "</div>";
				}
				?>
				<input type="submit"  class="btn btn-primary" name="bttRegister" value="Register" style="background-color: #6a92f2;font-size:20px;">
				<p>or</p>
				<a class="btn btn-default" style="font-size:20px;margin-top:-7px;" href="game.php">Back</a>
			</form>
		</div>
		<?php
	}
	else{
?>
<div class="container login" style="width: 300px; margin-left: 333px;">
<p style="color: black; font-size: 25px;">Login</p><hr/>
<form method="POST">
	<input class="form-control" type="text" name="username" placeholder="Username">
	<input class="form-control" style="margin:5px 0px 10px 0px;" type="password" name="password" placeholder="Password">
	<?php
	if(isset($message)){
	echo "<div class='alert alert-danger' id='test'>";
        echo $message;
    echo "</div>";
	}
	?>
	<input type="submit"  class="btn btn-primary" name="bttLogin" value="Login" style="background-color: #6a92f2;font-size:20px;">
	<p>or</p>
	<a class="btn btn-default" style="font-size:20px;margin-top:-7px;" href="game.php?new">Create an account</a>
</form>
</div>
<?php
	}
}
?>
</div>
<footer class="footer" style="background-color:#7fac71;">
    <div class="container">
        <p class="text-muted" style="color: white;margin-left:300px;">Copyright &copy; All rights reserved - Made by Sander Dongelmans.</p>
    </div>
</footer>
<!--Ash-->
<img id="front" src="images/ash/front.png" width="50" height="50" style="display:none;">
<img id="right" src="images/ash/right.png" width="50" height="50" style="display:none;">
<img id="left" src="images/ash/left.png" width="50" height="50" style="display:none;">
<img id="upper" src="images/ash/back.png" width="50" height="50" style="display:none;">

<!--Buildings-->
<img id="begin-house" src="images/buildings/begin-house.png" width="300" height="200" style="display:none;">
<img id="house1-inside" src="images/buildings/inside/house1.jpg" width="600" height="400" style="display:none;">

<!-- Other stuff -->
<img id="startscreen" src="images/start-screen.jpg" width="1000" height="600" style="display:none;">
<img id="map2grass" src="images/map2grass.gif" width="1000" height="200" style="display:none;">
<img id="text600" src="images/text600.png" width="600" height="100" style="display:none;">
<img id="doorpath" src="images/buildings/inside/doorpath.jpg" width="100" height="50" style="display:none;">
<img id="arrowright" src="images/pijltje.gif" width="50" height="50" style="display:none;">
<img id="arrowdown" src="images/pijltjeomlaag.gif" width="50" height="50" style="display:none;">
<img id="arrowup" src="images/pijltjeomhoog.gif" width="50" height="50" style="display:none;">
<img id="arrowleft" src="images/pijltjelinks.gif" width="50" height="50" style="display:none;">
<img id="001" src="images/pokemons/001.png" width="333" height="600" style="display:none;">
<img id="004" src="images/pokemons/004.png" width="333" height="600" style="display:none;">
<img id="007" src="images/pokemons/007.png" width="333" height="600" style="display:none;">
<?php
if(isset($_SESSION["userid"])) {
?>
<script src="game.js" type="text/javascript"></script>
<?php
}
else{
	//geen script
}
?>
<script src="maps/Map1.js" type="text/javascript"></script>
<script src="maps/Map2.js" type="text/javascript"></script>
<script src="maps/House1.js" type="text/javascript"></script>
</body>