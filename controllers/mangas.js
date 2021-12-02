module.exports = app => {
    app.get('/mangas', (req, res) => res.send('{"name": "mangas post"}'))
    app.post('/mangas', (req, res) => res.send('{"name": "mangas post"}'))
}