const fs = require('fs');
const api = require('./lawnmowers.js');

const lines = fs.readFileSync('instructions.txt', 'utf-8').split('\n');

const top_right_pos = lines[0].split(' ');
api.set_top_right_position({x: top_right_pos[0], y: top_right_pos[1]});

for (let i = 1; i < lines.length; i += 2) {
    const pos = lines[i].split(' ');
    const landmower = api.add_lawnmower({
        x: Number.parseInt(pos[0]),
        y: Number.parseInt(pos[1]),
    }, pos[2]);

    const lawnmower_path = [...lines[i+1]];
    lawnmower_path.forEach(direction => {
        api.move_lawnmower(landmower, direction);
    });
    api.print_lawnmower_infos(landmower);
}
