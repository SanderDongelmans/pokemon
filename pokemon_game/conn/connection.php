<?php 
	class Database
	{
		private $con;
			
		function __construct()
		{
			$this->con = mysqli_connect("localhost", "root", "", "vdt_db") or die ("Verbinding mislukt!");
		}
		
		function getText()
		{
			$query = "SELECT text FROM HOME_TEXT";
			return mysqli_query($this->con, $query);
		}
		
		/*een functie om een specifieke hond op te roepen*/
		function getTextById($id)
		{
			$query = "SELECT * FROM home_text WHERE id = 1";
			return mysqli_query($this->con, $query);
		}
		
		function saveText($text)
		{
			$query = "UPDATE home_text SET text = '$text' WHERE id = 1 ";
			/*stuur de nieuwe data naar de database*/
			return mysqli_query($this->con, $query);
		}
	
	}
?>