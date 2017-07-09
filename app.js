'use strict';

var express = require('express'),
    loudness = require('loudness'),
    app = express();

app.get('/set/:value', function(req, res) {
    var value = req.params.value;
    loudness.setVolume(value * 1, function(err) {
        console.error(err);
    });
    res.send('Up volumen:' + value);
});

app.get('/mute', function(req, res) {
    loudness.setMuted(true, function(err) {
        console.error(err);
    });
});

app.get('/nomute', function(req, res) {
    loudness.setMuted(false, function(err) {
        console.error(err);
    });
});

app.listen(8080, function() {
    console.log('All is loaded');
});