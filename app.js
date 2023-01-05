const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    let query = req.query
    let project = query.project || ''
    let path = query.path || ''
    res.redirect(`jetbrains://php-storm/navigate/reference?project=${project}&path=${path}`)
})

app.listen(port, () => {
  console.log(`Redirect listening on port ${port}`)
})