let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const brains = [
 'https://gist.githubusercontent.com/ryanstarkZ/5122b8976cda7e71dbf8f1cd1b6e87de/raw/41f2b674096189af802a659b2b0331922987063b/sample.rive'
];


bot.loadFile(brains).then(botReady).catch(botNotReady);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = '';
});

function botReply(message){
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = '#edge';
}

function selfReply(message){
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = '#edge';

  bot.reply("local-user", message).then(function(reply) {
    botReply(reply);
  });
}

function botReady(){
  bot.sortReplies();
  botReply('Heyy! \n NOTE:My Dataset\n i.e, "brain.rive" is not developed fully yet');
}

function botNotReady(err){
  console.log("An error has occurred.", err);
}
