const express = require('express');
// const { getState } = require('../Common/State/State');
const app = express();
const path = require('path');
// const helmet = require("helmet");
const { renderer } = require('./Utilis/rendered');
const { routes } = require('./Utilis/Router/Router');
// Server.use(helmet({ accessControlAllowOrigin: 'http://localhost:3000'}));
var fs = require('fs');

const port = 3005; //TODO: moveto env
console.log("path",path.join(__dirname))

// app.use('static', express.static(path.join(__dirname, 'public')))
app.get("/client.script.js",(req,res)=>{
  fs.readFile(__dirname+"/index.bundle.js", "utf8", function(err, data){
    if(err) throw err;


    res.send(data);
});
})
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    ( Promise.resolve()).then(props => {
       const component = route.component.prototype.render ? route.component.prototype.render(props) : route.component(props);
      const markup = renderer(component)
      res.send(markup);
    });
  })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})