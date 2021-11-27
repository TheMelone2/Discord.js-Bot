const Discord = require("discord.js");
const client = new Discord.Client();
const token = "Paste your Token here!";
const prefix = "!"

client.on("ready", () => {
  console.log("Bot is ready!")


  client.user.setActivity(` against the Scammers `, { type: "COMPETTING" })


});
client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong :ping_pong: \nMy Pings is " + client.ws.ping + "ms. Thats really fast! ")
  }

  else if (message.content === `<@${client.user.name}>` || message.content === `<@!${client.user.id}>`) {
    message.channel.send(`My Prefix? Here: ${prefix}`);
  }
  else if (message.content.startsWith(prefix + "help")) {
    message.channel.send({
      embed: {
        color: (message.guild.me.displayHexColor),
        title: `YourBotName - Help`,
        description: `!ping = My Ping!
       🍀 You can add more ^^ `,
        timestamp: new Date(),
        footer: {
          text: `${message.guild.name} | YourBot.com`
        }
      }
    })

  }

})

client.login(token);
