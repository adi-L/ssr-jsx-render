const express = require('express');
const { getState } = require('../Common/State/State');
const Server = express();
const { renderer } = require('./Utilis/rendered');
const { routes } = require('./Utilis/Router/Router');

const port = 3000; //TODO: moveto env

routes.forEach(route => {
  Server.get(route.path, (req, res) => {
    (route.preLoad ? route.preLoad() : Promise.resolve()).then(props => {
       const component = route.component.prototype.render ? route.component.prototype.render(props) : route.component(props);
      const markup = renderer(component)
      res.send(markup);
    });
  })
});


Server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})