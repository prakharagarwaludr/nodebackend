const express = require('express')
const app = express()
const port = 9000

app.get('/prakhar', (req, res) => {
  res.send('Hello Prakhar !')
})

app.listen(port, () => {

  console.log(`prakhar app listening at http://localhost:${port}`)
})
