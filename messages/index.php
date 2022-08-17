<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="style.css">
		<link rel="stylesheet" href="./../style.css">
		<script src="./settheme.js"></script>
		<title>Document</title>
	</head>
	<body>
		<div class='container'>
		<?php 
			$connect = mysqli_connect('localhost', '', '', '');
			$query = mysqli_query($connect, 'SELECT * FROM maile');
			while($row = mysqli_fetch_row($query)) {
				echo '<div class = "row">';
					echo "<div class = 'cell'> <span>Name:</span><br> $row[1] </div>";
					echo "<div class = 'cell'> <span>Email:</span><br> $row[2] </div>";
					echo "<div class = 'cell'> <span>Subject:</span><br> $row[3] </div>";
					echo "<div class = 'cell'> <span>Message:</span><br> $row[4] </div>";
					echo "<div class = 'cell'> <span>Date:</span><br> $row[5] </div>";
				echo "</div>";
			}
		?>
		</div>
	</body>
</html>
