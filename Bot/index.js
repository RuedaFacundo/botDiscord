const Discord = require('discord.js')
const client = new Discord.Client();
client.login('OTQ0OTkwNTExMDkyMDg4ODUz.YhJo_g.XqD7BzWMBwZOd-RRqxJaa8D9eas')

const mati = "870678841687945257";
const chapu = "392482037539536907";
const pinky = "690256657762353158";
const igna = "813246099238027264";
const igna2 = "926210902200557619";
const bot = "944990511092088853";

client.on("ready", ()=> {
    console.log("Estoy conectado");
})

/* Cuando recibe un mensaje */ 
client.on("message", (msg)=>{
    let message = msg.content.toLowerCase();

    if (msg.author.id !== bot){
        /* Mensaje de bienvenida */ 
        if (message.includes("hola")){
            if (msg.author.id === mati){
                msg.reply("Hola kiko furia! Tengo fuego, convidame una seca");
            } else if (msg.author.id === pinky){
                msg.reply("Hola creador! Gracias por darme la vida kinga");
            } else if (msg.author.id === chapu){
                msg.reply("Chapusinhoooo! Bienvenido pa, preparo la motito?? ;)");
            } else if (msg.author.id === igna || msg.author.id === igna2){
                msg.reply("Hola Golden Boy! Como esta espalda? Lista para una rutina??");
            }
        }

        /*Mensaje de que onda */ 
        if (message.includes("que onda")){
            msg.reply("Que onda pedrete?");
        }

        /* Mensaje de despedida */ 
        if (message.includes("bye") || message.includes("chau") || message.includes("hasta mañana")){
            msg.reply("Nos vemos rey, volve pronto!");
        }

        /* Mensaje de rutina */ 
        if (message.includes("rutina")){
            msg.reply("Esto es rutina locoooooo, dale que estoy manijaaa!!");
        }

        /* Mensaje de insultos */ 
        if (message.includes("hijo de puta") || message.includes("concha de tu madre") || message.includes("puto")){
            msg.reply("Mi rey! Este es un canal chill. Por favor, no insultes ni te tiltees!");
        }
    }
})

/* Cuando se agrega un nuevo usuario - Mensaje de bienvenida */
client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.get("925196778939219993");
    const txt = `Hola! <@${member.id}> Bienvenido al canal de la rutina, no te tiltees mucho :)`;
    channel.send(txt);
})