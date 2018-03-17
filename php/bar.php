<!doctype html>
<html>
<head>
    <link rel='stylesheet' href='style.css' />

    <link href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab' rel='stylesheet'/>
</head>
<body>          
    <div class=main>
        <form name='mainForm' method='post' action='index.php'>
                <input type='text' class='in <?php if($page<11){
                    echo('public');
                } else{
                    echo 'auth';
                }
                ?>' id='entry' maxlength=10 name='entry' pattern='^[a-z0-9]{0,100}$'
                       autocomplete='off' placeholder='<?php switch($page){
                        case 1:
                            echo('El-e');
                            break;
                        case 10:
                            echo('Authentification...');
                            break;
                        case 11:
                            echo('Edition');
                            break;
                        
                       }
                       ?>'>
            
            <input type='submit' style='display: none'>
            <input type='hidden' name='page' value='<?php echo($page); ?>' >
        </form>
        <p id="subText"> <?php echo($subText); ?> </p>
    </div>
    <script src='script.js' type='text/javascript'></script>
</body>
</html>