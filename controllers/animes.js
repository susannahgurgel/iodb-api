module.exports = app => {
    app.get('/animes', (req, res) => res.send(animes))
    app.post('/animes', (req, res) => {
        console.log(req.body)
        res.send('ANIMES POST')
        }
    )
}

var animes = `
{
	"animes": [{
			"name": "Naruto",
			"episodes": "600",
			"genre": "Ação",
			"studio": "Animax Studio",
			"imageUrl": "https://wikiimg.tojsiabtv.com/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
		},
		{
			"name": "Bleach",
			"episodes": "600",
			"genre": "Ação",
			"studio": "Animax Studio",
			"imageUrl": "https://upload.wikimedia.org/wikipedia/en/5/53/Bleach_cover_01.jpg"
		},
		{
			"name": "Given",
			"episodes": "600",
			"genre": "Romance",
			"studio": "Animax Studio",
			"imageUrl": "https://images-na.ssl-images-amazon.com/images/I/818J9HInDSL.jpg"
		},
		{
			"name": "Haikyuu",
			"episodes": "600",
			"genre": "Ação",
			"studio": "Animax Studio",
			"imageUrl": "https://static.wikia.nocookie.net/haikyuu/images/0/0e/Volume_1.png"
		},
		{
			"name": "Death Note",
			"episodes": "600",
			"genre": "Ação",
			"studio": "Animax Studio",
			"imageUrl": "https://pm1.narvii.com/7080/d0280e2a2d3fa2e8a5d0501c31f6d154806b5e5er1-452-678v2_hq.jpg"
		},
		{
			"name": "Dragon Ball",
			"episodes": "600",
			"genre": "Ação",
			"studio": "Animax Studio",
			"imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81-1jqVHePL.jpg"
		},
		{
			"name": "Seven Deadly Sins",
			"episodes": "600",
			"genre": "Ação",
			"studio": "Animax Studio",
			"imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91bJbrliIhL.jpg"
		},
		{
			"name": "Full Metal Alchemist",
			"episodes": "600",
			"genre": "Ação",
			"studio": "Animax Studio",
			"imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81Xzr-6BR+L.jpg"
		}
	]
}
`;