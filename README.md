# sys-auth-login
Login and authentication system with NodeJS / Sistema de login e autenticação com NodeJS

Pt-br: Este repositório é um pequeno projeto com NodeJS utilizando TypeScript 
Durante o desenvolvimento deste projeto foi usado TypeScript para tipagem e criação 
de algumas pequenas interfaces para tipar os dados recebidos nas requisições 
e também por conta do seu autocomplete que agiliza o desenvolvimento. 
Também foi utilizado o Prisma como ORM para criação de models, migrations e conexão com o banco de dados. 
O Banco de dados utilizado foi o PostgreSQL. Também utilizei Token JWT para autenticação, a lib bcrypt para criptografia de senha do usuário.
A verificação do token JWT fica em uma middleware que é passada nas rotas que exigem que o usuário esteja logado, forçando a somente usuários
autenticados conseguirem acessar as rotas, para conseguir o token pra ele ser validado o usuário precisa antes ter feito o login.

O projeto foi desenvolvido apenas com o intuito de praticar alguns conceitos importantes relacionados a estrutura se segurança.

English: This repository is a small project using Node.js with TypeScript. 
TypeScript was used during development for type annotations and creating small interfaces to type incoming request data, 
as well as for its autocomplete feature which speeds up development. 
I also used Prisma as the ORM for creating models, migrations, and connecting to the database. 
PostgreSQL was the chosen database. JWT tokens were used for authentication, and the bcrypt library was used for password encryption.
JWT token verification is in a middleware that is passed on routes that require the user to be logged in, forcing only users
authenticated users can access the routes, to obtain the token for it to be validated, the user must first have logged in.

The project was developed solely for practicing important concepts related to security infrastructure.
