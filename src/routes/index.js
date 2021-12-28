const express = require('express');
const valores = require('../model/valores');
const router = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores');

router.get('/', async (req,res)=>{
    const valores = await Valor.find();
    console.log(valores);
    res.render('index.ejs',{
        valores
    });
});


router.post('/add', async (req, res)=>{
    const valor= new Valor(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/:id', async (req, res)=>{
    console.log(req.params.id);//registro que encontro y elimino
    const reg= await Valor.findByIdAndRemove(req.params.id);
    console.log(reg);
    res.redirect('/');
    //res.status(200).json(reg);
});

router.get('/up/:id', async (req, res) => {
    try {
        const valor = await Valor.findById(req.params.id).lean();
        res.render('actualiza.ejs', { valor });
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/up/:id', async (req, res) => {

    const { id } = req.params;
    await Valor.findByIdAndUpdate(id, req.body);
    res.redirect('/');

});
module.exports = router;



//router.get('/saludo',(req,res)=>{
  //  res.send('Hola, este es el saludo desde express')
//});

//router.get('/login',(req,res)=>{
//    res.render('login.ejs')
//});
