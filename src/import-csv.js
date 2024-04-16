import fs from 'fs';
import fetch from 'node-fetch';
import { parse } from 'csv-parse';

(async () => {
  // Inicializa o parser
  const parser = fs.createReadStream('./public/Pasta-8.csv')
    .pipe(parse({ columns: true }));

  // Inicializa o contador
  let count = 0;

  // Reporta o início
  console.log('Início');

  // Itera por cada registro do CSV
  for await (const record of parser) {
    try {
      // Envia a task para a rota /tasks da sua API
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: record.title,
          description: record.description
        })
      });

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        console.log(`Task criada: ${record.title}`);
      } else {
        console.error(`Erro ao criar a task: ${record.title}`);
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }

    // Incrementa o contador
    count++;
  }

  // Reporta o fim
  console.log(`Fim. Total de ${count} tasks criadas.`);
})();
