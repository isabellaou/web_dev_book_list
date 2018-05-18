<?php 
require_once '../includes/book.php'; // The mysql database connection script
if(isset($_GET['itemID'])){
	$itemID = $mysqli->real_escape_string($_GET['itemID']);
	$query="UPDATE book_list set LIKES=LIKES+1 where id='$itemID'";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	$result = $mysqli->affected_rows;

	$json_response = json_encode($result);

}
?>