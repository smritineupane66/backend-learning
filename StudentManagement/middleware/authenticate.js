const authenticate = (req,res,next)=>{
const {name,age} = req.body;
if(!name||!age){
    return res.status(404).json({message:'Name and age are required'})
}
next();
}
export default authenticate