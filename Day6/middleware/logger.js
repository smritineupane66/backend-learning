// 1️ logger middleware (basic custom middleware)
// The logger middleware is a custom middleware function
//  that tracks and logs each request your server 
//  receives.

const logger = (req,res,next) =>{
    console.log(`${req.method} ${req.url} at ${new Date().getHours()}`);
    next();
}



export default logger;








