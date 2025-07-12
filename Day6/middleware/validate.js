const authenticate = (req, res, next) => {
    console.log(" Authenticating...");
    console.log("Headers received:", req.headers);  

    if (req.headers.token === '123' && req.headers.username === 'smriti') {
        console.log("Authenticated");
        return next();
    } else {
        console.log(" Unauthorized access attempt");
        return res.status(401).send("Unauthorized");
    }
};

export default authenticate;
