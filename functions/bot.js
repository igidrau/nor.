//Dependences
const Discord = require('discord.js');
const emojiFlags = require('emoji-flags');
const time = require('time');
//Variables nécéssaires à botTriggers : variables globales
CONF = require('../conf.json').marianneBot;




client = new Discord.Client();
//const token = process.env.TOKEN;
const token = require('../private/keys.json').token;



//FONCTIONS

function slc (nbItems){
  return Math.floor(Math.random() * nbItems);
}



function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

//function shareContent(array1, array2){
//   let i = 0;
//   while(i < array1.length - 1){
//     if(array2.includes(array1[i])){
//       i = array1.length + 1
//     } else {
//       i++;
//     }
//   }
//   if(i == array1.length + 1){
//     return true;
//   } else {
//     return false;
//   }
// }



CMD = {
   flag: msg => {
    let responses = [msg.author  + ", arrête imédiatement ! Qu'on ne t'y reprenne pas !", "Tu ne peux pas dire ça, " + msg.author  + " ! Hop hop hop, envoyez-moi " + pseudo + " au goulag ! Et plus vite que ça.",
                 "Petite mise au point " + msg.author + " : sur ce serveur, ce genre de termes n'est pas accepté. On ne joue pas avec ça ! J'espère sincèrement que tu ne recommenceras pas." ];
    //msg.delete();
    let response = '*(' + pseudo + ' a mal parlé)* '  + responses[slc(responses.length)];
    msg.channel.send(response);
  },
  vote: async msg => {
  		  await msg.react("✅");
        await msg.react(":opm:");
  		  await msg.react("❌");
  },
  destroy: function(){
    client.destroy();
  },

  updateTime: function(){
    let date = new time.Date();
    date.setTimezone("Europe/Paris");
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

  },
  ping: msg => {
    msg.reply('pong!');
  },
  activity: {
    set: msg => {
      let act = msg.content.substring(13);
      client.user.setActivity(act);
    }
  }
};

function react(msg, cat){
  let reaction = false;

  let category = botTriggers[cat];
  if(category != null){
    let elements = Object.keys(category);
    shuffle(elements);
    let i = 0;
    while ((i < elements.length) && !(reaction)) {
      let element = category[elements[i]];
      let allowedIn = element.inId;
      if(allowedIn == null){
        allowedIn = [msg.channel.id];
      }
      if(allowedIn.includes(msg.channel.id)){
        let allowedFor = element.forId;
        let j = 0;
        let read = false; //permission de lecture quand allowedFor == null
        if(allowedFor == null){
          read = true;
        } else {
          while(!(msg.member.roles.has(allowedFor[j])) && (j < allowedFor.length)){
          j++;
          }
          if(msg.member.roles.has(allowedFor[j])) {
            read = true;
          }
      }
    //  console.log('read: ' + read);
        if(read){
          let triggers = element.trigger;
        //  console.log(triggers);
          let content = msg.content.toLowerCase();
          let k = 0;
          while ((k < triggers.length) && !(reaction)){
            if(content.includes(triggers[k])){
              reaction = true;
            }
            k++;
          }
        }
      //  console.log('reaction: ' + reaction);
          if(reaction){
            if(Math.random() < element.chance){
              if(element.type == "text"){
                try{
                  let text = element.text[slc(element.text.length)];
                  msg.channel.send(text);
                } catch(e) {
                  throw e;
                }
              } else if(element.type == "textVar"){
                try{
                  let vars = element.var;
                  let text = element.text[slc(element.text.length)];
                  msg.channel.send(text);
                } catch(e){
                  throw e;
                }
              } else if (element.type == "function") {
                try{
                 eval(element.fcn(msg));
                } catch(e){
                  throw e;
                }
              }
            }
          }


        }
        i++;
      }
    }
    hasReacted = reaction;
}





client.on('ready', () => {
  console.log("Connectée en tant que " + client.user.tag  + " !");
  client.user.setActivity(CONF.activity);
});




//SI MESSAGE
client.on('message', msg => {
  let process = false;
  if(msg.author != client.user) {
    if(msg.channel.type == "text"){
      if(msg.guild.id == CONF.guild.nor){
        process = true;
      }
    }
  }

  if(process){
    hasReacted = false
    //Mise en minuscule
    let cnt = msg.content.toLowerCase().split(' ');
    pseudo = msg.author.username;
    if(msg.guild != null){
      if(msg.guild.member(msg.author).displayName != null){
        pseudo = msg.guild.member(msg.author).displayName;
      }
    }
    botTriggers = require('../bot-triggers.js');

    react(msg, 'moderation');
    if(hasReacted){
    //do nothing
    }
    else if (msg.content[0] == CONF.bang) {
      react(msg, 'commands');
    }
    else if(cnt.includes('marianne')){
      if((msg.isMentioned(client.user)) || (cnt[0] == 'marianne')){ //Mentions spécifiques
          if(msg.author.id == CONF.user.rssBot) {
            msg.channel.send("C'est bon, je suis revenue.");

          } else if(msg.content.includes('?')){ //Questions
            react(msg, 'marianneQuest');

          } else { //mentions
            react(msg, 'marianneMention');
          }


      } else { //autres
          react(msg, 'marianne');
      }



    } else {
      react(msg, 'triggerWords');
    }





    // let isoCodes = emojiFlags.codes;
    // for(let i = 0; i < isoCodes.length; i++){
    //     let country = emojiFlags.countryCode(isoCodes[i]);
    //     let text = "Excuse me people, but why do you use the flag of the beautiful country of " + country.name + "? I don't know. I don't live there. I don't live, in fact. I am the true godess of your spirit. I am your life. I'm one with the force and the force is with me.";
    //     if(containWord(message, country.emoji)){
    //       msg.channel.send(text);
    //     }
    // }



  } else if((msg.channel.type == "dm") && (msg.author != client.user)){
      msg.channel.send("Désolée, je ne répond pas au messages privés.");
    }

});

module.exports = {
  login: function(){ client.login(token);}
};
