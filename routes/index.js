const fs = require("fs");
var express = require("express");
const { resolve } = require("path");
const { error } = require("console");
var router = express.Router();

router.use(express.json());
function randomNum() {
  return Math.floor(Math.random() * 1000) + 1;
}
const getDataFromFile = () => {
  try {
    const data = fs.readFileSync(
      resolve(__dirname, "../Assets/data.json"),
      "utf-8"
    );
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};
// const getDataFromFileSync = (cb) => {
//   try {
//     new Promise((resolve, reject) => {
//       fs.readFile(
//         resolve(__dirname, "../Assets/data.json"),
//         "utf-8",
//         (err, data) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(JSON.parse(data));
//         }
//       );
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
// const readDataAndSend = (res) => (data) => {
//   if (data) return res.status(200).json(data);
//   return res.status(404).json({ message: "No Data Available" });
// };
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const data = getDataFromFile() || [];
  let filtered = data.filter((item) => item.id != id);

  fs.writeFileSync(
    resolve(__dirname, "../Assets/data.json"),
    JSON.stringify(filtered),
    (err) => {
      if (err) throw err;
    }
  );
  return res.status(200).json({ message: "Success" });
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const data = getDataFromFile() || [];
  let found = data.find((item) => item.id == id);

  found.name = req.body.name;

  fs.writeFileSync(
    resolve(__dirname, "../Assets/data.json"),
    JSON.stringify(data),
    (err) => {
      if (err) throw err;
    }
  );
  return res.status(200).json({ message: "record updated successfully" });
});

fs.readFileSync(
  resolve(__dirname, "../Assets/data.json"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(error);
    } else {
      console.log(json.stringify(data));
    }
  }
);

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const data = getDataFromFile();
  let found = data.find((item) => item.id == id);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ message: "Invalid Id" });
  }
});

// router.post("/", (req, res, next) => {
//   const data = getDataFromFile() || [];
//   const id = req.params.id;
//   let found = data.find((item) => item.id == id);

//   return res.status(200).json(found);
// });

router.post("/", (req, res, next) => {
  const data = getDataFromFile() || [];
  try {
    const newUser = { id: randomNum(), ...req.body };
    data.push(newUser);
    fs.writeFileSync(
      resolve(__dirname, "../Assets/data.json"),
      JSON.stringify(data)
    );

    return res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
});

router.get("/", function (req, res, next) {
  const data = getDataFromFile();
  if (data) return res.status(200).json(data);
  return res.status(404).json({ message: "No Data Available" });
});

module.exports = router;
