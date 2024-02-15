TELEGRAM_BOT_TOKEN = '6435212939:AAHj2c0fjUotMQJXdQ9VZpFS1rLFUWDx2Xk';
TELEGRAM_BOT_TOKEN = '6892429490:AAFprGX4IxVmyuFfjuvXu7eiZ9JZDJDD8j4';
const Telebot = require('telebot');
const bot = new Telebot(TELEGRAM_BOT_TOKEN);
const chatIds = [];
bot.on(['/start'], (msg) => {
    let chatId = msg.chat.id;
    if (!chatIds.includes(chatId)) {
        chatIds.push(chatId);
        msg.reply.text('Boshladik!');
    }
})
bot.on('text', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text.toLowerCase() === 'salom') {
    bot.sendMessage(chatId, 'assalomu alaykum');
  }
});
bot.on(['/stop'], (msg) => {
    let chatId = msg.chat.id;
    chatIds.pop(chatId);
})
bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === 'qalesiz') {
      bot.sendMessage(chatId, 'yaxshi rahmat, ozizchi');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === 'yaxshi rahmat') {
      bot.sendMessage(chatId, 'yaxshi boling-da');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === 'nima gaplar') {
      bot.sendMessage(chatId, 'tinchlikku');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === 'yomon') {
      bot.sendMessage(chatId, 'nimaga');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === 'ishlar qalay') {
      bot.sendMessage(chatId, "zo'r");
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === 'zerikdim') {
      bot.sendMessage(chatId, 'nimaga');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === 'yaxshimisan') {
      bot.sendMessage(chatId, 'yaxshi, ozizchi');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === "sog'indim") {
      bot.sendMessage(chatId, 'kimni?');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === "sogindim") {
      bot.sendMessage(chatId, 'kimni?');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === "kot") {
      bot.sendMessage(chatId, 'ozin shunaqa');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === "sevaman") {
      bot.sendMessage(chatId, 'kimni?');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === "asabimga tegma") {
      bot.sendMessage(chatId, 'xoxlasam');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === "tur yoqol") {
      bot.sendMessage(chatId, 'san yozyabsan man javob yozyabmanku');
    }
  });
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === "man sani sevaman") {
      bot.sendMessage(chatId, "man og'il bolaman");
    }
  });
  
  bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toLowerCase() === "hello") {
      bot.sendMessage(chatId, 'Hi,how are you');
    }
  });
bot.start();
