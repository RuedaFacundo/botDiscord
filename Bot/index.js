const Discord = require('discord.js')
const fetch = require ('node-fetch')
var XMLHttpRequest = require('xhr2')
const client = new Discord.Client();
client.login('')

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

        /* Mensaje de birra */
        if (message.includes("birra") || message.includes("cerveza")){
            msg.reply("Se sale hoy? Me prendo rey");
        } 

        /* Mensaje de tilteo */
        if (message.includes("te tilteaste fitu")){
            msg.reply("Seee toy re tilteado, este juego de mierda");
        }

        /* Mensaje de programador */
        if (message.includes("programado")){
            msg.reply("Estoy medio limitado todavia, vite como e");
        }

        /* Mensaje de cumbia */
        if (message.includes("cumbia")){
            msg.reply("Cumbia 420 pa lo negroooo");
        }

        /* Mensaje de musica */
        if (message.includes("yendo")){
            msg.reply("Yendo no, llegando");
        }

        /* Mensaje de tethan */
        if (message.includes("tethan")){
            msg.reply("Como extraño las rutinas del tethan");
        }

        /* Mensaje de tanque */
        if (message.includes("tanque")){
            msg.reply("Banco a los tanque que dejan la vida por el equipo");
        }

        /* Mensaje de stumble */
        if (message.includes("stumble")){
            msg.reply("Sale un stumble?");
        }

        /* Mensaje de funciones */
        if (message.includes("funciones") && msg.author.id === mati){
            msg.reply("Cuando quieras te enseño arrow function rey");
        }

        /* Consulta del clima */
        if (message.includes("!clima")){
            let msj = message.toUpperCase();
            let city = msj.split("!CLIMA ");
            let promesa = fetch('http://api.weatherstack.com/current?access_key=87780e795c6656a52e8a4b7afd0648fb&query='+city[1]);
            promesa.then((res) =>{
                return res.json();
            }).then((json)=>{
                var current = json.current;
                var location = json.location;
                let ciudad = city[1] + ", " + location.region + ", " + location.country;
        
                const weatherinfo = new Discord.MessageEmbed()
                .setAuthor(ciudad)
                .setColor("RANDOM")
                .setImage(`${current.weather_icons}`)
                .addField("Fecha y hora: ", `${location.localtime}`, true)
                .addField("Temperatura: ", `${current.temperature}° C`, true)
                .addField("Viento", `${current.wind_speed} km`, true)
                .addField("Humedad", `${current.humidity}%`, true)
                .addField("Prob. Precipitacion", `${current.precip}%`, true)

                msg.reply(weatherinfo);
            }).catch(() => msg.reply("Ingrese una ciudad valida 😩"));
        }        

        /* Consulta Crypto */
        if (message.includes("!crypto")){
            let msj = message.toUpperCase();
            let crypto = msj.split("!CRYPTO ");
            var burl = "https://api.binance.com";
            var query = '/api/v1/ticker/24hr';
            query += '?symbol=' + crypto[1];
            var url = burl + query;
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET',url,true);
            ourRequest.responseType = 'json';
            ourRequest.onload = function(){
                var precio = ourRequest.response.lastPrice;
                var highPrice = ourRequest.response.highPrice;
                var lowPrice = ourRequest.response.lowPrice;
                if(ourRequest.response.msg === undefined){
                    const cryptoInfo = new Discord.MessageEmbed()
                    .setAuthor("Valor de la Crypto")
                    .setColor("RANDOM")
                    .addField("Crypto: ", `${ourRequest.response.symbol}`, true)
                    .addField("Precio: ", `$${precio.substring(0, precio.indexOf(".") + 3)}`, true)
                    .addField("Precio Max: ", `$${highPrice.substring(0, precio.indexOf(".") + 3)}`, true)
                    .addField("Precio Min: ", `$${lowPrice.substring(0, precio.indexOf(".") + 3)}`, true)
                    msg.reply(cryptoInfo);
                } else {
                    msg.reply("Ingrese un valor correcto. 😩 Ej. BTCUSDT");
                }
            }
            ourRequest.send();
        }
    }
})

/* Cuando se agrega un nuevo usuario - Mensaje de bienvenida */
client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.get("925196778939219993");
    const txt = `Hola! <@${member.id}> Bienvenido al canal de la rutina, no te tiltees mucho :)`;
    channel.send(txt);
})