<?php
function setTheme() {
    if(isset($_SESSION['theme'])){
        $theme = $_SESSION['theme'];
    } else {
        $_SESSION['theme'] = 1;
    }
    return $theme;
}
function readEntry($entry){
}

function getPage($method, $pageList){
    if($method=='get'){
        if((isset($_GET['p']))and($_GET['p']!='')){
            $page = intval($_GET['p']);
        }else{
            $error = 2;
        }
    } else {
        if((isset($_POST['page']))and($_POST['page']!='')){
            $page = intval($_POST['page']);
        }else{
            $error = 3;
        }
    }
    if(in_array($page, $pageList) == false){
        $page = 1;
        $error = 4;
    }
    return($page);
}

function getAuth(){
    if(isset($_SESSION['auth'])){
        $authState = $_SESSION['auth'];
    } else {
        $_SESSION['auth'] = false;
        $authState = false;
    }
    return $authState;
}
?>