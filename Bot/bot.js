import { Telegraf } from 'telegraf';

const token = "6924110077:AAEopvY46Tp2rs74G8q0nBdE5E3ovAYSQQc";
const bot = new Telegraf(token);
const webLink = 'https://ethiocollection.netlify.app/';

bot.start((ctx) => {
    ctx.reply('Welcome to Ethio Collection', {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Ethio Collection",
                        web_app: { url: webLink }
                    }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.launch();
