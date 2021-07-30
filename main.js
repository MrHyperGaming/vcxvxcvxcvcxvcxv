const client = require('discord-rich-presence')('870691968387285002');
client.updatePresence({
  details: "First line",
  state: "Second line",
  largeImageKey: 'largeimage',
  largeImageText: "Large Image Hover Text",
  smallImageKey: 'smallimage',
  smallImageText: "Small Image Hover Text",
  instance: true,
});
