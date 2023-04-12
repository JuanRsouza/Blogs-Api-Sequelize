Blogs API é uma aplicação de gerenciamento de blogs desenvolvida em Node.js com a ajuda do framework Express para gerenciamento de requisições HTTP. A API utiliza o ORM Sequelize para realizar operações de criação, leitura, atualização e exclusão (CRUD) no banco de dados. Além disso, a API conta com o JWT para autenticar usuários na aplicação.

Através dos endpoints da API, usuários autenticados são capazes de criar novos posts, categorias de blogs, ler todos os posts e buscar um post específico através de sua identificação única.

É importante destacar que a Blogs API utiliza o banco de dados MySQL para armazenamento de informações.

Para garantir a organização do projeto, a arquitetura MSC (Model-Service-Controller) foi utilizada. Essa arquitetura separa o projeto em três camadas distintas, permitindo uma melhor organização do código e uma maior facilidade de manutenção.

Na camada Model, são definidos os modelos de dados da aplicação, que correspondem às tabelas do banco de dados e são criados utilizando o Sequelize. Na camada Service, são definidos os serviços da aplicação, que contém a lógica de negócio da aplicação e realizam operações de CRUD nos modelos definidos anteriormente. Já na camada Controller, são definidos os controladores da aplicação, que recebem as requisições HTTP, chamam os serviços necessários e retornam as respostas correspondentes.

Através da utilização da arquitetura MSC e do Sequelize, é possível desenvolver uma aplicação escalável e de fácil manutenção, com uma estrutura clara e organizada. Com a combinação de todas essas tecnologias, a Blogs API se torna uma solução completa e robusta para gerenciamento de blogs.



