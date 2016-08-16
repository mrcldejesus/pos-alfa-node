# pos-alfa-node
Aula da POS

1. Explique como um processo síncrono e assíncrono roda no Node.js,
dê um exemplo para cada.

  O processo sincrono é necessário terminar uma tarefa para começar outra.
  
  No processo assincrono pode ser feitos tarefas paralelamente e depois são chamadas por uma requisição, não tem interferência na execusão principal.
  
  Como exemplo podemos citar um chat, se o processo for sincrono você precisa conversar com uma pessoa e finalizar a conversar com a mesma para pode iniciar a conversa com outra, isso seria sincrono. 
  
  No processo assincrono podemos enviar mensagens para várias pessoas e aguardar que a pessoa nos responda.

2. Qual a diferença entre um sistema single para um multi-thread?

  No sistema single somente uma tarefa é executa por vez, apenas ao termino de uma é iniciado outra.
  No sistema multi-thread várias tarefas podem ser executas e são requisitadas assim que necessário.
  

3. Como você venderia o peixe do Node.js na sua empresa para tentar
convencer seu chefe da sua adoção?

  Relatando os seguintes itens:
  * Agilidade no processamento;
  * Facilidade na manutenção por rodar do lado do servidor;
  * Atualizações frequentes;
  * Utilizado por grandes empresas com sucesso como a Paypal.

