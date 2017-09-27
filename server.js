const express = require('express')
const next = require('next')

const mobxReact = require('mobx-react')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mobxReact.useStaticRendering(true)

app.prepare()
.then(() => {
  const server = express()
    server.get('/p/:id', (req, res) => {
        const actualPage = '/post' //真实page的地址
        const queryParams = { title: req.params.id } //参数
        app.render(req, res, actualPage, queryParams) //渲染对应的page
    })
  server.get('*', (req, res) => {
    // console.log('res111111')
    // console.log(res)
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})