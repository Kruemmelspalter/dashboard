require('dotenv').config()
const conf = require((process.env.CONFD||"/etc/dashboard/") + "conf.json")

const express = require('express')
const app = express()

app.use('/s', express.static('static'))

app.set('view engine', 'pug')

function prepareRedirect(redirect) {
    var html = ""
    html += "<a href='" + escape(redirect.url) + ">"
    html += "<div class='dashboard container'>"
    html += "<h2>" + escape(redirect.title) + "</h2>"
    html += escape(redirect.text)
    html += "</div>"
    html += "</a>"

    return html
}


app.get('/', (req, res) => {
    console.log(req.headers.host.split(':')[0])
    res.render('index', {
        items: conf.redirects
    })
})


const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})