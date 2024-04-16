import { Database } from './database.js';
import {randomUUID} from 'node:crypto'
import { buildRoutePath } from './utils/build-route-path.js';

let dataAtual = new Date()
let dataFormatada = dataAtual.toLocaleString()


const database = new Database()
export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query

            const tasks = database.select('tasks', search ? {
                title: search,
                description: search,
                completed_at,
                created_at,
                updated_at,
            } : null )
        
            return res.end(JSON.stringify(tasks));
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description} = req.body //request boddy 


            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at: dataFormatada,
                updated_at: dataFormatada,
            }

            database.insert('tasks', task)

            return res.writeHead(201).end('')
        },
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'), // request parameters
        handler: (req, res) => {
            const {id} = req.params
            const {title, description } = req.body
            
            database.update('tasks', id, {
                title,
                description,
                updated_at: dataFormatada,
            })
            
            
            return res.writeHead(204).end()
        },
    },

    {
        method: 'PUT',
        path: buildRoutePath('/tasks/complete/:id'), // Rota para marcar a tarefa como completa
        handler: (req, res) => {
            const { id } = req.params;
    
            // Verifica se o ID da tarefa está presente
            if (!id) {
                return res.writeHead(400).end();
            }
            // Busca a tarefa no banco de dados pelo ID
            const task = database.selectOne('tasks', id);
            
            // Verifica se a tarefa existe
            if (!task) {
                return res.writeHead(404).end();
            }
    
            // Atualiza o completed_at para a data atual
            task.completed_at = "Completo!";
    
            // Atualiza a tarefa no banco de dados
            database.update('tasks', id, task);
    
            return res.writeHead(204).end();
        },
    },
   
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const {id} = req.params
            
            if (!id) {
                return res.writeHead(400).end()
            }

            database.delete('tasks', id)

            return res.writeHead(204).end()
        },
    }
]