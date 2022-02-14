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
  
  name: "Comprar",
  description: "Comprar itens da loja.",
  
  
  
  
  execute: async (client, msg, args) => {
    
    let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
    
    
    //boosts
    let tesoura_nv = await db.fetch(`boost_Tesoura_${msg.author.id}`)
    let picareta_nv = await db.fetch(`boost_Picareta_${msg.author.id}`)
    
    
    
    
    switch (args[0]) {
      case "tesoura":
        
        if (args[1] >=4) return msg.reply("Erro na compra. Verifique o seu comando. ")
        
        if (args[1] == 1) {
          if (tesoura_nv == "Tesoura - **Nível 0**" ) {
            
            if (calCoinC < 500) {
              return msg.channel.send("Você não tem dinheiro suficiente.")
            }
            
            db.set(`boost_Tesoura_${msg.author.id}`, "Tesoura - **Nível 1**")
            db.set(`boost_Tesoura_${msg.author.id}_info`, "1.3x ao furtar")
            msg.reply("Comprou com sucesso.")
            
            db.subtract(`calCoinC_${msg.author.id}`, 500)
            
          } else {
            return msg.channel.send("Você não pode comprar isso.")
          }
          
        }
        
        if (args[1] == 2) {
          
          if (tesoura_nv == "Tesoura - **Nível 1**") {
          
          if (calCoinC < 1500) {
            return msg.channel.send("Você não tem dinheiro suficiente.")
          }
          
          db.set(`boost_Tesoura_${msg.author.id}`, "Tesoura - **Nível 2**")
          db.set(`boost_Tesoura_${msg.author.id}_info`, "1.6x ao furtar")
          msg.reply('Comprou com sucesso.')
          
          db.subtract(`calCoinC_${msg.author.id}`, 1500)
          
          } else {
            return msg.channel.send("Você não pode comprar isso.")
          }
        }
          
        if (args[1] == 3) {
          
          if (tesoura_nv == "Tesoura - **Nível 2**") {
          
          if (calCoinC < 4600) {
            return msg.channel.send("Você não tem dinheiro suficiente.")
          }
          
        db.set(`boost_Tesoura_${msg.author.id}`, "Tesoura - **Nível 3**")
        db.set(`boost_Tesoura_${msg.author.id}_info`, "1.9x ao furtar")
        msg.reply("Comprou com sucesso.")
        
        db.subtract(`calCoinC_${msg.author.id}`, 4600)
        
          } else {
            return msg.channel.send("Você não pode comprar isso.")
          }
        }
             break;
             
             
             
             
      case "picareta":
        
        if (args[1] >=4) return msg.reply("Erro na compra. Verifique o seu comando. ")
        
        if (args[1] == 1) {
          if (picareta_nv == "Picareta - **Nível 0**") {
            
            if (calCoinC < 800) {
              return msg.channel.send("Você não tem dinheiro suficiente.")
            }
            
            db.set(`boost_Picareta_${msg.author.id}`, "Picareta - **Nível 1**")
            db.set(`boost_Picareta_${msg.author.id}_info`, "1.3x ao escavar")
            msg.reply("Comprou com sucesso.")
            
            db.subtract(`calCoinC_${msg.author.id}`, 800)
            
          } else {
            return msg.channel.send("Você não pode comprar isso.")
          }
          
        }
        
        if (args[1] == 2) {
          
          if (picareta_nv == "Picareta - **Nível 1**") {
          
          if (calCoinC < 2400) {
            return msg.channel.send("Você não tem dinheiro suficiente.")
          }
          
          db.set(`boost_Picareta_${msg.author.id}`, "Picareta - **Nível 2**")
          db.set(`boost_Picareta_${msg.author.id}_info`, "1.6x ao escavar")
          msg.reply('Comprou com sucesso.')
          
          db.subtract(`calCoinC_${msg.author.id}`, 2400)
          
          } else {
            return msg.channel.send("Você não pode comprar isso.")
          }
        }
          
        if (args[1] == 3) {
          
          if (picareta_nv == "Picareta - **Nível 2**") {
          
          if (calCoinC < 7300) {
            return msg.channel.send("Você não tem dinheiro suficiente.")
          }
          
        db.set(`boost_Picareta_${msg.author.id}`, "Picareta - **Nível 3**")
        db.set(`boost_Picareta_${msg.author.id}_info`, "1.9x ao escavar")
        msg.reply("Comprou com sucesso.")
        
        db.subtract(`calCoinC_${msg.author.id}`, 7300)
        
          } else {
            return msg.channel.send("Você não pode comprar isso.")
          }
        }
              break;
        
        
        
        }
  
    }
  

  
  }
  
  
  

