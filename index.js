//discord js
const pkg = require('discord.js')

const { Discord, Client, Intents, MessageEmbed} = pkg
const client = new Client({ 
  intents:
  [
    "GUILDS", 
  "GUILD_MESSAGES", 
  "DIRECT_MESSAGES",
  "GUILD_MESSAGE_REACTIONS"
  ] 
  
});

const express = require('express')

const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 


//minhas libs 
const test = require('./test')

    //banco (economy)
const addValor = require('./banco/addValor')
const removeValor = require('./banco/removeValor')
const pagar = require('./banco/pagar')

   //arquiologia (economy)
   
const arquiologia = require('./arquipelago/escavar')

const arquiologiaLavar = require('./arquipelago/lavagem')


   //textos
const textoR = require('./textos/contextoRoubo')
  
   //permissões


   //status e loja
const status = require('./status&loja/status')
const loja = require('./status&loja/loja')
const comprar = require('./status&loja/comprar')

   //crafting
const sintese = require('./crafting/sintese')
 
   // apostas
const apostas = require('./apostas/apostas')


//banco de dados
const allDBs = require('./allDBS') 
const db = require("quick.db")

//pretty ms
const ms = require("humanize-duration")

//cooldowns
const cooldownInvadir = new Set()

const cooldownInv = new Set()


//se estiver online, irá printar a mensagem no console.
client.on('ready', () => {
  console.log('Estou online, Mestre!');
});

//prefixo
const prefixo = "~";




//economy
client.on('messageCreate', async (msg) => {
  
  //carregar db 
  
  let entrada = db.fetch(`entrada_${msg.author.id}`)
  if (msg.content == prefixo + 'entrar') {
  
  if (entrada == 1) return
  
  
  const Cargo = await msg.guild.roles.cache.get("935714077550981202")
  
  msg.member.roles.add(Cargo.id)
 
  let carregando = await msg.channel.send({content: "Processando..."})

 setTimeout(() => {
   
   if (!msg.member.roles.cache.has("935714077550981202")) {
   carregando.edit({content: `Houve um erro ao adicionar o Cargo.`})
   }
   
   db.set(`entrada_${msg.author.id}`, 1)
   
   carregando.edit({content: "Você pode digitar os comandos agora. Bem vindo!"})
  allDBs.run(client, msg)
 
   
 }, 1000 * 5)
  
  
  }
  
  if (entrada == null) return
  
  //filtro
  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefixo)) return
  
/*  if (msg.content.startsWith(prefixo) && !msg.member.roles.cache.has("935714077550981202")) {
    
  perm.executeIntro(client, msg)
   return
  
   }*/
  
  
  
      //economy
  if (msg.content.startsWith(`${prefixo}inv`)) {
    let user = msg.mentions.users.first() || msg.author
    //calcinhas inventário
        //comum
    let calCoinC = db.fetch(`calCoinC_${user.id}`)
    
       //calcinhas especiais
    let calCoinOtakin = db.fetch(`calCoinSantidade_${user.id}`)
    let calCoinNero = db.fetch(`calCoinAnao_${user.id}`)
    let calCoinMetal = db.fetch(`calCoinEclipse_${user.id}`)
    
    
    //fossel
    let calCoinFosselE = db.fetch(`calCoinFosselE_${user.id}`)
    
    //calcinhas banco (não pode ser roubada)
    let calCoinCB = db.fetch(`calCoinCB_${user.id}`)
    
    //caso o valor for null, será definido como 0
    if (calCoinC === null) calCoinC  = 0
    if (calCoinOtakin === null) calCoinOtakin = 0
    if (calCoinNero === null) calCoinNero = 0
    if (calCoinCB === null) {
      db.set(`calCoinCB_${user.id}`, 0)
    }
    if (calCoinFosselE === null) calCoinFosselE = 0
    if (calCoinMetal === null) calCoinMetal = 0
    
    
    //Essências
    
    let EssenceAnao = db.fetch(`EssenceAnao_${user.id}`)
    
    let EssenceEclipse = db.fetch(`EssenceEclipse_${user.id}`)
    
    let EssenceSantidade = db.fetch(`EssenceSantidade_${user.id}`)
    
    
    //caso o valor for null, será definido como 0
    if (EssenceAnao === null) EssenceAnao = 0
    if (EssenceEclipse === null) EssenceEclipse = 0
    if (EssenceSantidade === null) EssenceSantidade = 0
    
    //embed inventário
    let embedInv = new MessageEmbed()
    .setColor('#800808')
    .setTitle(`${user.username}`)
    .setAuthor({
      name: `Inventario de:`,
      iconURL: `${user.displayAvatarURL()}`
    })
    .addFields({
      name: "Calcinhas comuns:",
      value: `${calCoinC}x <a:calcinha:934812876055674920> `,
      inline: false
    },
    {
      name: "Calcinhas Especiais 🌟: ",
      value: `
      
=> Otakinho: **${calCoinOtakin}x <a:calcinha:934812876055674920> *[A]**
=> Nero: **${calCoinNero}x <a:calcinha:934812876055674920> *[B]**
=> Metal: **${calCoinMetal}x <a:calcinha:934812876055674920> *[SS]**

≈>Calcinhas Fósseis 🏺: **${calCoinFosselE}x *[E]**
\u200b

`,
    inline: false
    },
    {
      name: "Essências 🧿:",
      value: `
=> Essência do Anão: ${EssenceAnao}x 🧔
=>  Essência do Eclipse: ${EssenceEclipse}x 🌑
=>  Essência da Santidade: ${EssenceSantidade}x 👼
      `,
      inline: false
    },
    {
      //espaço em branco
      name: "\u200b",
      value: "\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF"
    },
    {
      name: "Gaveta de calcinhas:",
      value: `${calCoinCB}x <:calcinhadovento:774322898675695647> *[C]`
    }
    )
    .setTimestamp()
    
    if (cooldownInv.has(msg.author.id)) {
      msg.reply('Espere alguns segundos para digitar o comando novamente.')
    } else {
    msg.channel.send({ content: `<@${msg.author.id}>`, embeds: [embedInv]})
    cooldownInv.add(msg.author.id)
    setTimeout(() => {cooldownInv.delete(msg.author.id)}, 5000)
  }
}
  
  
  
  
  if (msg.content === prefixo + 'furtar') {
    if (cooldownInvadir.has(msg.author.id)) {
      msg.reply(`**Espere alguns segundos**, meu caro jovem. Você está um pouco cansado.`)
     
    } else {

      
      
     let contextFRoub = textoR.contextosF
     let contextSRoub = textoR.contextosS
      
      //quantia que pode ser roubada
      let quantiaC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 8] //chances

      let quantiaGanha = Math.floor(Math.random() * quantiaC.length);
  
      let quantia = quantiaC[quantiaGanha] //quantia que será ganha
      //boosts
      let Tesoura = db.fetch(`boost_Tesoura_${msg.author.id}`)
      
      switch (Tesoura) {
        
        case "Tesoura - **Nível 1**":
          quantia = (quantia * 1.3).toFixed(2)
          
          break;
        
        case "Tesoura - **Nível 2**":
          quantia = (quantia * 1.6).toFixed(2)
          
          break;
          
        case "Tesoura - **Nível 3**":
          quantia = (quantia * 1.9).toFixed(2)
          
          break;
        
        
      }
      
      
      //embed de sucesso
      let embedDS = new MessageEmbed()
      .setTitle("Você tentou furtar!")
      .setAuthor({
        name: `${msg.author.username + ' #' + msg.author.discriminator}`,
        iconURL: `${msg.author.displayAvatarURL()}`})
      .setColor("RANDOM")
      .addFields({
        name:"Você furtou!", 
        value: `**${quantia}** <a:calcinha:934812876055674920> **Calcinha(s) comum!**`})
      .setDescription(contextSRoub[Math.floor(Math.random() * contextSRoub.length)])
      if (quantia > 0) {
        msg.reply({embeds: [embedDS] })
        db.add(`calCoinC_${msg.author.id}`, quantia)
      }
      
      //embed de falha
     let embedDF = new MessageEmbed()
      .setTitle("Você tentou furtar!")
      .setAuthor({
        name: `${msg.author.username + ' #' + msg.author.discriminator}`,
        iconURL: `${msg.author.displayAvatarURL()}`}
      )
      .addFields({
      name:"Você falhou em furtar as preciosas calcinhas...",
      value: `${quantia} <a:calcinha:934812876055674920>`})
      .setDescription(contextFRoub[Math.floor(Math.random() * contextFRoub.length)])
      .setColor("RED")
      if (quantia === 0) {
        msg.reply({embeds: [embedDF] })
      }
      
      //adicionar cooldown
    cooldownInvadir.add(msg.author.id)
    setTimeout(() => {cooldownInvadir.delete(msg.author.id)}, 1000 * 5)
    }
}






//roubar usuário (ainda economy)

   if (msg.content.startsWith(`${prefixo}roubar`) ) {
     
     //cooldown roubar
     let time = 30000
     let cooldown = db.fetch(`cd1_${msg.author.id}`);
     
     if (cooldown !== null && time - (Date.now() - cooldown) > 0) {
       const timeLeft = ms(time - (Date.now() - cooldown), {language: "pt", round: true})
        return msg.reply({content: `Calma aí! Você está cansado, meu jovem. Espere **${timeLeft}**` })
  }  else {
      //logica
      
      let user = msg.mentions.users.first()
      
        //caso não marcar ninguém
    if (!user) {
     return msg.channel.send('Você tem que mencionar o usuário que deseja roubar.')
    }
    
    //caso o usuário se marcar
    if (user.id === msg.author.id) {
      return msg.channel.send('Temos um psicótico aqui tentando se roubar... Marque outro usuário.')
    }
    
    
    let invPR = db.fetch(`calCoinC_${user.id}`)
    if (invPR < 10) {
      msg.reply('Esse usuário tem poucas calcinhas, não vale a pena ser roubado.')
      return
    }
    let invU = db.fetch(`calCoinC_${msg.author.id}`)
    
    let porcentagemR = 40
    
    let quantiaRoub = invPR * porcentagemR / 100
    
    let chanceRob = Math.random() * 11
    if (chanceRob <= 7) {
      //roubar o usuário falha.
      let embedRUF = new MessageEmbed()
      .setAuthor({
        name: `${msg.author.username + ' #' + msg.author.discriminator}`,
        iconURL: `${msg.author.displayAvatarURL()}`
      })
      .setColor("RED")
      .setTitle(`Você falhou em roubar o usuário: ${user.username}.`)
      .setThumbnail(`${user.displayAvatarURL({dynamic: true})}`)
      .setDescription(`${user.username} conseguiu impedir o roubo.`)
      
      msg.reply({ 
        embeds: [embedRUF]
    })
      
    } else {
      let embedRUS = new MessageEmbed()
      .setAuthor({
        name: `${msg.author.username + ' #' + msg.author.discriminator}`,
        iconURL: `${msg.author.displayAvatarURL()}`
      })
      .setColor("RANDOM")
      .setTitle("Boa!")
      .addFields({
        name: `Você roubou com sucesso!`,
        value: `O usuário ${user} acabou falhando em defender suas calcinhas.`
      },
      {
        name: `Lucro:`,
        value: `${quantiaRoub} <a:calcinha:934812876055674920> `
      }
      )
      .setThumbnail(`${user.displayAvatarURL()}`)
      db.subtract(`calCoinC_${user.id}`, quantiaRoub)
      db.add(`calCoinC_${msg.author.id}`, quantiaRoub)
      
      msg.reply({ embeds: [embedRUS]})
    }
      
      //adicionar cooldown no db
      db.set(`cd1_${msg.author.id}`, Date.now() );
      
  }
     
    
  }
  

    //gaveta (banco de calcinhas)
  const args = msg.content.slice(prefixo.length).trim().split(/ +/g);
  
  const cmd = args.shift().toLowerCase()
  
  if (cmd.length === 0) return
  
  if (cmd === 'guardar') {
    
    addValor.execute(client, msg, args)
    
    }
  
  if (cmd === 'retirar') {
    
    removeValor.execute(client, msg, args)
    
  }
  
  if (cmd == "pagar") {
    
    pagar.execute(client, msg, args)
    
  }
    
  
  
  
  
      //escavar & lavar (arqueologia de calcinhas)
  
  
  if (cmd === 'escavar' && args[0] == 'area' && args[1] >=0) {
    
    if (args[1] > 1) {
      return msg.channel.send(`A Área ${args[1]} ainda não existe.`)
    }
    
    
    let time = 30000 * 2
    let cooldown = db.fetch(`cdEscavar_${msg.author.id}`);
    
    if (cooldown !== null && time - (Date.now() - cooldown) > 0) {
      const timeLeft = ms(time - (Date.now() - cooldown), {language: "pt", round: true})
      return msg.reply({ content: `Calma aí! Você se cansou de tanto escavar. Descance por **${timeLeft}**` })
    } else {
    
    
    
    arquiologia.execute(client, msg, args, prefixo)
    

    let calCoinCB = db.fetch(`calCoinCB_${msg.author.id}`)
    if (args[1] == 1 && calCoinCB < 700 ) return

    db.set(`cdEscavar_${msg.author.id}`, Date.now() );
  }
  
  }
  
  
  if (cmd === 'lavar') {
    
    
    let time = 1000 * 10
    let cooldown = db.fetch(`cdLavar_${msg.author.id}`);
    
    if (cooldown !== null && time - (Date.now() - cooldown) > 0) {
      const timeLeft = ms(time - (Date.now() - cooldown), {language: "pt", round: true})
      return msg.reply({ content: `Calma aí! Suas mãos doem de tanto limpar. Descanse elas por **${timeLeft}**` })
    } else {
      
      
      
    arquiologiaLavar.execute(client, msg, args)
    
    let calCoinFosselE = db.fetch(`calCoinFosselE_${msg.author.id}`)
    
    if (calCoinFosselE < 30) return
    
    db.set(`cdLavar_${msg.author.id}`, Date.now() );
  }
  
  }
  
  
    //status e loja
  if (cmd == 'status') {
    status.execute(client, msg)
  }
  
  if (cmd == 'loja') {
    loja.execute(client, msg)
  }
  
  if (cmd == 'comprar') {
    if (msg.content === prefixo + 'comprar') return
    
    comprar.execute(client, msg, args)
  }
  
  
  
  //craftting
  
    //síntese
  if (cmd == 'sintetizar') {
    if (args[0] == 'nero' || args[0] == 'otakinho' || args[0] == 'metal' || args[0] == 'formulas' ) {
    
    sintese.execute(client, msg, args, prefixo)
    
    
    } else {
      msg.reply(`1Por favor, verique se o nome da síntese e quantidade dos itens estão corretos. Utilize: **${prefixo}sintetizar formulas**.`)
      return
    }
    

   
  }
  
  
  if (cmd == 'coinflip') {
    apostas.executeCF(client, msg, args)
  }
  
  
  
  //cmds de adm
  
  const admBot = "427525059511451658"
  
  if (cmd == 'add' && args[0] > 0 && msg.author.id == admBot) {
    db.add(`calCoinFosselE_${msg.author.id}`, args[0])
    msg.channel.send('Ping!')
  }

  if (msg.content === prefixo + 'test') {
    test.testei(msg)
  }
  if (cmd == 'tirar' && args[0] > 0 && msg.author.id == admBot ) {
    db.subtract(`calCoinC_${msg.author.id}`, args[0])
    msg.channel.send('Ping!')
  }
  
  if (cmd === 'us') {
  let usuRandom = msg.guild.members.cache.filter( a => a.roles.cache.has("781259955042123800")).random().user.username
  
  msg.channel.send(usuRandom)
  
  }
  

})


client.login(process.env['TOKEN'])




