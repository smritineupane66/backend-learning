
const validateRegister = (req, res, next) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(404).send('Name and age are required')
    }

    if (typeof name !== 'string') {
        return res.status(400).send("Name must be string")
    }

    if (typeof age !== 'number' || age < 0) {
        return res.status(400).send("Age must be a positive number ")
    }
    next();
}

export default validateRegister