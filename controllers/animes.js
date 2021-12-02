module.exports = app => {
    app.get('/animes', (req, res) => res.send('ANIMES GET'))
    app.post('/animes', (req, res) => res.send('ANIMES POST'))
}