const express = require('express')// затягуємо у наш файл "express"

const app = express()//повертає об'єкт за допомогою методів якого можна створити сервер

app.use(express.static('public'))//реєструємо middleware прослойку на роздачу статики


//http://localhost:4444/
app.get('/', (req, res) => {   //відправляється запит get на сторінку з / (в дужках вказані об'єкти реквест і респонс(запит і відповідь))
    // res.render()
})
//http://localhost:4444/about
app.get('/about', (req, res) => {    //відправляється запит get на сторінку з /about (в дужках вказані об'єкти реквест і респонс(запит і відповідь))
    // res.render()
})

app.listen(4444, () => { //вішаємо слухача і вказуємо порт
    console.log(`Application server is running in port ${4444}`)
})

