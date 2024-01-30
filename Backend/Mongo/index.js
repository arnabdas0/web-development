const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Successfull...");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndUpdate("65b5ea76bebcd53a8e1f0cf1", { age: 56 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
// ]).then((res) => {
//   console.log(res);
// });

// const user2 = new User({ name: "Eve", email: "eve@yahoo.in", age: 48 });
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
