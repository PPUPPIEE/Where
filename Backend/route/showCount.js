const router = require("express").Router();
const location = require("../model/searchResult");
const data = {
  "เหนือ": {
    "วัฒนธรรม": 2,
    "ตลาด" : 2,
    "สถาปัตยกรรม" : 2,
    "ธรรมชาติ" : 2
  },
  "กลาง": {
    "วัฒนธรรม": 2,
    "ตลาด" : 2,
    "สถาปัตยกรรม" : 2,
    "ธรรมชาติ" : 2
  },
  "ตะวันออก": {
    "วัฒนธรรม": 2,
    "ตลาด" : 2,
    "สถาปัตยกรรม" : 2,
    "ธรรมชาติ" : 2
  },
  "ตะวันออกเฉียงเหนือ": {
    "วัฒนธรรม": 2,
    "ตลาด" : 2,
    "สถาปัตยกรรม" : 2,
    "ธรรมชาติ" : 2
  },
  "ใต้": {
    "วัฒนธรรม": 2,
    "ตลาด" : 2,
    "สถาปัตยกรรม" : 2,
    "ธรรมชาติ" : 2
  },
  "ตะวันตก": {
    "วัฒนธรรม": 2,
    "ตลาด" : 2,
    "สถาปัตยกรรม" : 2,
    "ธรรมชาติ" : 2
  }
}
router.get("/", async (req, res) => {
  try {
    const result = await location.aggregate([
      { $project: { __v: 0 } },
      { $match: { check: true } },
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
