const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.17,
    username: 'Jabikminer_3'
})

let password = "jobir2009" // sizning parolingiz

bot.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
        bot.chat(`/register ${password} ${password}`)
    }
    
    if (message.includes("/login")) {
        bot.chat(`/login ${password}`)
    }
})

//  tegilmasin START
async function dig() {
  if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
    var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0];
    if (pickaxe) await bot.equip(pickaxe, 'hand')
    if(!pickaxe) bot.quit(); // TMP : QUIT IF NO PICKAXES.
  }
  var block = bot.blockAtCursor(4);
  if (!block) return setTimeout(function() {
    dig();
  }, 100);
  await bot.dig(block, 'ignore', 'raycast') // 2nd param: true to 'snap at block' or 'ignore' to just not turn head
  dig()
}





async function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}


 // END

bot.on('chat', (username, message) => {
    if (username == 'JabikJan' || username=='FamousTrain1733')  { // <== sizning parolingiz
        if (message == 'Jabikminer_3') { // <== buyruq istasangiz tegmang
            dig();
        }
    }
})

bot.on('chat',(username,message)=>{
  if (username == 'JabikJan'|| username == 'FamousTrain1733'){
    if (message === 'qara'){
    lookAtNearestPlayer()
}
}})
bot.on('chat',(username,message)=>{
  if (username == 'JabikJan'|| username == 'FamousTrain1733'){
    if (message === 'qarama'){
    bot.chat('xop')
}
}})

bot.on('chat',(username,message)=>{
  if(username == 'JabikJan'){
     if(message == 'oldimga3'){
	bot.chat('/tpa JabikJan')
}}else if(username == 'FamousTrain1733'){
    if (message == 'oldimga3'){
    bot.chat('/tpa FamousTrain1733')
}
}})

bot.on('chat',(message,username)=>{
  if (username == 'JabikJan'|| username == 'FamousTrain1733'){
    if (message === 'back'){
    bot.chat('/back')
}}})