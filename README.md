# StudyWrapper
Uma aplicação MERN de notas com categorização. Permite a criação de notas separadas por categoria, divisões e assuntos.
</br>
<h2>Instalação das dependências</h2>
<p>Rode o comando "-npm install" dentro do diretório raiz.</p>
<p>Rode o comando "-npm install" dentro do diretório "/backend".</p>

<h2>Inicialização do backend</h2>
<p>
Esse projeto utiliza do MongoDB com mongoose. Sendo assim, para poder utiliza-lo será necessário uma chave para um cluster preexistente. 

Uma vez criado o cluster você pode criar um arquivo .env e linkar a URL de acesso fornecida à uma variável local em .env chamando-a de "ATLAS_URI".  
*Exemplo: "ATLAS_URI = ...chaveAPI"* 
Feito isso, inicie a aplicação, dentro do diretório /backend com : "nodemon server.js".
  Se tudo ocorreu bem, a mensagem : "MongoDB database foi conectado com sucesso" aparecerá no seu console.
  </p>
 <h2>Inicialização do frontend</h2>
  <p>No diretório raiz do projeto digite no terminal : "npm run dev". Se as dependencias estiverem corretamente instaladas, o NextJS proverá um host local na porta 3000.</p>
