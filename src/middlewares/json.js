export async function json(req, res) {
    const buffers = []

    for await ( const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())

    } catch {
        req.body = null
    }

    res.setHeader('Content-type', 'application/json') //setHeader é utilizado  para definir um ou mais cabeçalhos.No caso específico desse código, ele está definindo o tipo de conteúdo como application/json, indicando que o corpo da resposta contém dados no formato JSON.
}