# StudyWrapper
Uma aplicação MERN de notas com categorização. Permite a criação de notas separadas por categoria, divisões e assuntos.

#Instalando as dependencias
Rode o comando "npm i" tanto dentro do diretório raiz quanto de '/backend';

#Inicialização do backend
  Esse projeto utiliza do MongoDB com mongoose. Sendo assim, para poder utiliza-lo será necessário uma chave para um cluster preexistente. Uma vez criado o cluster
    você pode criar um arquivo .env e linkar a URL de acesso fornecida à variavél local ATLAS_URI. 
    Feito isso, inicie a aplicação, dentro do diretório /backend com : "nodemon server.js".
  Se tudo ocorreu bem, a mensagem : "MongoDB database foi conectado com sucesso" aparecerá no seu console.
  
  
 #Inicialização do frontend
  No diretório raiz do projeto digite no terminal : "npm run dev". Se as dependencias estiverem corretamente instaladas, o NextJS proverá um host local na porta 3000.
