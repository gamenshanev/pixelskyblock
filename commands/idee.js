const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Vang het idee op.
    var idee = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!idee) return message.channel.send("Error: you need to type an idea");
 
    // Maak het embed aan.
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("New Idea")
        .setColor("#00FF00")
        .addField("Idea: ", idee)
        .addField("from: ", message.author);

    message.channel.send(message.author + " Your idea can you see on the 〖💡〗suggestions channel :white_check_mark:")
 
    // Vind het kanaal.
    var ideeChannel = message.guild.channels.find(`name`, "〖💡〗suggestions");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
 
    // Einde.
 
}
 
module.exports.help = {
    name: "idea",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
}
