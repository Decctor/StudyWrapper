# StudyWrapper
Uma aplicação MERN de notas com categorização. Permite a criação de notas separadas por categoria, divisões e assuntos.

## Visual da aplicação
| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
| <img width="1604" src="https://user-images.githubusercontent.com/60222823/163869055-37b2c25c-0f2a-4e4a-9733-af6ee2777f00.png"/> Homepage | <img width="1604" src="https://user-images.githubusercontent.com/60222823/163869407-634140bb-e8cd-479a-9486-babe77f8efa1.png"/> Dentro de uma divisão | 
| <img width="1604" src="https://user-images.githubusercontent.com/60222823/163869676-1e39a33a-5e07-4ea5-bcfc-40c3a8dfeaaf.png"/> Dentro de uma subdivisão/tópico | <img width="1604" src="https://user-images.githubusercontent.com/60222823/163869837-a7edab39-e329-4850-b909-2fb13e7dd782.png" /> Criando uma divisão |

| |
|:-------------------------:|
| <img width="1604" src="https://user-images.githubusercontent.com/60222823/163870006-992a60d4-d7da-4cce-bf02-d75b8ebfed1d.png" /> Alterando/excluindo uma divisão |




## Instalação das dependências
No diretório raiz rode o comando ``npm install`` para instalar dependências relacionadas ao frontend.

Acesse ``cd backend`` e rode ``npm install`` para instalar depedências relacionadas ao backend.


## Inicialização do backend

Esse projeto faz uso do MongoDB com a biblioteca mongoose. 

Sendo assim, para uma experiência completa você pode criar um projeto e um cluster gratuitamente na plataforma MongoDB Atlas. Uma vez criado o cluster, clique na opção _Connect_ e em seguida _Connect your application_. Será lhe oferecida uma chave de coneção. Nesse projeto, a chave trará maior compatibilidade se usada numa variável **ATLAS_URI** num arquivo _.env_ dentro do diretório _backend_.

Feitas as devidas alterações, inicie a aplicação, dentro do diretório /backend com : ``nodemon server.js``.

Se tudo ocorreu bem, a mensagem : _MongoDB database foi conectado com sucesso_ aparecerá no seu console.

## Inicialização do frontend

 Instaladas as dependências, configurado o banco de dados e iniciado o servidor local, rode ``npm run dev`` para iniciar a aplicação Vite.
