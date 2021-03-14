const { Telegraf } = require('telegraf')

const bot = new Telegraf('1500263529:AAEtgOpmMVeKcyISTIFCJvWkEgZ5TWNMO7E')

bot.start((ctx) => {
    ctx.reply('Welcome Perro ' + ctx.from.first_name + ' ' + ctx.from.last_name);
    console.log(ctx.from);
    console.log(ctx.chat);
    console.log(ctx.message);
    console.log(ctx.updateType);

});

bot.help((ctx) => {
    ctx.reply('Help!!');
});

bot.settings((ctx) => {
    ctx.reply('Settings');
});


bot.command('mycommand', (ctx) => {
    ctx.reply('My custom command !!!')
})

bot.hears('computer', ctx => {
    ctx.reply('Hey I am selling computer');
})

//bot.on('text', ctx => {
  //  ctx.reply('Estas texteando')
//})

bot.on('sticker', ctx => {
    ctx.reply('Que bonito sticker')
})

bot.mention('dev', (ctx) => {
    ctx.reply('A mi tambien me gusta programar.');
})


bot.launch();