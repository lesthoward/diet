const { Router, request, response } = require('express')
const router = Router()


router.get('/', (req=request, res=response) => {
    const db = res.locals.readDatabase()
    res.json(db)
})

router.get('/:id', (req=request, res=response) => {
    const db = res.locals.readDatabase()
    const uniqueUser = db.find(singleUser => singleUser.id === parseInt(req.params.id))
    res.json(uniqueUser)
})

router.post('/', (req=request, res=response) => {
    console.log(req.body);
    const db = res.locals.readDatabase()
    const persona = req.body
    db.push(persona)
    res.locals.writeDatabase(db)
    res.json(db)
})

router.patch('/:id', (req=request, res=response) => {
    const db = res.locals.readDatabase()
    const userID = parseInt(req.params.id)
    const noUserID = req.body
    // const persona = { ...noUserID, id: userID  }
    const uniqueUser = db.find(user => user.id === userID) 
    uniqueUser.mensajeNutrologo = req.body.mensajeNutrologo
    uniqueUser.respuesta = 'completado'
    const user = db.find(singleUser => singleUser.id === userID)
    console.log('file: usuarios.routes.js ~ line 47 ~ router.patch ~ user', user)
    res.locals.writeDatabase(db)
    res.status(200).json({msg: 'Editado exitosamente'})
})

router.delete('/:id', (req=request, res=response) => {
    const db = res.locals.readDatabase()
    // Los parámetros vienen del Front-End
    const deleteUserDB = db.filter(user => user.id !== parseInt(req.params.id)) 
    res.locals.writeDatabase(deleteUserDB)
    res.status(200).json({msg: 'Borrado exitosamente'})
})


module.exports = router