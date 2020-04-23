const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    const categoryId = "702927382364815451";
	let onderwerp = arguments.join(" ");

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find("name", "@everyone"), { "READ_MESSAGES": false});

            settedParent.overwritePermissions(message.guild.roles.find("name", "Support"), {                
            
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                
            });

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });

            var createEmbed = new discord.RichEmbed()
                .setTitle("Hello, " + message.author.username)
                .setDescription(`You can say your quastion in <#${settedParent.id}>`)
    
            message.channel.send(createEmbed);
			
			 var embedParent2 = new discord.RichEmbed()
            .setTitle("Hello, " + message.author.username.toString())
            .setDescription(" Here is your ticket")
			.addField("Reason: ", `**No reason**`);
	if(!onderwerp) {
		settedParent.send(embedParent2);
		
	} else {

            var embedParent = new discord.RichEmbed()
            .setTitle("Hello, " + message.author.username.toString())
            .setDescription(" Here is your ticket")
			.addField("Reason: ", `**${onderwerp}**`);
        settedParent.send(embedParent); }



		
    }).catch(err => {
        message.channel.send("Er is iets fout gelopen.");
    });

}).catch(err => {
    message.channel.send("Er is iets fout gelopen.");
}); 


}

module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan"
}
