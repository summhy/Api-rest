const {Router} = require("express");
const _ = require("underscore");

const router = Router();
const movies = require('../movies.json')

router.get("/",(req,res)=>{
    res.json(movies)
})

router.post("/",(req,res)=>{
    const {title,director,year,rating} =req.body;
    if(title && director && year && rating){
        const id = movies.length+1
        const movie ={id, ...req.body}
        movies.push(movie)
        res.status(201).json(movies)
    }else{
         res.status(406).json({"error":"datos incompletos"})
    }
   
})
router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    _.each(movies, (movie,indice)=>{
        if(movie.id == id){
            movies.splice(indice,1); 
            res.status(200).json(movies)
        }
    })
    res.status(404).json({"error":"datos no encontrados"})
})

router.put("/:id",(req,res)=>{
    const {id} = req.params;
    const {title,director,year,rating} =req.body;
    if(title && director && year && rating){
        _.each(movies, (movie,indice)=>{
            if(movie.id == id){
                movies[indice].title =title;
                movies[indice].director =director;
                movies[indice].year =year;
                movies[indice].rating =rating;
                res.status(200).send(movies)
            }
        })
        res.status(404).json({"error":"datos no encontrados"})
    }else{
         res.status(406).json({"error":"datos incompletos"})
    }

})

module.exports = router;