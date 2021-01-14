const express = require('express');

const app = express();

app.use(express.static('C:/Users/sahno/Desktop/projetWebFront/src/app/components'));
//app.use(express.static('./dist/projetweb'));

app.get('/*', (req, res) =>
    res.sendFile('components.component.html', {root: 'C:/Users/sahno/Desktop/projetWebFront/src/app/components'}),
);

app.listen(process.env.PORT || 8080);