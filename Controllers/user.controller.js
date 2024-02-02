// const User = require("../models/user.model");

// const deleteSingle = async (req, res, next) => {
//   const { id: userId } = req.params;
//   try {
//     const id = await User.findByIdAndDelete(userId);
//     console.log(id);
//     if (!id) {
//       return res
//         .status(400)
//         .json({ error: "Error", message: "User not found" });
//     } else {
//       return res.status(200).json({ message: "Entity Deleted" });
//     }
//   } catch (err) {
//     console.log(err);

//     return res.status(500).json({ erorr: "server error" });
//   }
// };

// const UpdateOne = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findOneAndUpdate(
//       { _id: id },
//       {
//         ...req.body,
//       },
//       { returnOriginal: false }
//     );

//     if (!user) {
//       return res
//         .status(400)
//         .json({ error: "Error", message: "User not found" });
//     } else {
//       return res.status(200).json(user);
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "server error" });
//   }
// };

// const GetSingle = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res
//         .status(400)
//         .json({ error: "Error", message: "User not found" });
//     } else {
//       return res.status(200).json(user);
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("server error");
//   }
// };

// const CreateUser = async (req, res, next) => {
//   try {
//     const newUser = new User({ ...req.body });
//     await newUser.save();
//     return res.status(200).json(newUser);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("internal server error");
//   }
// };

// const getAll = async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(500).send({ error });
//   }
// };

// module.exports = { deleteSingle, UpdateOne, GetSingle, CreateUser, getAll };
