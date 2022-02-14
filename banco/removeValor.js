const pkg = require('discord.js')

const { Discord, Client, Intents, MessageEmbed} = pkg
const client = new Client({ 
  intents:
  [
    "GUILDS",
  "GUILD_MESSAGES", 
  "DIRECT_MESSAGES"
  ] 
  
});

const db = require('quick.db')


module.exports = {
  name: "remove valor",
  description: "Remover um valor do inventário ao banco.",
  
  
  execute: async (client, msg, args, prefixo) => {
    
    let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
    
    let calCoinCB = db.fetch(`calCoinCB_${msg.author.id}`)
    
    let argsNumb = parseInt(args[0])
    
    if (typeof argsNumb !== 'number' || args[0] != 'tudo') {
     return msg.channel.send('Digite um valor válido.')
    }
    
    if (msg.content === prefixo + 'retirar') {
   return msg.channel.send("Você tem que informar um valor.")
    }
    
    
    if (calCoinCB >= args[0] || args[0] == 'tudo') {
      
      if (args[0] == 'tudo') {
        db.add(`calCoinC_${msg.author.id}`, calCoinCB)
      db.subtract(`calCoinCB_${msg.author.id}`, calCoinCB)
      msg.channel.send(`<@${msg.author.id}>, você retirou ${calCoinCB} calcinhas ***[C]** com sucesso.`)
      return
      }
      
  db.add(`calCoinC_${msg.author.id}`, args[0])
  db.subtract(`calCoinCB_${msg.author.id}`, args[0])
  msg.channel.send(`<@${msg.author.id}>, você retirou ${args[0]} calcinhas ***[C]** com sucesso.`)
    
  } else {
    msg.reply('Por favor, digite um valor válido de acordo.')
  }
  
}
}
