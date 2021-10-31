const express = require('express');
const addlocation = require('../model/addlocation');
const router = express.Router();


router.post("/", (req, res) => {
    const post = new addlocation({
        name: req.body.name,
        sector: req.body.sector,
        provinece: req.body.provinece,
        district: req.body.district,
        subdistrict: req.body.subdistrict
    });
    post.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err =>{
        res.json({message: err})
    });
});

module.exports = router;