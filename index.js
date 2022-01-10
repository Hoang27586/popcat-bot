const express = require("express");
const app = express()

app.listen(3000, () => { 
  console.log("Project is running!");
   })
  
 app.get("/", (req, res) => {
   res.send("Hello world!");
 })          

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS" , "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if(message.content === "sus") 
    message.channel.send("https://images-ext-1.discordapp.net/external/xpgys-6SvF078_-jrCipQV4Y2XCS-1BBgQ8AmXfAxAQ/https/genk.mediacdn.vn/k%3A2016/giphy-1469530769839/chadecuacakhucduoclayratrollnhieunhatlichsuinternetkiemduocbaotientuno.gif?width=333&height=243")
  if(message.content === "!help")
    message.channel.send("there is no help for now sadge")
  if(message.content === "no u")
    message.channel.send("https://media.discordapp.net/attachments/896940645468483638/930068534791385108/ultimate_no_u.gif?width=125&height=125")
  if(message.content === "idol")
    message.channel.send ("https://media.discordapp.net/attachments/905017467708010501/929368942965825546/IMG_8933.gif?width=217&height=217")
  if(message.content === "ping")
    message.channel.send("<@&906898410257395753> wake up noobs")
})

client.login(process.env.token)
