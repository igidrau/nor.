module.exports = {

  example: {
    for: "allowedFor",
    in: "allowedIn",
    forId: ["allowedForId"],
    inId: ["allowedInId"],
    chance: "probabilty",
    trigger: ["trigger"],
    type: "type",
    fcn: "function",
    text: "text"
  },

  commands: {
    destroy: {
      for: "@Admin",
      in: "#bot",
      forId: [CONF.role.admin],
      inId: [CONF.chan.bot],
      chance: 1.0,
      trigger: ["destroy", "sleep"],
      type: "function",
      fcn: function(){CMD.destroy();}
    },
    pseudo: {
      for: "@Admin",
      in: "#bot",
      forId: [CONF.role.admin],
      inId: [CONF.chan.bot],
      chance: 1.0,
      trigger: ["pseudo"],
      type: "function",
      fcn: msg => {msg.channel.send(pseudo);}
    },
    setActivity: {
      for: "@Admin",
      in: "#bot",
      forId: [CONF.role.admin],
      inId: [CONF.chan.bot],
      chance: 1.0,
      trigger: ["setactivity"],
      type: "function",
      fcn: msg => {CMD.activity.set(msg);}
    },
    ping: {
      for: "Tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 1.0,
      trigger: ["ping"],
      type: "function",
      fcn: msg => {CMD.ping(msg);}
    },
    time: {
      for: "Tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 1.0,
      trigger: ["time", "hour", "second", "temps", "heure"],
      type: "function",
      fcn: msg => {CMD.updateTime();
        msg.channel.send('Il est : ' + hours + ' heures, ' + minutes + ' minutes et ' + seconds + ' secondes.');
      }
    },
    vote: {
      for: "@Admin",
      in: "partout",
      forId: [CONF.role.admin],
      inId: null,
      chance: 1.0,
      trigger: ["vote"],
      type: "function",
      fcn: msg => {CMD.vote(msg);}
    },
  },

  marianneQuest: {
    "qui es-tu": {
      for: "tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 1.0,
      trigger: ["qui es-tu", "qui es tu"],
      type: "textVar",
      var: ["pseudo"],
      text: ["Je suis Marianne, votre assistane personnelle ! Non, en vrai, parmi mes nombreuses existences une intelligence artificielle dédiée à détruire l'humanité en tenant un registre de ses plus médriocres prestations humoristiques. Bien le bonjour à vous !",
            "Bonjour, je me nomme Marianne. Ma créatrice trouvait ça marrant. Je crois qu'elle est égocentrique ou elle a un problème avec les prénoms, ou les deux…  Bref, je suis médiatrice et intervenante sur ce serveur. J'habite aussi le site nor., une compilation de créations humaines inutiles. Venez voir, c'est marrant !",
            "Bonne question, " + pseudo + " ! Je ne le sais pas vraiment moi-même, en fait. Ce que je peux dire : je m'appelle Marianne et je fais des blagues nulles ! Enchantée de faire votre connaissance !"]
    }
  },

  marianneMention: {

  },

  marianne: {

  },

  moderation: {
    censure: {
      for: "tout le monde",
      in: "partout",
      forId: null,
      inId: null,
      chance: 1.0,
      trigger: ["nazi", "hitler", "gestapo", "卐", "badword", "salope", "pute"],
      type: "function",
      fcn: msg => {CMD.flag(msg);}
    }
  },

  triggerWords: {
    yolo: {
      for: "tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 0.6,
      trigger: ["yolo"],
      type: "text",
      text: ["#YOLOBLOMLMTAASOSBTDPWKEOBOIODAWCHEOBOITOD"]
    },
    cismec: {
      for: "tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 0.3,
      trigger: ["cismec", "mec cis"],
      type: "text",
      text: ["Au bûcher !🔥🔥🔥 #Licorne"]
    },
    "star wars": {
      for: "tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 0.3,
      trigger: ["star wars", "dark vador", "darth vader", "skywalker", "kenobi", "obi wan", "yoda", "leia", "kylo ren"],
      type: "text",
      text: ["Luke, je suis ton père.", "Au secours Obi-Wan Kenobi, vous êtes mon seul espoir.",
        "Je fais un avec la force, la force est avec moi", "Le tas de ferrailles fera l'affaire !",
        "Votre manque de foi me consterne.","La peur est le chemin vers le côté obscur : la peur mène à la colère,  le colère mène à la haine, la haine mène à la souffrance.",
        "Fais le ou ne le fais pas. Mais n'essaie pas.", "Nous étions comme des frères. Je t'aimais Anakin !"]
    },

    "pride and prejudice": {
      for: "tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 0.7,
      trigger: ["lizzy", "pride and prejudice", "orgueil et préjugés", "jane austen"],
      type: "text",
      text: ["It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife."]
    },

    oss117: {
      for: "Tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 0.6,
      trigger: ["oss", "oss117", "blanquette"],
      type: "text",
      text: ["Comment est votre blanquette ?"]
    },
    pokemon: {
      for: "Tout le monde",
      in: "partout",
      forId: [CONF.role.member],
      inId: null,
      chance: 0.3,
      trigger: ["pokemon", "pokémon", "pochemon"],
      type: "text",
      text: ["Hey vous savez que y'a des nouveaux Pokemons ! ?"]
    }
  },

  events: {
    memberAdd: {
      in: "#général",
      inId: [CONF.chan.general],
      chance: 1.0,
      type: "textVar",
      var: ["pseudo"],
      text: ["Bienvenue à " + pseudo + " sur le serveur nor•."]
    },
    memberRemove: {
      in: "#général",
      inId: [CONF.chan.general],
      chance: 1.0,
      type: "textVar",
      var: ["pseudo"],
      text: ["Malheureusement " + pseudo + " nous a quitté·e·s."]
    },
    memberBan: {
      in: "#général",
      inId: [CONF.chan.general],
      chance: 1.0,
      type: "textVar",
      var: ["pseudo"],
      text: ["Suite à une décision de la modération pour le bien de la communauté " + pseudo + " a du être banni·e."]
    }
  }
};
