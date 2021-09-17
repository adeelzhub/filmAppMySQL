const Film = require("./film.model");

exports.addFilm = async (filmObj) =>{
    try{
        await Film.sync();
        await Film.create(filmObj)
    }catch (error){
        console.log(error)
    }
}

exports.listFilm = async () =>{
    try{
        const list = await Film.findAll();
        list.map(film => console.log(film.dataValues));
        
    }catch(error){
        console.log(error)
    }
}

exports.deleteFilm = async (movieName) =>{
    try{
        await Film.destroy({
            where:{
                name: movieName
            }
        })
            
    }catch(error){
        console.log(error);
    }
}

exports.updateFilm = async (filmName,newLike) =>{
    try{
        await Film.update({like: newLike},{
            where: {
                name: filmName
            }
        })
    }catch(error){
        console.log(error)
    }
}