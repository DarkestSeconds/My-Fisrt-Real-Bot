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

const escavar = new Set()

module.exports = {
  name: 'Escavar',
  description: 'Escavar calcinhas do arquipélago de Calcinhas',
  
  
  execute: async (client, msg, args, prefixo) => {
    let calCoinFosselE = db.fetch(`calCoinFosselE_${msg.author.id}`)
    let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
    let calCoinCB = db.fetch(`calCoinCB_${msg.author.id}`)
    if (calCoinCB === null) {
      db.add(`calCoinCB_${msg.author.id}`, 0)
    }
    
  
      
   
      let quantias1 = [0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 6, 6, 6, 8, 8, 12]

      let quantias2 = [0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 6, 6, 6, 8, 8, 12]
      
      let quantias3 = [0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 5, 6, 6, 7, 8, 8, 18]
      
      let quantias4 = [0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 6, 6, 6, 8, 8, 30]
      //valores que podem ser pegos (Calcinhas C)
      
      
      
      let quantiasF1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 7]

      let quantiasF2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 5, 2, 4, 3, 7, 8]
      
      let quantiasF3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 2, 2, 5, 3, 9]
      
      let quantiasF4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 2, 3, 3, 14]
      //valores que podem ser pegos (Calcinhas Fosseis)
      
      
      
      

      let quantiaGanha1 = Math.floor(Math.random() * quantias1.length);
      
      let quantiaGanha2 = Math.floor(Math.random() * quantias2.length);
      
      let quantiaGanha3 = Math.floor(Math.random() * quantias3.length);
      
      let quantiaGanha4 = Math.floor(Math.random() * quantias4.length);
      //calculo para pegar um dos valores no array (calcinhas C)
      
      
      
      let quantiaGanhaF1 = Math.floor(Math.random() * quantiasF1.length);
      
      let quantiaGanhaF2 = Math.floor(Math.random() * quantiasF2.length);
      
      let quantiaGanhaF3 = Math.floor(Math.random() * quantiasF3.length);
      
      let quantiaGanhaF4 = Math.floor(Math.random() * quantiasF4.length);
      //calculo para pegar um dos valores no array (calcinhas fosseis)    
      
  
  
      let quantia1 = quantias1[quantiaGanha1]
      
      let quantia2 = quantias2[quantiaGanha2]
      
      let quantia3 = quantias3[quantiaGanha3]
      
      let quantia4 = quantias4[quantiaGanha4]
       //quantia que será ganha (calcinhas c)
      
      
      let quantiaF1 = quantiasF1[quantiaGanhaF1]
      
      let quantiaF2 = quantiasF2[quantiaGanhaF2]
      
      let quantiaF3 = quantiasF3[quantiaGanhaF3]
      
      let quantiaF4 = quantiasF4[quantiaGanhaF4]
      //quantia que sera ganha (calcinhas Fosseis)
      
      //boost picareta
      
      let Picareta = db.fetch(`boost_Picareta_${msg.author.id}`)
      
      switch (Picareta) {
        case "Picareta - **Nível 1**": 
          //calcinhas comuns
          quantia1 = quantia1 * 1.3
          quantia2 = quantia2 * 1.3
          quantia3 = quantia3 * 1.3
          quantai4 = quantia4 * 1.3
          
          //calcinhas fosseis
          quantiaF1 = quantiaF1 * 1.3
          quantiaF2 = quantiaF2 * 1.3
          quantiaF3 = quantiaF3 * 1.3
          quantaiF4 = quantiaF4 * 1.3
          
          break;
        
        case "Picareta - **Nível 2**":
          //calcinhas comuns
          quantia1 = quantia1 * 1.6
          quantia2 = quantia2 * 1.6
          quantia3 = quantia3 * 1.6
          quantai4 = quantia4 * 1.6
          
          //calcinhas fosseis
          quantiaF1 = quantiaF1 * 1.6
          quantiaF2 = quantiaF2 * 1.6
          quantiaF3 = quantiaF3 * 1.6
          quantaiF4 = quantiaF4 * 1.6
          
          break;
          
        case "Picareta - **Nível 3**":
          //calcinhas comuns
          quantia1 = quantia1 * 1.9
          quantia2 = quantia2 * 1.9
          quantia3 = quantia3 * 1.9
          quantai4 = quantia4 * 1.9
          
          //calcinhas fosseis
          quantiaF1 = quantiaF1 * 1.9
          quantiaF2 = quantiaF2 * 1.9
          quantiaF3 = quantiaF3 * 1.9
          quantaiF4 = quantiaF4 * 1.9
        
      }
      
      
      
      
      
      //para falhar
      let chanceFalhar = quantiaGanha3
      
     
    

    //area 0
    if (args[0] === 'area' && args[1] === '0') {
      
      let embedEscavar = new MessageEmbed()
      .setColor("#754310")
      .setAuthor({
        name: "Escavando...",
        iconURL: `${msg.author.displayAvatarURL()}`
      })
      .setTitle("0%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: 0
Calcinhas Fósseis ***[E]**: 0
        `
      })
      .setTimestamp()
      
    let mensg = await msg.channel.send({embeds: [embedEscavar]})
      
      
      
      //edit 1
      const embedEnviada = mensg.embeds[0]
      
      let embedEscavar1 = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando....")
      .setTitle("25%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas * [C]: ${ quantia1.toFixed(2) }
Calcinhas Fósseis * [E]: ${ quantiaF1.toFixed(2) }
        `
      })
      .setTimestamp()
      
     setTimeout(() => {
        mensg.edit({ embeds: [embedEscavar1]
      })}, 1000 * 12)
      
      //edit 2
      
      let embedEscavar2 = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando.....")
      .setTitle(" 50%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas * [C]: ${ (quantia1 + quantia2).toFixed(2) }
Calcinhas Fósseis * [E]: ${ (quantiaF1 + quantiaF2).toFixed(2) }
        `
      })
      .setTimestamp()
      
     setTimeout(() => {
        mensg.edit({ embeds: [embedEscavar2]
      })}, 1000 * 24)
      
      
      //edit 3
      
      let embedEscavar3 = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando...")
      .setTitle(" 75%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: ${(quantia1 + quantia2 + quantia3).toFixed(2)}
Calcinhas Fósseis ***[E]**: ${ (quantiaF1 + quantiaF2 + quantiaF3).toFixed(2) }
        `
      })
      .setTimestamp()
      
     setTimeout(() => {
        mensg.edit({ embeds: [embedEscavar3]
      })}, 1000 * 36)
      
      
      //edit 4 (final)
      let embedEscavar4 = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando...")
      .setTitle("100% Concluído")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: ${(quantia1 + quantia2 + quantia3 + quantia4).toFixed(2)}
Calcinhas Fósseis ***[E]**: ${(quantiaF1 + quantiaF2 + quantiaF3 + quantiaF4).toFixed(2) }

_O Valor foi adicionado ao seu inventário_    
        `
      })
      .setTimestamp()
      
    setTimeout(() => {
        mensg.edit({ embeds: [embedEscavar4]
      })}, 1000 * 48)
      
      
      
      
      //caso falhar
      setTimeout(() => {
        
        if (chanceFalhar <= 10) {
        let embedEscavarFalha = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando... Ops!")
      .setTitle(" 0%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: ${(quantia1 + quantia2).toFixed(2)}
Calcinhas Fósseis ***[E]**: ${(quantiaF1).toFixed(2)}

Infelizmente enquanto você escavava, você acabou acertando uma calcinha explosiva! Você acabou perdendo alguns ganhos.
        `
      })
      .setTimestamp()
      
     mensg.edit({embeds: [embedEscavarFalha]})
     db.add(`calCoinC_${msg.author.id}`, quantia1 + quantia2)
      }
        
      }, 1001 * 48)
      
      
      
      
      let valorAddC = (quantia1 + quantia2 + quantia3 + quantia4).toFixed(2)
      let valorAddF = (quantiaF1 + quantiaF2 + quantiaF3 + quantiaF4).toFixed(2)
      
      setTimeout(() => {
        db.add(`calCoinC_${msg.author.id}`, valorAddC)
        db.add(`calCoinFosselE_${msg.author.id}`, valorAddF)
      }, 1000 * 49)
      
      
          }
          
     
     
     
     //area 1
    if (args[0] == 'area' && args[1] == 1) {
      
      if (calCoinCB < 700) {
         
      msg.reply("Você tem que ter no mínimo 700 calcinhas na gaveta para acessar essa área.")
      return
        
      }
      
      let embedEscavar = new MessageEmbed()
      .setColor("#754310")
      .setAuthor({
        name: "Escavando...",
        iconURL: `${msg.author.displayAvatarURL()}`
      })
      .setTitle(" 0%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: 0
Calcinhas Fósseis ***[E]**: 0
        `
      })
      .setTimestamp()
      
    let mensg = await msg.channel.send({embeds: [embedEscavar]})
      
      
      
      //edit 1
      const embedEnviada = mensg.embeds[0]
      
      let embedEscavar1 = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando....")
      .setTitle("25%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: ${ (quantia1 * 3).toFixed(2) }
Calcinhas Fósseis ***[E]**: ${ (quantiaF1 * 3).toFixed(2) }
        `
      })
      .setTimestamp()
      
     setTimeout(() => {
        mensg.edit({ embeds: [embedEscavar1]
      })}, 1000 * 12)
      
      //edit 2
      
      let embedEscavar2 = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando.....")
      .setTitle("50%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas * [C]: ${ ((quantia1 + quantia2) * 3).toFixed(2)}
Calcinhas Fósseis * [E]: ${ ((quantiaF1 + quantiaF2) * 3).toFixed(2)}
        `
      })
      .setTimestamp()
      
     setTimeout(() => {
        mensg.edit({ embeds: [embedEscavar2]
      })}, 1000 * 24)
      
      
      //edit 3
      
      let embedEscavar3 = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando...")
      .setTitle("75%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: ${ ((quantia1 + quantia2 + quantia3) * 3).toFixed(2) }
Calcinhas Fósseis ***[E]**: ${ ((quantiaF1 + quantiaF2 + quantiaF3) * 3).toFixed(2) }
        `
      })
      .setTimestamp()
      
     setTimeout(() => {
        mensg.edit({ embeds: [embedEscavar3]
      })}, 1000 * 36)
      
      
      //edit 4 (final)
      let embedEscavar4 = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando...")
      .setTitle("100% Concluído")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: ${ ((quantia1 + quantia2 + quantia3 + quantia4) * 3).toFixed(2) }
Calcinhas Fósseis ***[E]**: ${ ((quantiaF1 + quantiaF2 + quantiaF3 + quantiaF4) * 3).toFixed(2) }

_O Valor foi adicionado ao seu inventário_    
        `
      })
      .setTimestamp()
      
    setTimeout(() => {
        mensg.edit({ embeds: [embedEscavar4]
      })}, 1000 * 48)
      
      
      
      
      //caso falhar
      setTimeout(() => {
        
        if (chanceFalhar <= 6) {
        let embedEscavarFalha = new MessageEmbed(embedEnviada)
      .setColor("#754310")
      .setAuthor("Escavando... Ops!")
      .setTitle("0%")
      .setFields({
        name: 'Ganhos:',
        value: `
Calcinhas ***[C]**: ${ ((quantia1 + quantia2) * 3).toFixed(2) }
Calcinhas Fósseis ***[E]**: ${(quantiaF1 * 3).toFixed(2) }

Infelizmente enquanto você escavava, você acabou acertando uma calcinha explosiva! Você acabou perdendo alguns ganhos.
        `
      })
      .setTimestamp()
      
     mensg.edit({embeds: [embedEscavarFalha]})
     db.add(`calCoinC_${msg.author.id}`, (quantia1 + quantia2) * 3)
      }
        
      }, 1001 * 48)
      
      
      
      
      let valorAddC = ((quantia1 + quantia2 + quantia3 + quantia4) * 3).toFixed(2)
      let valorAddF = ((quantiaF1 + quantiaF2 + quantiaF3 + quantiaF4) * 3).toFixed(2)
      
      setTimeout(() => {
        db.add(`calCoinC_${msg.author.id}`, valorAddC)
        db.add(`calCoinFosselE_${msg.author.id}`, valorAddF)
      }, 1000 * 49)
      
      }
      
      
    
     
    
    }
  
    
    
  }


