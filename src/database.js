import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)


export class Database {
    #database = {}
    
    constructor(){
        fs.readFile(databasePath, 'utf8')
        .then(data => {  
            this.#database = JSON.parse(data) //quando ele terminar de ler o arquivo ele vai transformar o arquivo em um objeto
        })
        .catch(() => { //No caso desse arquivo não existir ele vai criar um arquivo vazio
            this.#persist()
        })
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table, search){
        let data = this.#database[table] ?? []

        if (search) {
            data = data.filter(row => {
                return Object.entries(search).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data
    }

    insert (table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }
        this.#persist()
        return data
    }

    update (table, id, data) {
        const rowIndex = this.#database[table].findIndex(row => row.id == id)

        if (rowIndex > -1) {
            this.#database[table][rowIndex] = { id ,...data}
            this.#persist()
        }
    }

    delete (table, id) {
        const rowIndex = this.#database[table].findIndex(row => row.id == id)

        if (rowIndex > -1) {
            this.#database[table].splice(rowIndex, 1)
            this.#persist()
        }
    }
    selectOne(table, id) {
        const items = this.select(table, { id }); // Utiliza o método select existente para obter todos os itens com o ID fornecido
        return items.length ? items[0] : null; // Retorna o primeiro item encontrado ou null se nenhum item for encontrado
    }
}