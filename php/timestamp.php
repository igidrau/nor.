
<!doctype html>
<html>
<head>
    <link rel='stylesheet' href='style.css' />

    <link href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab' rel='stylesheet'/>
</head>
<body>
    <div class=main>
        <form name='mainForm' method='post' action='index.php'>
                <input type='text' name='entry' class='in public' placeholder='<?php
                $time = time() + 6000000000;
                echo('45632289' . $time);
                ?>'>


        </form>

    </div>
    <script type='text/javascript'>
        function timer(){
            var d = new Date();
            var time = Math.floor(d.getTime() /1000) + 6000000000;
            document.getElementsByName('entry')[0].placeholder = '45632289' + time;

        }
        setInterval(timer, 1000);
    </script>
</body>
</html>
