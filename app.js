// require and instantiate express
const express = require('express');
const app = require('express')();

// set the view engine to ejs
app.set('view engine', 'ejs')
app.use(express.static('assets'));

// render `home.ejs` with the list of items
app.get('/', (req, res) => {
    var items = [];
    var size = Number(req.query.size) || 3;
    var totalItems = Number(req.query.totalItems) || 3;
    if (req.query && req.query.type) {
        var start = Number(req.query.start) || 1;
        for (var i = start; i <= size; i++) {
            items.push(req.query.type + i);
        }
        res.render('content', {
            items: items,
            totalItems: totalItems
        });
        res.end();
    } else {
        items = ['A1', 'A2', 'A3'];
        res.render('home', {
            items: items,
            totalItems: totalItems
        });
        res.end();
    }
});

app.listen(8080)

console.log('listening on port 8080')