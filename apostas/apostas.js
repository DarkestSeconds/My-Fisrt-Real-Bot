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
  
  name: "apostas",
  description: "Apostas, como coinflip",
  
  
  
  
  executeCF: async (client, msg, args) => {
     
     //calcinhas normais
    let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
    
    
    
    
    const dobro = [0, 1]
    const triplo = [0, 1, 2]
    
    let dobroSorteio = parseInt(Math.floor(Math.random() * dobro.length))
    let triploSorteio = parseInt(Math.floor(Math.random() * triplo.length))
    
    let dobroFlip = dobro[dobroSorteio]
    let triploFlip = triplo[triploSorteio]
    
    
    
    let embedDobro = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor({
      name: `${msg.author.username}`,
      iconURL: `${msg.author.displayAvatarURL()}`
      
    })
    .setTitle("\nPanties Flip <a:calcinha:934812876055674920> \n\n\n")
    .setFields({
      name: "Você escolhou Dobrar!",
      value: "```\nLançando! | Cara | \n```"
    })
    .setTimestamp()
    
    
    let embedTriplo = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor({
      name: `${msg.author.username}`,
      iconURL: `${msg.author.displayAvatarURL()}`
      
    })
    .setTitle("Panties Flip <a:calcinha:934812876055674920> \n\n\n")
    .setFields({
      name: "Você escolhou Triplicar!",
      value: "```\n Lançando! | Cara | \n```"
    })
    .setTimestamp()
    
    
    
    
    
    if (calCoinC < 100) {
      return msg.reply("Você não tem calcinhas suficientes. Mínimo de 100 calcinhas ***[C]** ")
    }
    
    
    
    
    if (args[1] > calCoinC) {
      
      return msg.reply("A quantia indicada é mais do que você possui.")
      
    } else if (args[1] <= calCoinC && args[0] == 'dobro') {
      
      let mensagem = await msg.channel.send({
        embeds: [embedDobro]
      })
      
      embedEnviada = mensagem.embeds[0]
      
      let contador = 0
      
      if (args[2] == 'cara' && dobroFlip == 0) {
           //se ganhar Cara
      let editsCaraG = setInterval(() => {
        if (contador < 11) {
          
        setTimeout(() => {
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Coroa | \n```"
          })]})
        }, 1200) 
        
          contador += 1;
        }
        
        
        
        if (contador < 11) {
          setTimeout(() => {
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Cara | \n```"
          })]})
        }, 2200) 
 
          contador += 1;
        }
        
        setTimeout(() => {
          if (contador > 10) {
          clearInterval(editsCaraG)
          
          let quantiaG = (args[1] * 2).toFixed(1)
          
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Cara | \n```"
          },
          {
            name: "\n\n\nVocê ganhou!",
            value: `_${quantiaG}x calcinhas ***[C]**_`
          })]})
          
          db.add(`calCoinC_${msg.author.id}`, quantiaG)
        }
        }, 2250)
        
        
      }, 2300)
      
    } else if (args[2] == 'cara' && dobroFlip > 0) {
      
      let editsCaraP = setInterval(() => {
      
       if (contador < 11) {
          setTimeout(() => {
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Cara | \n```"
          })]})
        }, 1200) 
 
          contador += 1;
        }
      
      
      if (contador < 11) {
          
        setTimeout(() => {
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Coroa | \n```"
          })]})
        }, 2200) 
        
          contador += 1;
        }
        
        setTimeout(() => {
          if (contador > 10) {
          clearInterval(editsCaraP)
          
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Coroa | \n```"
          },
          {
            name: "\n\n\nVocê perdeu!",
            value: `_${args[1]}x calcinhas ***[C]**_`
          })]})
          
          db.subtract(`calCoinC_${msg.author.id}`, args[1])
        }
        }, 2250)
        
        
      
    }, 2300)
      
    }
    
    
  
    
    //coroa
    
    
    
    if (args[2] == 'coroa' && dobroFlip == 0) {
           //se ganhar coroa
      let editsCoroaG = setInterval(() => {
        if (contador < 11) {
          
        setTimeout(() => {
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Cara | \n```"
          })]})
        }, 1200) 
        
          contador += 1;
        }
        
        
        
        if (contador < 11) {
          setTimeout(() => {
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Coroa | \n```"
          })]})
        }, 2200) 
 
          contador += 1;
        }
        
        setTimeout(() => {
          if (contador > 10) {
          clearInterval(editsCoroaG)
          
          let quantiaG = (args[1] * 2).toFixed(1)
          
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Coroa | \n```"
          },
          {
            name: "\n\n\nVocê ganhou!",
            value: `_${quantiaG}x calcinhas ***[C]**_`
          })]})
          
          db.add(`calCoinC_${msg.author.id}`, quantiaG)
        }
        }, 2250)
        
        
      }, 2300)
      
    } else if (args[2] == 'coroa' && dobroFlip > 0) {
      // se perder
      let editsCaraP = setInterval(() => {
      
       if (contador < 11) {
          setTimeout(() => {
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Coroa | \n```"
          })]})
        }, 1200) 
 
          contador += 1;
        }
      
      
      if (contador < 11) {
          
        setTimeout(() => {
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Cara | \n```"
          })]})
        }, 2200) 
        
          contador += 1;
        }
        
        setTimeout(() => {
          if (contador > 10) {
          clearInterval(editsCaraP)
          
          mensagem.edit({embeds: [embedEnviada.setFields({
            name: "Você escolhou Dobrar!",
            value: "```\nLançando! | Cara | \n```"
          },
          {
            name: "\n\n\nVocê perdeu!",
            value: `_${args[1]}x calcinhas ***[C]**_`
          })]})
          
          db.subtract(`calCoinC_${msg.author.id}`, args[1])
        }
        }, 2250)
        
        
      
    }, 2300)
      
    } 
    
    
    
    
    
    } //termina aqui o dobro
    
    
    
    
    
    
    
  }
  
  
}
