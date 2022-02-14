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
  
  name: "Status",
  description: "Ver os boosts ativos",
  
  
  
  execute: async (client, msg) => {
    
    
        //boosts
     let tesoura_nv = await db.fetch(`boost_Tesoura_${msg.author.id}`)
     let picareta_nv = await db.fetch(`boost_Picareta_${msg.author.id}`)
      
        //se o valor for 0.
      if (tesoura_nv === null) { 
        db.set(`boost_Tesoura_${msg.author.id}`, "Tesoura - **Nível 0**") }
      if (picareta_nv === null) {
        db.set(`boost_Picareta_${msg.author.id}`, "Picareta - **Nível 0**")}
      
    
    //infos boost
    
    let tesouraInfo = await db.fetch(`boost_Tesoura_${msg.author.id}_info`)
    let picaretaInfo = await db.fetch(`boost_Picareta_${msg.author.id}_info`)
    
    if (tesouraInfo === null) {
      db.set(`boost_Tesoura_${msg.author.id}_info`, "1.0x ao furtar")}
    if (picaretaInfo === null) {
      db.set(`boost_Picareta_${msg.author.id}_info`, "1.0x ao escavar")}

     const embedBoosts = new MessageEmbed()
     .setAuthor({
       name: `${msg.author.username}\n`,
       iconURL: `${msg.author.displayAvatarURL()}\n`
     })
     .setColor("#6D19DF")
     .setTitle("Impulsos comprados 🌀\n")
     .addFields({
       name: "Lista:",
       value: `>>> ${tesoura_nv}\n_${tesouraInfo}_\n\n${picareta_nv}\n_${picaretaInfo}_`
     })
     .setTimestamp()
     
     msg.channel.send({embeds: [embedBoosts]})


      
    
  }
  
}
