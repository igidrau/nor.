<?php
session_start();
$error = 0;
$entry = '';
$subText = '';
$page = 1;
$theme = 1;
$commandList = array('edit', 'auth','home');
$pageList = array(1,2,10,11,12,13);
$entryList = array('c001a5', 'test');
$c001a05 = 'Ceci est un paragraphe'; 


include('functions.php');
$theme = setTheme();
$authState = getAuth();
  
    
    
if((isset($_GET['e']))and($_GET['e']!='')){
// GET
    $entry = $_GET['e'];
    if(in_array($entry, $commandList)){
        $error = 1;
    } elseif(in_array($entry,$entryList)){
        $page = 2;
    }
    
    
    
// POST    
} elseif((isset($_POST['entry']))and($_POST['entry']!='')){
    $entry = $_POST['entry'];
    //Dans commandList
    if(in_array($entry, $commandList)){
        switch($entry){
            case 'home':
                $page = 1;
                break;
            
            case 'edit':
                $page=getPage('post',$pageList);
                if($error==0){
                    if(($page==1)or($page=2)){
                        if($authState){
                            $page = 11;
                        } else {
									$page=1;
                           $error = 6;
                        }
                
                    } else {
                        $error = 5;
                    }
                }
                break;
            
            case 'auth':
                
                if(!$authState){
                    $authState = true;
                    $_SESSION['auth'] = true;
                    $subText = 'Vous êtes connecté';
                } else {
                    $authState = false;
                    $_SESSION['auth'] = false;
                    $subText = 'Vous êtes déconnecté';
                }
                break;
        }
    } else {
        $page=getPage('post',$pageList);
    
        if(in_array($page, $pageList) == false){
            $page = 1;
            $error = 4;
        }
        if($error==0){
            switch($page){
                case 1:
						if(in_array($entry, $entryList)){
							$page = 2;
						}
                  break;
                //case 2:
                    //Authentification
                    //break;
						case 11:
							$page = 13;
            }
        }
    }

    
//Entry non défini    
} else {
    $page=getPage('get', $pageList);
    if($error==0){
        if($page==1){}
        elseif($page==11){
                if($authState==1){}
                else{
                        $page = 1;
                        $error = 6;
                }
        } else {
                $page = 1;
                $error= 7;
        }
    }
   
}

    
    /*Si erreur, retour à l'accueil et affichage de l'erreur */
    if ($error !=0){
      switch($error){
			case 1:
				$subText = "Erreur $error : Une erreur de requète est arrivée";
				break;
				
			case 3:
				$subText = "Erreur $error : Une erreur de requète est arrivée";
				break;
			case 4:
				$subText = "Erreur $error : Une erreur de requète est arrivée";
				break;
			case 5:
				$subText = "Erreur $error : Vous ne pouvez pas utiliser cette commande ici";
				break;
			case 6:
				$subText = "Erreur $error : Vous n'êtes pas connecté, veuillez réessayer";
				break;
			case 7:
				$subText = "Erreur $error : Une erreur de requète est arrivée";
				break;
        
        }
    }

if(($page<12)and($page!=2)){
    include('bar.php');
} elseif($page==2){
	include('read.php');
} elseif ($page == 12){
    include('description.php');
} elseif ($page == 13){
    include('write.php');
}

?>