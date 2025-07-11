//  What is Error Handling Middleware?

// It’s a special type of middleware that catches 
// and handles errors from anywhere in your app,
//  like failed DB connections, missing data, invalid input, etc.

// It’s defined with 4 parameters: err, req, res, next

const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).send("Something went wrong!");
};

export default errorHandler;
