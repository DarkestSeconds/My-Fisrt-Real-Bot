const pkg = require('discord.js')

const { Discord, Client, Intents, MessageEmbed, MessageButton} = pkg
const client = new Client({ 
  intents:
  [
    "GUILDS",
  "GUILD_MESSAGES", 
  "DIRECT_MESSAGES"
  ] 
  
});

const db = require('quick.db')

//const { pagination } = require('reconlx')
const { MessageButtonPages } = require("discord-button-page")

module.exports = {
  
  name: "Loja",
  description: "Uma loja com boosts para comprar.",
  
  
  
  
  execute: async (client, msg) => {
    
     let tesoura_nv = await db.fetch(`boost_Tesoura_${msg.author.id}`)
     let picareta_nv = await db.fetch(`boost_Picareta_${msg.author.id}`)
      
      
      if (tesoura_nv === null) { 
        db.set(`boost_Tesoura_${msg.author.id}`, "Tesoura - **Nível 0**") }
      if (picareta_nv === null) {
        db.set(`boost_Picareta_${msg.author.id}`, "Picareta - **Nível 0**")}
    
 
   
    
    
    let embedLoja1 = new MessageEmbed()
    .setAuthor({
      name: `${msg.author.username}`,
      iconURL: `${msg.author.displayAvatarURL()}`
    })
    .setTitle(`Loja Página 1 ❄️\n`)
    .setDescription("Compre boosts e impulsione os seus ganhos de calcinhas.")
    .addFields({
      name: ">>> 500 - Tesoura Nível 1 ✂️",
      value: "1.3x de boost ao furtar."
      
    },
    {
      name: ">>> 800 - Picareta Nível 1 ⛏️",
      value: "1.3x de boost ao escavar."
      
    }
    )
    .setFooter('Digite ~comprar [item] para comprar.\n')
    .setTimestamp()
    
    
    
    let embedLoja2 = new MessageEmbed()
    .setAuthor({
      name: `${msg.author.username}`,
      iconURL: `${msg.author.displayAvatarURL()}`
    })
    .setTitle(`Loja Página 2 ❄️\n`)
    .setDescription("Compre boosts e impulsione os seus ganhos de calcinhas.")
    .addFields({
      name: ">>> 1500 - Tesoura Nível 2 ✂️",
      value: "1.6x de boost ao furtar."
      
    },
    {
      name: ">>> 2400 - Picareta Nível 2 ⛏️",
      value: "1.6x de boost ao escavar."
      
    }
    )
    .setFooter('Digite ~comprar [item] para comprar.\n')
    .setTimestamp()
    
    
    
    let embedLoja3 = new MessageEmbed()
    .setAuthor({
      name: `${msg.author.username}`,
      iconURL: `${msg.author.displayAvatarURL()}`
    })
    .setTitle(`Loja Página 3 ❄️\n`)
    .setDescription("Compre boosts e impulsione os seus ganhos de calcinhas.")
    .addFields({
      name: ">>> 4600 - Tesoura Nível 3 ✂️",
      value: "1.9x de boost ao furtar."
      
    },
    {
      name: ">>> 7300 - Picareta Nível 3 ⛏️",
      value: "1.9x de boost ao escavar."
      
    }
    )
    .setFooter('Digite ~comprar [item] para comprar.\n')
    .setTimestamp()
    

    
    
    
    const pages = [embedLoja1, embedLoja2, embedLoja3]
    
    
    const pagination = new MessageButtonPages()
    .setEmbeds(pages)
    .setDuration(60000)
    .setLabelButton(["Anterior", "Fechar", "Próximo"])
    
    pagination.build(msg)
    
    
    
   /* pagination({
      channel: msg.channel,
      author: msg.author,
      embeds: embeds,
      time: 60000
    })*/
    
  }
  
}
