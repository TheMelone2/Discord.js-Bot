const Discord = require("discord.js");
const client = new Discord.Client();
const token = "OTEyMDIwNDg2MjIzOTc0NTEw.YZp3RA.LeTVeUflJXUMJCt2_txv-HxuC0k";
const prefix = "p!"

client.on("ready", () => {
  console.log("Moin, bin online")


  client.user.setActivity(` In Entwicklung `, { type: "LISTENING" })


});
client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong :ping_pong: \nMein Ping beträgt " + client.ws.ping + "ms. Genau Richtig für die Partnersuche! ")
  }

  else if (message.content === `<@${client.user.name}>` || message.content === `<@!${client.user.id}>`) {
    message.channel.send(`Du willst mein Prefix wissen? Hier: ${prefix}`);
  }
  else if (message.content.startsWith(prefix + "help")) {
    message.channel.send({
      embed: {
        color: (message.guild.me.displayHexColor),
        title: `PaarBot - Help`,
        description: `p!ping = Hier mein Ping
p!singles = Hier siehst du **alle**, wirklich alle **Singles**
p!set-bio = Setze deine Biografie/Beschreibung
p!report-bio = Reporte eine Biografie/Beschreibung
p!block = Blocke ein Single/User
p!fav = Setzte jemanden auf deine Favouriten Liste
p!date = Frage jemand nach einem MSG Date
       p!date-accept = Aktzeptiere das MSG Date
       p!date-reject = Lehne das MSG Date ab
p!report  = Reporte einen User

🍀**Das PaarBot Team wünscht dir Viel Glück**`,
        timestamp: new Date(),
        footer: {
          text: `${message.guild.name} | Für Singles gemacht!`
        }
      }
    })

  }

})

client.login(token);
