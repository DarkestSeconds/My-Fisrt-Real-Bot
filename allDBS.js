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
  
  name: "DBs",
  description: "DBs que precisam ser gerados",
  
  
  
  run: async (client, msg) => {
    
    
   let gaveta = db.fetch(`calCoinCB_${msg.author.id}`)
    if (gaveta === null) {
      
      db.set(`calCoinCB_${msg.author.id}`, 0)
      
    }
    
    
    
    
   //boosts
    let tesoura_nv = db.fetch(`boost_Tesoura_${msg.author.id}`)
    let picareta_nv = db.fetch(`boost_Picareta_${msg.author.id}`)
      
     
      if (tesoura_nv === null) { 
        db.set(`boost_Tesoura_${msg.author.id}`, "Tesoura - **Nível 0**") }
      if (picareta_nv === null) {
        db.set(`boost_Picareta_${msg.author.id}`, "Picareta - **Nível 0**")}
      
    
       //infos boost
    
    let tesouraInfo =  db.fetch(`boost_Tesoura_${msg.author.id}_info`)
    let picaretaInfo = db.fetch(`boost_Picareta_${msg.author.id}_info`)
    
    if (tesouraInfo === null) {
      db.set(`boost_Tesoura_${msg.author.id}_info`, "1.0x ao furtar")}
    if (picaretaInfo === null) {
      db.set(`boost_Picareta_${msg.author.id}_info`, "1.0x ao escavar")}
    
    
  }
  
  
}
