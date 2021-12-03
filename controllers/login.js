module.exports = app => {
    app.get('/login', (req, res) => res.send(login))
    app.post('/login', (req, res) => {
        console.log(req.body)
        res.send('ANIMES POST')
        }
    )
}

var login = `
{
	"response": "200 OK"
}
`;