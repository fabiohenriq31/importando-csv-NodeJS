## Desafio: Importação de Dados de um Arquivo CSV para uma API com Node.js

Este repositório contém um projeto desenvolvido como parte de um desafio da trilha de Node.js do Ignite. O objetivo do desafio era desenvolver uma solução para importar dados de um arquivo CSV para uma API utilizando Node.js, aplicando conceitos aprendidos durante o curso.

## Descrição do Desafio

O desafio consistiu em desenvolver uma API para realizar operações CRUD (Create, Read, Update, Delete) de tasks (tarefas), além de implementar a funcionalidade de importação de tasks em massa por meio de um arquivo CSV.

## Funcionalidades da API

A API desenvolvida neste desafio possui as seguintes funcionalidades:

Criação de uma task
Listagem de todas as tasks
Atualização de uma task pelo id
Remoção de uma task pelo id
Marcação de uma task como completa pelo id
Importação de tasks em massa por meio de um arquivo CSV
Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

Node.js: para o desenvolvimento da API e dos scripts de importação de CSV
csv-parse: para o parsing do arquivo CSV
node-fetch: para realizar requisições HTTP na API a partir dos scripts de importação
Outras dependências do Node.js

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

src/: diretório contendo os arquivos-fonte do projeto
api/: diretório contendo os arquivos relacionados à API
server.js: arquivo principal da API, contendo a configuração do servidor Express e os endpoints da API
routes.js: arquivo contendo a definição das rotas da API e seus handlers
Outros arquivos relacionados à lógica da API
import-csv.js: script responsável por importar dados de um arquivo CSV para a API
data/: diretório contendo o arquivo CSV de exemplo a ser importado
README.md: este arquivo, contendo informações sobre o projeto, sua estrutura e seu funcionamento

Como Usar
Siga as instruções abaixo para configurar e executar o projeto em sua máquina local:

Clone este repositório:

git clone https://github.com/seu-usuario/desafio-importacao-csv-api-node.git
Navegue até o diretório do projeto:

cd desafio-importacao-csv-api-node

Instale as dependências do projeto:

Com npm:

npm install

Com yarn:

yarn install

Execute a API:

npm start

Execute o script de importação de CSV:

node src/import-csv.js

## Utilizando com Insomnia

Siga as instruções abaixo para configurar e utilizar a API para criar, editar, concluir e atualizar tasks utilizando o Insomnia:

Executar a API:

Antes de utilizar o Insomnia, certifique-se de que a API está em execução. Você pode iniciar a API executando o seguinte comando na raiz do projeto:

npm start
Configurar o Insomnia:

Se você ainda não tem o Insomnia instalado, faça o download e instale a partir do site oficial.
Importar Workspace do Insomnia:

Baixe o arquivo de workspace do Insomnia aqui.
No Insomnia, clique em Insomnia no canto superior esquerdo.
Selecione Import/Export.
Clique em Import Data.
Selecione From File.
Navegue até o arquivo baixado e selecione-o.
Selecione Import.
Utilizar Endpoints no Insomnia:

Agora que você importou o workspace do Insomnia, você terá acesso aos seguintes endpoints:

Criar Task: Utilize o endpoint POST - Create Task para criar uma nova task. Preencha os campos title e description no corpo da requisição.
Listar Tasks: Utilize o endpoint GET - List Tasks para listar todas as tasks.
Editar Task: Utilize o endpoint PUT - Update Task by ID para editar uma task existente. Preencha o campo id no parâmetro da rota e os campos title e description no corpo da requisição.
Concluir Task: Utilize o endpoint PATCH - Complete Task by ID para marcar uma task como concluída. Preencha o campo id no parâmetro da rota.
Remover Task: Utilize o endpoint DELETE - Delete Task by ID para remover uma task existente. Preencha o campo id no parâmetro da rota.
Executar Requisições:

Agora você pode executar as requisições conforme necessário para criar, editar, concluir e remover tasks utilizando o Insomnia.

Certifique-se de preencher os campos obrigatórios corretamente e verificar as respostas da API para garantir que as operações foram realizadas com sucesso.

## Screenshots

Aqui estão algumas capturas de tela que demonstram como utilizar os endpoints da API:

POST - Criar Task:
![Alt Text](/src/public/1%20-%20POST.jpg)

Descrição da imagem: Captura de tela do Insomnia mostrando uma requisição POST para criar uma nova task na API.

GET - Listar Tasks:

![Alt Text](/src/public/2-%20get.jpg)

Descrição da imagem: Captura de tela do Insomnia mostrando uma requisição GET para listar todas as tasks na API.

PATCH - Concluir Projeto:
![Alt Text](/src/public/3-%20Concluir%20Projeto.png)

Descrição da imagem: Captura de tela do Insomnia mostrando uma requisição PATCH para marcar uma task como concluída na API.

PUT - Atualizar Task:
![Alt Text](/src/public/4%20-%20UPDATE.png)

Descrição da imagem: Captura de tela do Insomnia mostrando uma requisição PUT para atualizar uma task na API.

GET - Listar Tasks Após Operações:
![Alt Text](/src/public/5.jpg)

Descrição da imagem: Captura de tela do Insomnia mostrando uma requisição GET para listar todas as tasks após realizar operações de CRUD na API.

Importação de CSV:
![Alt Text](/src/public/6-%20CSV.jpg)

Descrição da imagem: Captura de tela do VScode mostrando um arquivo CSV para a API.

Processo de Importação do CSV:
![Alt Text](/src/public/7%20-%20Importando%20CSV.jpg)

Descrição da imagem: Captura de tela do console mostrando o processo de importação de tasks a partir de um arquivo CSV.

Listar Tasks Após Importação do CSV:
![Alt Text](/src/public/8%20-%20Apost%20todos%20os%20processos%20a%20conclusão.jpg)

Descrição da imagem: Captura de tela do Insomnia mostrando uma requisição GET para listar todas as tasks após importar dados de um arquivo CSV para a API.

Explorar e Personalizar:

Sinta-se à vontade para explorar o workspace do Insomnia, adicionar novas requisições, editar as existentes e personalizar conforme necessário para atender às suas necessidades específicas.

Verifique a saída no console para acompanhar o progresso da importação.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request para propor melhorias ou corrigir problemas.

Licença
Este projeto é licenciado sob a Licença MIT.
