const express= requiere('express')
const PORT=4000
const app = express()

app.use((req, res, next) =>{
    console.log('soy un middleware')
    next()
})

app.use((req, res, next) => {
    console.log('soy el segundo middleware')
    
    res.status(200).json ({
        success: true,
    })
})
app.listen (PORT, () => console.log (`>Listening at ${PORT}!`))