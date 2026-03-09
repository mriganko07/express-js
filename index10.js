import express from 'express';
import user_data from "./user.json" with { type: 'json' };

const app = express();

app.get('/', (req, res) => {
    res.send(user_data);
});



app.get('/user/name/:name', (req, res) => {

    let name = req.params.name;

    const filter_data = user_data.users.filter((user) => user.name.toLowerCase() == name.toLowerCase());

    res.send(filter_data);

});

app.get('/user/:id', (req, res) => {

    let id = req.params.id;

    const filter_data = user_data.users.filter((user) => user.id == id);

    res.send(filter_data);

});


app.listen(4000);