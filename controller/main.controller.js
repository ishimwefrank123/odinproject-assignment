
//Sample message
const messages = [
  {text: "Hi there!", user:"Amando", added: new Date()},
  {text: "Hello World!", user:"Charles", added: new Date()}
];

const indexRouteController = (req,res)=>{
  res.render("index", {title: "Mini MessageBoard", messages});
}

const formRouteGetController = (req,res)=>{
  res.render("form", {title: "New Message"});
}

const formSubmissionRouteController = (req,res) => {
  const {messageText, messageUser} = req.body;
  messages.push({text: messageText, user:messageUser, added: new Date()});
  res.redirect("/");
}

const getMessageController = (req, res) => {
  const msg = messages[req.params.id];
  if (msg) {
    res.send(`<h1>${msg.user}</h1><p>${msg.text}</p><small>${msg.added}</small><br><a href="/">Go back</a>`);
  } else {
    res.status(404).send("Message not found");
  }
}

module.exports = {
  indexRouteController, 
  formRouteGetController,
  formSubmissionRouteController,
  getMessageController
}