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
  name: 'lavagem de calcinhas', 
  description: 'lavar calcinhas fosseis para ter chances de ganhar essencias',


  execute: async (client, msg, args) => { 
  
  //Calcinhas fosseis & Calcinhas C
  
  let calCoinFosselE = db.fetch(`calCoinFosselE_${msg.author.id}`)
  
        if (calCoinFosselE < 30) {
          return msg.channel.send("Você não tem fósseis suficientes. Minimo: 30.")
        }
  
  let calCoinC = db.fetch(`calCoinC_${msg.author.id}`)
  
  
  //essências
  
  let EssenceAnao = db.fetch(`EssenceAnao_${msg.author.id}`)
  
  let EssenceSantidade = db.fetch(`EssenceSantidade_${msg.author.id}`)
  
  let EssenceEclipse = db.fetch(`EssenceEclipse_${msg.author.id}`)
  

  //cálculo para ganhar essências e calcinhas C
        //vai pegar um número de 10 ate 39
  let porcentagem = Math.floor(Math.random() * -30) + 40

       //vai pegar o valor de calCoinF e salvar uma parte dele na variável (%)
  let Calculado1 = (calCoinFosselE * porcentagem) / 100
  
  
        //valor de calcinhas ganhas e essências
  let CalculadoCal = parseInt((Calculado1 * 1.5))

  let CalculadoEssenceAnao = parseInt((Calculado1 / 3))
  
  let CalculadoEssenceSantidade = parseInt((Calculado1 / 7))
  
  let CalculadoEssenceEclipse = parseInt((Calculado1 / 12))
  
      // roleta para ganhar essências (se cair 1, ganha)
//  const chancesEssence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7 ]

//test
const chancesEssence = [0, 1, 2, 3, 4, 5, 6, 7]


//1 = anão, 2 = santidade, 3 = eclipse.
// 4 = anão + santidade, 5 = anão + eclipse, e o 6 = santidade + eclipse, 7 = anao + santidade + eclipse


  let roletaEssence = Math.floor(Math.random() * chancesEssence.length)

  let numeroPego = chancesEssence[roletaEssence]
  
  
  

  
 
 //embeds
 
     //embed para caso não ganhar essencias
  let embedLav = new MessageEmbed()
  .setColor("#FF56C1")
  .setAuthor({
    name: `${msg.author.username}`,
    iconURL: `${msg.author.displayAvatarURL()}`
  })
  .setAuthor({name:"Lavanderia 🧼"})
  .setTitle(
    "Você limpou seus fósseis.\n\n" +
    "≈> Resultados ⤵️\n"
    )
  .setFields({
  name: "Calcinhas *[C]:",
  value: `**${CalculadoCal}**`
},
{
  name: "Essências:",
  value: `**Nenhuma**`
})
  .setTimestamp()





let mensg = await msg.channel.send({embeds: [embedLav]})
    db.add(`calCoinC_${msg.author.id}`, CalculadoCal)
    
 
 const embedEnviada = mensg.embeds[0]
   
   
   //embeds que tem essência
     
        
  switch (numeroPego) {
    case 1:
      //anao
        let embedEditAnao = new MessageEmbed(embedEnviada)
     .setFields({
      name: "Calcinhas *[C]:",
      value: `**${CalculadoCal}**`
     },
    {
       name: "Essências:",
       value: `Essência do Anão: **${CalculadoEssenceAnao}x**`
     })
    
    
      mensg.edit({embeds: [embedEditAnao]})
      
      db.add(`EssenceAnao_${msg.author.id}`, CalculadoEssenceAnao)
      
      
      break;
    
    case 2:
      //santidade
        let embedEditSantidade = new   MessageEmbed(embedEnviada)
    .setFields({
      name: "Calcinhas *[C]:",
      value: `**${CalculadoCal}**`
    },
     {
      name: "Essências:",
      value: `Essência da Santidade: **${CalculadoEssenceSantidade}x**`
     })
    
    
      mensg.edit({embeds: [embedEditSantidade]})
      db.add(`EssenceSantidade_${msg.author.id}`, CalculadoEssenceSantidade)
      break;
    
    case 3:
      //eclipse
        let embedEditEclipse = new MessageEmbed(embedEnviada)
     .setFields({
       name: "Calcinhas *[C]:",
       value: `**${CalculadoCal}**`
     },
     {
       name: "Essências:",
       value: `Essência do Eclipse: **${CalculadoEssenceEclipse}x**`
   })
    
    
      mensg.edit({embeds: [embedEditEclipse]})
      
      db.add(`EssenceEclipse_${msg.author.id}`, CalculadoEssenceEclipse)
      
      break;
    
    case 4:
      //anão + santidade
        let embedEditAnaoSantidade = new MessageEmbed(embedEnviada)
      .setFields({
        name: "Calcinhas *[C]:",
        value: `**${CalculadoCal}x**`
      },
      {
        name: "Essências:",
        value: `
Essência do Anão: **${CalculadoEssenceAnao}x**
Essência da Santidade: **${CalculadoEssenceSantidade}x** `
      })
  
  
    mensg.edit({ embeds: [embedEditAnaoSantidade] })
    
    db.add(`EssenceAnao_${msg.author.id}`, CalculadoEssenceAnao)
    
    db.add(`EssenceSantidade_${msg.author.id}`, CalculadoEssenceSantidade)
    
      break;
    
    case 5:
      //anao + eclipse
      let embedEditAnaoEclipse = new MessageEmbed(embedEnviada)
      .setFields({
        name: "Calcinhas *[C]:",
        value: `**${CalculadoCal}x**`
      },
      {
        name: "Essências:",
        value: `
Essência do Anão: **${CalculadoEssenceAnao}x**
Essência do Eclipse: **${CalculadoEssenceEclipse}x** `
      })
  
  
      mensg.edit({ embeds: [embedEditAnaoEclipse] })
      
      db.add(`EssenceAnao_${msg.author.id}`, CalculadoEssenceAnao)
      
      db.add(`EssenceEclipse_${msg.author.id}`, CalculadoEssenceEclipse)
      
      break;
      
    case 6:
      //santidade + eclipse
        let embedEditSantidadeEclipse = new MessageEmbed(embedEnviada)
        .setFields({
          name: "Calcinhas *[C]:",
          value: `**${CalculadoCal}x**`
        },
        {
          name: "Essências:",
          value: `
Essência da Santidade: **${CalculadoEssenceSantidade}x**
Essência do Eclipse: **${CalculadoEssenceEclipse}x** `
          })
        
        
      mensg.edit({ embeds: [embedEditSantidadeEclipse] })
      
      db.add(`EssenceSantidade_${msg.author.id}`, CalculadoEssenceSantidade)
      
      db.add(`EssenceEclipse_${msg.author.id}`, CalculadoEssenceEclipse)
      
      break;
    
    case 7:
      let embedEditAnaoSantidadeEclipse = new MessageEmbed(embedEnviada)
        .setFields({
          name: "Calcinhas *[C]:",
          value: `**${CalculadoCal}x**`
        },
        {
          name: "Essências:",
          value: `
Essência do Anão: **${CalculadoEssenceAnao}x**
Essência da Santidade: **${CalculadoEssenceSantidade}x**
Essência do Eclipse: **${CalculadoEssenceEclipse}x** `
        })
      
      
      mensg.edit({ embeds: [embedEditAnaoSantidadeEclipse] })
      
      db.add(`EssenceAnao_${msg.author.id}`, CalculadoEssenceAnao)
      
      db.add(`EssenceSantidade_${msg.author.id}`, CalculadoEssenceSantidade)
      
      db.add(`EssenceEclipse_${msg.author.id}`, CalculadoEssenceEclipse)
      
      break;
  }
  
  db.subtract(`calCoinFosselE_${msg.author.id}`, calCoinFosselE)
        
        
        
        
  
}}
