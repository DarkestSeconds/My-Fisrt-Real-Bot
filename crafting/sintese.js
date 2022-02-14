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
  name: "Síntese",
  description: "Fazer síntese de calcinhas normais e essências para poder conseguir calcinhas especiais.",
  
  
  
  execute: async (client, msg, args, prefixo) => {
    
    //bancos de dados
      //Calcinhas normais
    let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
    
    
      //essências
    let EssenceAnao = db.fetch(`EssenceAnao_${msg.author.id}`)
    
    let EssenceEclipse = db.fetch(`EssenceEclipse_${msg.author.id}`)
    
    let EssenceSantidade = db.fetch(`EssenceSantidade_${msg.author.id}`)
    
      //Calcinhas Especiais
    
    let calCoinAnao = db.fetch(`calCoinAnao_${msg.author.id}`)
    let calCoinSantidade = db.fetch(`calCoinSantidade_${msg.author.id}`)
    let calCoinEclipse = db.fetch(`calCoinEclipse_${msg.author.id}`)
    
  


    if (args[0] == 'formulas') {
      
      let embedFormula = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("__Fórmulas Especiais__")
      .setFields({
        name: "Calcinha do Nero 🧔",
        value: "> 📜 Fórmula **[B]**:\n```\n10.000 mil calcinhas comuns\n1200 Essências de Anão\n```"
      },
      {
        name: "Calcinha do Otakinho 🧝",
        value: "> 📜 Fórmula **[A]**:\n```\n25.000 mil calcinhas comuns\n3100 Essências da Santidade\n```"
      },
      {
        name: "Calcinha do Metal 🌑",
        value: "> 📜 Fórmula **[SS]**:\n```\n70.000 mil calcinhas comuns\n9500 Essências do Eclipse\n```"
      })
      .setTimestamp()
      
      msg.channel.send({embeds: [embedFormula]})
      return
    }
    
    

    
    
   
   if (args[0] == 'nero' && calCoinC < 10000 && EssenceAnao < 1200 || args[0] == 'otakinho' && calCoinC < 25000 && EssenceSantidade < 3100 || args[0] == 'metal' && calCoinC < 70000 && EssenceEclipse < 9500 ) {
     
    msg.reply(`2Por favor, verique se o nome da síntese e quantidade dos itens estão corretos. Utilize: ${prefixo}sintetizar formulas.`)
    return
    
   }
   
   
    //nero
    if (args[0] == 'nero' && calCoinC >= 10000 && EssenceAnao >= 1200) {
      
      
      let embedNero = new MessageEmbed()
      .setColor("#3DDECA")
      .setAuthor({
        name: `${msg.author.username}`,
        iconURL: `${msg.author.displayAvatarURL()}`
      })
      .setTitle('Síntese 🌪️ | Nero, o Anão da Montanha. ')
      .setFields({
        name: "Você está sintétizando...",
        value: "```\nProgresso: 0%\n```"
      })
      .setTimestamp()
      
      let mensagem = await msg.channel.send({content: `<@${msg.author.id}>`, embeds: [embedNero]})
      
      
      
      
      const embedEnviada = mensagem.embeds[0]





    let embedFalha = new MessageEmbed(embedEnviada)
      .setFields({
        name: "Sua síntese falhou!",
        value: "```\nProgresso: Error%\n```"
      },
      {
        name: "———————",
        value: "Parece que algumas das suas calcinhas sumiram durante a síntese."
      })    
        
        
        


      
    
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 10000 && EssenceAnao >= 1200) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 20%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha] })
  
        }
      }, 6000 )
      
      
      
     
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 10000 && EssenceAnao >= 1200) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 40%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha] })
  
        }
      }, 6000 * 2 )
      
      
      
    
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 10000 && EssenceAnao >= 1200) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 60%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha] })
  
        }
      }, 6000 * 3 )
    
      
      
      
      
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 10000 && EssenceAnao >= 1200) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 80%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha] })
  
        }
      }, 6000 * 4 )
      
      

     
      
      
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 10000 && EssenceAnao >= 1200) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você sintetizou!",
            value: "```\nProgresso: 100%\n```"
          },{
            name: "Adicionado ao inventário:",
            value: "```\nCalcinha do Nero 1x\n```"
          })] })
          
          db.subtract(`calCoinC_${msg.author.id}`, 10000)
          db.subtract(`EssenceAnao_${msg.author.id}`, 1200)
          db.add(`calCoinAnao_${msg.author.id}`, 1)
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha] })
  
        }
      }, 6000 * 5 )
      
   
    
    
    return
        

    
      
      
    
    
    
    }
      
    
    
    
    //otakinho
    if (args[0] == 'otakinho' && calCoinC >= 25000 && EssenceSantidade >= 3100) {
      
      
      let embedOtakin = new MessageEmbed()
      .setColor("#3DDECA")
      .setAuthor({
        name: `${msg.author.username}`,
        iconURL: `${msg.author.displayAvatarURL()}`
      })
      .setTitle('Síntese 🌪️ | Otakinho, a Santidade Pura.')
      .setFields({
        name: "Você está sintétizando...",
        value: "```\nProgresso: 0%\n```"
      })
      .setTimestamp()
      
      let mensagem = await msg.channel.send({content: `<@${msg.author.id}>`, embeds: [embedOtakin]})
      
      
      
      
      const embedEnviada = mensagem.embeds[0]

      
      
    let embedFalha2 = new MessageEmbed(embedEnviada)
        .setFields({
          name: "Sua síntese falhou!",
          value: "```\nProgresso: Error%\n```"
        },
        {
          name: "———————",
          value: "Parece que algumas das suas calcinhas sumiram durante a síntese."
        })
      
      
      
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 25000 && EssenceSantidade >= 3100) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 20%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha2] })
  
        }
      }, 6000 )
      
      
      
     
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 25000 && EssenceSantidade >= 3100) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 40%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha2] })
  
        }
      }, 6000 * 2 )
      
      
      
    
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 25000 && EssenceSantidade >= 3100) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 60%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha2] })
  
        }
      }, 6000 * 3 )
    
      
      
      
      
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 25000 && EssenceSantidade >= 3100) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 80%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha2] })
  
        }
      }, 6000 * 4 )
      
      

     
      
      
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 25000 && EssenceSantidade >= 3100) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você sintetizou!",
            value: "```\nProgresso: 100%\n```"
          },{
            name: "Adicionado ao inventário:",
            value: "```\nCalcinha do Otakinho 1x\n```"
          })] })
          
          db.subtract(`calCoinC_${msg.author.id}`, 25000)
          db.subtract(`EssenceSantidade_${msg.author.id}`, 3100)
          db.add(`calCoinSantidade_${msg.author.id}`, 1)
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha2] })
  
        }
      }, 6000 * 5 )
      
      
      
      
      return
      
      
      
      
    } 
    
    
    
    
    if (args[0] == 'metal' && calCoinC >= 70000 && EssenceEclipse >= 9500) {
      
      
      let embedMetal = new MessageEmbed()
      .setColor("#3DDECA")
      .setAuthor({
        name: `${msg.author.username}`,
        iconURL: `${msg.author.displayAvatarURL()}`
      })
      .setTitle('Síntese 🌪️ | Metal, a Entidade que se esconde atrás do Eclipse. ')
      .setFields({
        name: "Você está sintétizando...",
        value: "```\nProgresso: 0%\n```"
      })
      .setTimestamp()
      
      let mensagem = await msg.channel.send({content: `<@${msg.author.id}>`, embeds: [embedMetal]})
      
      
      
      
      const embedEnviada = mensagem.embeds[0]

      
    
    
    let embedFalha3 = new MessageEmbed(embedEnviada)
      .setFields({
        name: "Sua síntese falhou!",
        value: "```\nProgresso: Error%\n```"
      },
      {
        name: "———————",
        value: "Parece que algumas das suas calcinhas sumiram durante a síntese."
      })
    
     
      
      
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 70000 && EssenceEclipse >= 9500) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 20%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha3] })
  
        }
      }, 6000 )
      
      
      
     
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 70000 && EssenceEclipse >= 9500) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 40%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha3] })
  
        }
      }, 6000 * 2 )
      
      
      
    
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 70000 && EssenceEclipse >= 9500) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 60%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha3] })
  
        }
      }, 6000 * 3 )
    
      
      
      
      
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 70000 && EssenceEclipse >= 9500) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você está sintétizando...",
            value: "```\nProgresso: 80%\n```"
          })] })
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha3] })
  
        }
      }, 6000 * 4 )
      
      

     
      
      
      setTimeout(() => {
        let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
        if (calCoinC >= 70000 && EssenceEclipse >= 9500) {
          mensagem.edit({ embeds: [embedEnviada.setFields({
            name: "Você sintetizou!",
            value: "```\nProgresso: 100%\n```"
          },{
            name: "Adicionado ao inventário:",
            value: "```\nCalcinha do Metal 1x\n```"
          })] })
          
          db.subtract(`calCoinC_${msg.author.id}`, 70000)
          db.subtract(`EssenceEclipse_${msg.author.id}`, 9500)
          db.add(`calCoinMetal_${msg.author.id}`, 1)
        } else {
          mensagem.edit({ content: `<@${msg.author.id}>`, embeds: [embedFalha3] })
  
        }
      }, 6000 * 5 )
      
      
      
      
    
      
      
      
    } 
    
    
    
    
    
    
    
    
  }
  
  
  
  
}
