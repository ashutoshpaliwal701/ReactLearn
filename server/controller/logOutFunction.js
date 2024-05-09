const logOutFunction = async(req, res) =>{
    await req.session.destroy(err =>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    })
}

module.exports = logOutFunction;