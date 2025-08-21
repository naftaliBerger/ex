export const getName = (req,res) =>{
    const {name} = req.body;
    if(!name) {
    return res.status(500).json('erorr')};
    res.send(name)
}