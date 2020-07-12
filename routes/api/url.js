const urlController = require('./controllers/url/url.controller')

// Controllers
// routes
app.post('/createShortLink', urlController.createShortLink)

app.get('/:url', urlController.openLink)
