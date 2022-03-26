const api = require('./lawnmowers.js');

api.set_top_right_position({x: 2, y: 2});
const lawnmower = api.add_lawnmower({x: 0, y: 0}, 'N');
api.move_lawnmower(lawnmower, 'N')
api.print_all_lawnmowers_infos();