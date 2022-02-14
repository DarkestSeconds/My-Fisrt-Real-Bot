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
  
  name: "pagar",
  description: "transferir calcinhas comuns para outros usuários",
  
  
  
  execute: async (client, msg, args) => {
    
    let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
    
    
    let usuario = msg.mentions.users.first()
    
    if (!usuario || !args[0] == usuario) {
     return msg.channel.send('Você tem que mencionar o usuário que deseja transferir as calcinhas.')
    }
    
    
    if (args[1] > calCoinC) {
      
     msg.reply("Você não tem essa quantia de calcinhas comuns.")
     return
      
    } else {
      
      await msg.channel.send(`Foi retirado **${args[1]}** calcinhas comuns do seu inventário e transferido com sucesso para **${usuario.username}**.`)
      
      db.subtract(`calCoinC_${msg.author.id}`, args[1])
      db.add(`calCoinC_${usuario.id}`, args[1])
    }
    
    
    
    
    
  }
  
}
