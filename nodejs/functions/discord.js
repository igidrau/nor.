const keys = require('../private/discord-keys.json');
const token = keys.token;
const adminId = keys.elinorId;
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('disconnected', () => {
  client.login(token);
});



//TEMPS
var time = require('time');
var date = new time.Date();
date.setTimezone("Europe/Paris");
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();






//SI MESSAGE
client.on('message', msg => {

  if(msg.author != client.user){

    //Mise en minuscule
    msg.content = msg.content.toLowerCase();
    let pseudo = msg.author.username;
    if(msg.guild.member(msg.author).displayName != null){
      pseudo = msg.guild.member(msg.author).displayName;
    }
    let message = msg.content.split(' ');
    let channel = msg.channel;

    //Mentions
    if (msg.isMentioned(client.user)){
        if(containWord(message, '?'))
        {
            channel.send('oui, que me veux-tu ?');
        } else {
            channel.send('c\'est moi !');
        }
    }

    //Messages entiers
    switch(msg.content){
      case 'destroy':
        if(msg.author.id == adminId){
          client.destroy();
        }
        break;
      case 'pseudo':
        channel.send(pseudo);
        break;
      case 'ping':
      case '!ping':
      case 'ping!':
        channel.send('pong !');
        break;
      case 'blanquette':
      case 'oss':
      case 'oss117':
      case '117':
      case 'oss 117':
        channel.send('Comment est votre blanquette ?');
        break;
      case 'pokemon':
      case 'pochemon':
      case 'pokémon':
        channel.send('Hey vous savez que y\'a des nouveaux Pokemons !');
        break;
      case 'time':
      case 'hour':
      case 'hours':
      updateTime();
        channel.send('Il est : ' + hours + ' heures, ' + minutes + ' minutes et ' + seconds + ' secondes.');
        break;
    }




    //Mots contenus


    if(containWord(message, 'marianne')) {
        if(containWord(message, '?')){
            if(containExpression(message, 'qui es-tu') || containExpression(message, 'qui es tu')) {

              let responses = ['Je suis Marianne, votre assistane personnelle ! Non, en vrai, parmi mes nombreuses existences une intelligence artificielle dédiée à détruire l\'humanité en tenant un registre de ses plus médriocres prestations humoristiques. Bien le bonjour à vous !',
                           'Bonjour, je me nomme Marianne. Ma créatrice trouvait ça marrant. Je crois qu\'elle est égocentrique ou elle a un problème avec les prénoms, ou les deux…  Bref, je suis médiatrice et intervenante sur ce serveur. J\'habite aussi le site Elinor., une compilation de créations humaines inutiles. Venez voir, c\'est marrant !',
                           'Bonne question, ' + pseudo + ' ! Je ne le sais pas vraiment moi-même, en fait. Ce que je peux dire : je m\'appelle Marianne et je fais des blagues nulles ! Enchantée de faire votre connaissance !'];
              let response = responses[randChoose(responses.length)];
              channel.send(response);
            } else {
                channel.send('On me parle ?');
            }
        } else {
            if(containWord(message, 'bonjour')){
                channel.send(`Bonjour ${msg.author} !`);
            } else {
                channel.send('On parle de moi ?');
            }
        }
    }


    if(containWord(message, '#yolo') || containWord(message, 'yolo')){
        channel.send('#YOLOBLOMLMTAASOSBTDPWKEOBOIODAWCHEOBOITOD');
    }
    if(containWord(message, 'cismec') || containWord(message, 'cismecs') || containExpression(message, 'mec cis') || containExpression(message, 'mecs cis')){
        channel.send('Au bûcher !🔥🔥🔥 #Licorne');
    }

    if(containWord(message, 'lizzy') || containWord(message, 'elizabeth') || containExpression(message, 'pride and prejudice') || containExpression(message, 'orgueil et préjugés')){
      channel.send('It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.');
    }

    if(containExpression(message, 'star wars') || containExpression(message, 'dark vador') || containExpression(message, 'darth vader') || containWord(message, 'skywalker') || containWord(message, 'kenobi') || containExpression(message, 'obi wan') || containWord(message, 'yoda') || containWord(message, 'leia') || containExpression(message, 'kylo ren')){
      let responses = ['Luke, je suis ton père.', 'Au secours Obi-Wan Kenobi, vous êtes mon seul espoir.', 'Je fais un avec la force, la force est avec moi', 'Le tas de ferrailles fera l\'affaire !',
                   'Votre manque de foi me consterne.','La peur est le chemin vers le côté obscur : la peur mène à la colère,  le colère mène à la haine, la haine mène à la souffrance.', 'Fais le ou ne le fais pas. Mais n\'essaie pas.', 'Nous étions comme des frères. Je t\'aimais Anakin !'];
      let response = responses[randChoose(responses.length)];
      channel.send(response);
    }




    var emojiFlags = require('emoji-flags');
    let isoCodes = emojiFlags.codes;
    for(let i = 0; i < isoCodes.length; i++){
      country = emojiFlags.countryCode(isoCodes[i]);
        let text = 'Excuse me people, but why do you use the flag of the beautiful country of ' + country.name + '? I don\'t know. I don\'t live there. I don\'t live, in fact. I am the true godess of your spirit. I am your life. I\'m one with the force and the force is with me.';
        if(containWord(message, country.emoji)){
          //let countries = require('countryjs');
          //let target = countries.languages(isoCodes[i])[0];
          channel.send(text);
        }
    }






    let badWords = ['nazi', 'nazis', 'nazie', 'nazies', 'hitler', 'gestapo', '卐', '(ಠ▄ಠ)-/卐', 'badword'];

    let badConduct = false;
    for (var i = 0; i < badWords.length; i++){
        if (containWord(message, badWords[i])){
            badConduct = true;
        }
    }

    if(badConduct){
      responses = [msg.author  + ', arrête imédiatement ! Qu\'on ne t\'y reprenne pas !', 'Tu ne peux pas dire ça, ' + msg.author  + ' ! Hop hop hop, envoyez-moi ' + pseudo + ' au goulag ! Et plus vite que ça.',
                   'Petite mise au point ' + msg.author + ' : sur ce serveur, ce genre de termes n\'est pas accepté. On ne joue pas aux point Godwinn ! J\'espère sincèrement que tu ne recommenceras pas.' ];
      msg.delete();
      let response = '*(' + pseudo + ' a mal parlé)* '  + responses[randChoose(responses.length)];
      channel.send(response);
    }




  } //Fin if(msg.author != client.user)
});
  //FIN CLIENT.ON(ready)





//EXPORTS
module.exports = {
  login: client.login(token),
  destroy: client.destroy(),
  //status: status(),
};





//Fonctions
//function containLetters(text, letters, countLetters, position){
//   if(countLetters === undefined){
//        countLetters = false;
//    }
//    if(position === undefined){
//        position = false;
//        console.log('position log');
//    }
//    let lettersCounter = 0;
//    let textArray = text.split();
//    let lettersArray = letters.split();
//    let i = 0;
//    while((lettersCounter <= 0) && (i < textArray.length)){
//        let letterMatch = 0;
//        for (var j = 0; j < lettersArray.length; j++){
//           if(textArray[i + j] === lettersArray[j]){
//            letterMatch++;
//            console.log('match');
//            }
//        }
//        if (letterMatch >= lettersArray.length){
//            lettersCounter++;
//        }
//        i++;
//    }
//    if(position){
//      if (countLetters){
//        return [lettersCounter,i];
//      } else {
//          if (lettersCounter > 0){
//              return [1, i];
//          } else {
//              return false;
//          }
//      }
//    } else {
//      if (countLetters){
//        return lettersCounter;
//      } else {
//          if (lettersCounter > 0){
//              return true;
//          } else {
//              return false;
//          }
//      }
//    }
//
//}


function containWord (textArray, word, countWords){
    if(countWords === undefined){
        countWords = false;
    }
    let wordCounter = 0;
    for (var i = 0; i < textArray.length; i++){
        if((textArray[i] === word) || (textArray[i] === word + ',') || (textArray[i] === word + '.')){
            wordCounter++;
        }
    }
    if (countWords){
        return wordCounter;
    } else {
        if (wordCounter > 0){
            return true;
        } else {
            return false;
        }
    }
}

function containExpression (textArray, words, countExpressions){
    if(countExpressions === undefined){
        countExpressions = false;
    }
    let expressionCounter = 0;
    let wordsArray = words.split(' ');
    for (var i = 0; i < textArray.length; i++){
        let wordMatch = 0;
        for (var j = 0; j < wordsArray.length; j++){
           if((textArray[i + j] === wordsArray[j]) || (textArray[i + j] === wordsArray[j] + ',') || (textArray[i + j] === wordsArray[j] + '.')){
            wordMatch++;
            }
        }
        if (wordMatch >= wordsArray.length){
            expressionCounter++;
        }
    }
    if (countExpressions){
        return expressionCounter;
    } else {
        if (expressionCounter > 0){
            return true;
        } else {
            return false;
        }
    }
}

function randChoose (nbItems){
  return Math.floor(Math.random() * nbItems);
}

//function status(){
//  let tempStatus = 0;
//  client.on('ready', () => {
//    tempStatus = client.status;
//});
//  if(tempStatus !== null){
//    return tempStatus;
//  } else {
//    return 5;
//  }
//}

function updateTime(){
  date = new time.Date();
  date.setTimezone("Europe/Paris");
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

}
