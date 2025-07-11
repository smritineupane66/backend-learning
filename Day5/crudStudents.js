import express from "express";
const app = express()

app.use(express.json())

let students = [
    { id: 1, name: 'Smriti', age: 21 },
    { id: 2, name: 'Sita', age: 20 },
    { id: 3, name: 'Hari', age: 21 },
    { id: 4, name: 'Gita', age: 22 },


]

app.get('/', (req, res) => {
    res.send("Welcome to Student Record")
})

app.get('/students', (req, res) => {
    console.log("Query recieved", req.query);
    res.json(students)

})
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(stu => stu.id === id);
    if (!student) return res.status(404).send("Student not found");
    res.json(student);
});
app.post('/students', (req, res) => {
    console.log("Json recieved", req.body);

    const newstudent = req.body;
    newstudent.id = students.length + 1,
        students.push(newstudent)
    res.status(201).json(newstudent)

});


app.patch('/students/:id/:age', (req, res) => {
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

app.delete('/students/:id/:age', (req, res) => {
    const id = parseInt(req.params.id)
    const studentindex = students.findIndex(stu => stu.id === id)

    if (studentindex === -1) return res.status(404).send("Student not found")
    const deletedindex = students.splice(studentindex, 1)
    console.log("Deleted", deletedindex);
    res.json({ message: 'Deleted Successfully', deleted: deletedindex })




})



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");


})