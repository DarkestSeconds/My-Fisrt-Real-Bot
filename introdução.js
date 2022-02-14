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

module.exports = {
  
  name: "introdução",
  description: "Introdução ao bot",
  
  
  
  execute: async (client, msg) => {
    
    if (msg.member.roles.cache.has('935714077550981202')) return
    
    let embedIntro = new MessageEmbed()
    .setAuthor({
      name: `${msg.author.username}`
    })
    .setTitle("Bem-vindo à uma vida cheia de... calcinhas!")
    .setThumbnail(`${msg.author.displayAvatarURL()}`)
    .setDescription("Você pode digitar os comandos agora.")
    .setTimestamp()
    
    const cargo = interaction.options.getRole('935714077550981202');
    const membro = interaction.options.getMember(msg.author.id);
    
    membro.roles.add(cargo);
    
    msg.channel.send({
      content: `<@${msg.author.id}>`,
      embeds: [embedIntro]
    })
    
  }
  
  
  
  
}
