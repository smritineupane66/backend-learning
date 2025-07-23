import express, { json } from 'express'

import logger from './middleware/logger.js'
import authenticate from './middleware/authenticate.js'
import Errorhandler from './middleware/Errorhandler.js'


const app = express()
app.use(express.json())

app.use(logger)


let students = [
    { id: 1, name: 'Smriti', age: 21 },
    { id: 2, name: 'Sita', age: 20 },
    { id: 3, name: 'Hari', age: 21 },
    { id: 4, name: 'Gita', age: 22 },


];

app.get('/', (req, res) => {
    res.json(students)
})


//Get by id
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const student = students.find(s => s.id === id)
    if (!student) return
    res.status(404).send('Student not found')
    res.json(student)
})

app.post('/students', (req, res) => {
    console.log("Json recieved", req.body);

    const newstudent = req.body;
    newstudent.id = students.length + 1,
        students.push(newstudent)
    res.status(201).json(newstudent)

});
app.patch('/students/:id/:age', authenticate,(req, res) => {
    const id = parseInt(req.params.id)
    const student = students.find(stu => stu.id === id);

    if (!student)
        return res.status(404).send("Student not found")

    if (req.body.name) student.name = req.body.name;
    if (req.body.age) student.age = req.body.age;
    if (req.body.id) student.id = req.body.id;

    console.log("Json updated", student);
    res.json(student)



})
app.delete('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Student not found' });
    const removed = students.splice(index, 1);
    winstonLogger.info('Student deleted', { student: removed[0] });
    res.json({ message: 'Deleted successfully', student: removed[0] });
});

app.use(Errorhandler)






app.listen(3000, () => {
    console.log('Server is listening at localhost:3000');

})
