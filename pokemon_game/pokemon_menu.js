function PokemonMenu(e){
		document.getElementById("pokemons").style.display = "block";
		document.getElementById("instellingen-back-button").style.display = "block";
		document.getElementById("settings-button").style.display = "none";
		
		var canvas_instellingen = document.getElementById('pokemons');
		var drawing_instellingen = canvas_instellingen.getContext('2d');
		
		drawing_instellingen.font = "35px Verdana";
		drawing_instellingen.fillText("Pokemons", 22, 50);
		drawing_instellingen.fillText(pokemon_1_name, 35, 250);
		drawing_instellingen.fill();
		drawing_instellingen.stroke();
	
		document.querySelectorAll('.instellingen-back-button')[0].addEventListener('click', function(event) {
		document.getElementById("settings-button").style.display = "block";
		document.getElementById("pokemons").style.display = "none";
		document.getElementById("instellingen-back-button").style.display = "none";
	});
}