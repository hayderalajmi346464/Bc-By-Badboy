const express = require("express");
const app = express();

app.listen(() => console.log("brodcast bot by badboy"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

const prefix = "-"
const developers = "ايديك"

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "bc")){

    var args = badboy.content.split(" ").slice(1).join(" ")
    if(!args) return badboy.channel.send("تستهبل اكتب الرسالة!!!")
    if(!badboy.member.hasPermission("ADMINISTRATOR")) return badboy.channel.send(":x:")
var embed = new Discord.RichEmbed()
.setTimestamp()
.setAuthor(`${badboy.author.username}`)
.setDescription(`اضغط على ✅ لارسال البرودكاست
اضغط على ❌ لالغاء البرودكاست
`)

badboy.channel.send(embed).then(async badboy1 => {
    await  badboy1.react("✅")
        badboy1.react("❌")

          const filter = (reaction, user) =>
        reaction.emoji.name === '✅' && user.id === badboy.author.id;
        const filter1 = (reaction, user) =>
        reaction.emoji.name === '❌' && user.id === badboy.author.id;
 const yes = badboy1.createReactionCollector(filter, {time: 300000})
        const no = badboy1.createReactionCollector(filter1, {time: 300000})

yes.on('collect', brah => {
  badboy.channel.send("`done`")
badboy1.delete()
  badboy.delete()
                      badboy.guild.members.forEach(member => {
member.send(`${args}`)
if(badboy.author.bot) return 
            })
})
no.on('collect', brahhhhhhhhh => {
  badboy1.delete()
badboy.channel.send("تم الالغاء")
badboy.delete()

})

})
  }
})

client.login(process.env.token);
