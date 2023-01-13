const express = require("express");
const fs = require("fs");

const app =express();

app.use(express.json()) //Middleware



const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));  //convert to JS object

app.get("/api/v1/tours",(req,res)=>{  //get all the tours
    res.status(200).json({
        status:"success",
        results:tours.length,
        data:{
            tours : tours
        }
    })
})

app.get("/api/v1/tours/:id",(req,res)=>{  //get particular tour
    let id= req.params.id;

    if(id >=tours.length)
    {
        res.status(404).json({
            status:"fail",
            message:"Invalid Id"
        })
    }

    res.status(200).send({
        status:"success",
        tour:tours[id]
    });
})

app.post("/api/v1/tours",(req,res)=>{  // add new tour into databse.
    const newId = tours.length;
    const newTour = Object.assign({id:newId},req.body); //combining two object
    //console.log(newTour);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),(err)=>{
        res.status(201).json({
            status:"success",
            data:{
                tours : newTour
            }
        })
    })
    
})


app.patch("/api/v1/tours/:id",(req,res)=>{   //update small part of tour

    if(req.params.id*1> tours.length)
    {
        res.status(404).json({
            status:"fail",
            message:"Invalid Id"
        })
    }
    res.status(200).json({
        status:"success",
        data:{
             tours : "<Updated tour....>"
        }
    })
})

app.delete("/api/v1/tours/:id",(req,res)=>{
    if(req.params.id*1> tours.length)
    {
        res.status(404).json({
            status:"fail",
            message:"Invalid Id"
        })
    }
    res.status(204).json({
        status:"success",
        data:null
    })
})


const port=4000;
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})