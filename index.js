const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

let people = [{
  "name": "Ilham",
  "height": 1.7,
  "weight": 65

}, {
  "name": "joko",
  "height": 1.4,
  "weight": 80
}]



const currency = {
  IDR: 14480, SGD: 1.36, MYR: 4.23, JPY: 110.31, USD: 1
}

Countbmi = (weight, height) => {
  return (weight / Math.pow(height, 2)).toFixed(1)
}

bmiCategory = (bmi) => {
  if (bmi >= 30) {
    return "Obesitas";
  } else if (bmi >= 25.1 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "normal";
  }
  else {
    return "underweight";
  }
}

const hospitals = [
  { name: "RS Semoga Cepat Sembuh", capacity: 100 },
  { name: "RS Indonesia Sehat", capacity: 100 },
];

app.get("/hospitals", (req, res) => {
  res.json(hospitals);
});

// exercise 10
app.get("/profile", (req, res) => {
  res.json(people)
});

// exercise 11
app.get("/bmi", (req, res) => {
  let name = req.query.name;
  let weight = req.query.weight;
  let height = req.query.height;
  let bmi = Countbmi(weight, height);
  let category = bmiCategory(bmi);

  res.json({
    name: name,
    height: height,
    weight: weight,
    bmi: bmi,
    category: category
  });
})

// exercise 12
app.post("/bmi", (req, res) => {
  let name = req.body.name;
  let height = req.body.height;
  let weight = req.body.weight;
  let bmi = Countbmi(weight, height);
  let category = bmiCategory(bmi);

  res.json({
    name: name,
    height: height,
    weight: weight,
    bmi: bmi,
    category: category
  })
})

// Exercise 13
app.post("/convert", (req, res) => {
  let from = req.body.sourceCurrency;
  let amount = req.body.sourceAmount;
  let target = req.body.targetCurrency;

  let baseCrncy = (amount / currency[from]);
  let convert = currency[target] * baseCrncy;

  res.json({
    sourceCurrency: from,
    sourceAmount: amount,
    targetCurrency: target,
    targetAmount: parseFloat(convert.toFixed(1))
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = {
  Countbmi,
  bmiCategory,
}