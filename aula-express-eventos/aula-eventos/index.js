var events = require('events') 
var eventEmitter = new events.EventEmitter()

/// Criamos as funções que serão chamadas quando o evento acontecer
const correrParaOBanheiro =  () => {  
  console.log('correndo para o banheiro...');
};

const cagar = () => {  
  console.log('cagando...');
};

const pegarPapelHigienico =  () => { 
  console.log('pegando o papele higienico com calma e cuidado...');
};
const limparABunda = () => {  
  console.log('limpando o orifício anal para ficar macio e sedoso...');
};
const passarBomAr = () => {  
  console.log('passando Bom Ar para mascarar o fedor de gambá apodrecendo...');
};

// Ligamos o evento vontadeDeCagar com as funções
eventEmitter.on('vontadeDeCagar', correrParaOBanheiro);  
eventEmitter.on('vontadeDeCagar', cagar);  
eventEmitter.on('vontadeDeCagar', pegarPapelHigienico);  
eventEmitter.on('vontadeDeCagar', limparABunda);  
eventEmitter.on('vontadeDeCagar', passarBomAr);   

eventEmitter.emit('vontadeDeCagar');  
