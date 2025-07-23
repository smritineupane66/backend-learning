const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).send("Something went wrong!");
};

export default errorHandler;

