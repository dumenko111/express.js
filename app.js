const express = require('express')// затягуємо у наш файл "express"
const exhbs = require('express-handlebars')// затягуємо у наш файл "express-handlebars"

const app = express()//повертає об'єкт за допомогою методів якого можна створити сервер

app.use(express.static('public'))//реєструємо middleware прослойку на роздачу статики
app.set('view engine', 'hbs')//реєструємо двіжок //по замовчуванню express використовує PUG для того щоб використовувати Handlebars
app.engine('hbs', exhbs({//передаємо сюди затягнуту бібліотеку handlebars
    extname: 'hbs',//конфігурація зміни розширення файлу на .hbs
}))

//http://localhost:4444/
app.get('/', (req, res) => {   //відправляється запит get на сторінку з / (в дужках вказані об'єкти реквест і респонс(запит і відповідь))
    res.render('home')
})
//http://localhost:4444/about
app.get('/about', (req, res) => {    //відправляється запит get на сторінку з /about (в дужках вказані об'єкти реквест і респонс(запит і відповідь))
    res.render('about')
})

app.listen(4444, () => { //вішаємо слухача і вказуємо порт
    console.log(`Application server is running in port ${4444}`)
})

