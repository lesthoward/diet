const fs = require('fs')
const path = require('path')
const directory = path.join(__dirname, '../database/db.json')
const readDatabase = () => {
    const db = fs.readFileSync(directory, {encoding: 'utf8'})
    const usuariosJSON = JSON.parse(db)
    return usuariosJSON
}

const writeDatabase = (newDatabase) => {
    const toStringDB = JSON.stringify(newDatabase)
    fs.writeFileSync(directory, toStringDB)
}

module.exports = {
    readDatabase,
    writeDatabase
}