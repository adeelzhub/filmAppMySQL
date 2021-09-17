const command = process.argv[2];
const {addFilm, listFilm, updateFilm, deleteFilm} =  require("./film/film.methods")
const Film = require("./film/film.model");

const app = async () => {
    switch(command){
        case "add":
            const filmObj = {
                name: process.argv[3],
                actor: process.argv[4],
                like: process.argv[5]
            }
           await addFilm(filmObj);
           break;
        case "list":
           await listFilm();
           break;
        case "delete": 
        //process.argv[3]>>>film name
            deleteFilm(process.argv[3]);    
           break;

        case "update":
            //processargv[3]>>>film name
            //processargv[4]>>>updated entry for co
            updateFilm(process.argv[3], process.argv[4])    
        default:
            console.log("\nInvalid Command")    
    }
};


app();


