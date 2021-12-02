const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.log('RUNNING ON PORT :3000'))
app.get('/', (req, res) => res.send('RUNNING ON PORT :3000'))