<!doctype html>
<html>
<head>
    <link rel='stylesheet' href='style.css' />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab' rel='stylesheet'/>
</head>
<body>          
    <div class=editZone>
        <form name='mainForm' method='post' action='index.php'>
            <textarea class='in auth write' name ='entryText'></textarea>
            <input type='hidden' name='page' value='<?php echo($page); ?>' >
        </form>
        <p id="subText" class='up'> <?php echo($subText); ?> </p>
   </div>
   <script src='script.js' type='text/javascript'></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
	<script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
	<script>
		//var simplemde = new SimpleMDE({
		//	spellChecker: false
		//	
		//});
	</script>
</body>
</html>