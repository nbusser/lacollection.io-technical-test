const fs = require('fs');
const api = require('./lawnmowers.js');

const lines = fs.readFileSync('instructions.txt', 'utf-8').split('\n');

const top_right_pos = lines[0].split(' ');
api.set_top_right_position({x: top_right_pos[0], y: top_right_pos[1]});

for (let i = 1; i < lines.length; i += 2) {
    const lawnmower_pos = lines[i].split(' ');
    api.add_lawnmower({
        x: lawnmower_pos[0],
        y: lawnmower_pos[1],
    }, lawnmower_pos[2]);

    const lawnmower_path = [...lines[i+1]];
    lawnmower_path.forEach(direction => {
        console.log(direction);
    });
}