const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Arnab",
    to: "Souvick",
    msg: "Let go for chai adda",
    created_at: new Date(),
  },
  {
    from: "Leo",
    to: "Dengue",
    msg: "What the fuck",
    created_at: new Date(),
  },
  {
    from: "Sumit",
    to: "Aritra",
    msg: "Don't talk so rubbish",
    created_at: new Date(),
  },
  {
    from: "Joga",
    to: "Suman",
    msg: "Go to hell",
    created_at: new Date(),
  },
  {
    from: "Arka",
    to: "Souvick",
    msg: "Let's hangout",
    created_at: new Date(),
  },
  {
    from: "Aniket",
    to: "Arnab",
    msg: "How are you?",
    created_at: new Date(),
  },
  {
    from: "Arnab",
    to: "Sancho",
    msg: "I am sorry",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
