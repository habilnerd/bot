const TelegramBot = require('node-telegram-bot-api');
const TOKEN = 1468902715:AAFQXb7PuFAkcJBWLx8bUq-O8dPvXEywejg;
const bot = new TelegramBot( TOKEN, { polling: true });
//Função 'Mensagem recebida'
bot.on('message', (msg) => {
const chatId = msg.chat.id;
bot.sendMessage(chatId, 'Mensagem recebida');
});
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
var result = 'App is running'
response.send(result);
}).listen(app.get('port'), function() {
console.log('App is running, server is listening on port ', app.get('port'));
});

