const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server
})

server.get('/', (req, res) => {
  res.render('courses', { items: courses })
})

server.get('/about', (req, res) => {
  const data = {
    img: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
    name: 'Rocketseat',
    description: 'Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀',
    techs: ['JavaScript', 'ReactJS', 'ReactNative', 'NodeJS'],
    links: [
      {text: 'GitHub', link: 'https://github.com/Rocketseat'},
      {text: 'Instagram', link: 'https://www.instagram.com/rocketseat_oficial'},
      {text: 'Facebook', link: 'https://www.facebook.com/rocketseat'}
    ]
  }
  res.render('about', { data })
})

server.use((req, res) => {
  res.status(404).render('not-found')
})

server.listen(5000, () => {
  console.log('server is running')
})