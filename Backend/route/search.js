const Province = require("../model/province");
const router = require("express").Router();
const location = require("../model/searchResult");

router.post("/", async (req, res) => {
  
  try {
      const province = await location.aggregate([
        { $match: { name: { $regex: req.body.name }, sector: req.body.sector } },
      ]);  

   
    res.status(200).json(province);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
