const NORTH = 0;
const SOUTH = 1;
const WEST = 2;
const EAST = 3;
const N_DIRECTIONS = 4;

const lawnmowers = [];

let top_right_position = null;

const set_top_right_position = (pos) => {
    if (top_right_position !== null) {
        throw 'Top right position can only be initialized once';
    }

    if (pos.x < 0 || pos.y < 0) {
        throw 'Only positive coordinates are allowed';
    }

    top_right_position = pos;
};

const is_pos_included = (pos) => {
    if(top_right_position === null) {
        throw 'Top right position is not initilized yet';
    }

    return (
        pos.x >= 0 && pos.x <= top_right_position.x
        && pos.y >= 0 && pos.y <= top_right_position.y
    );
};

const add_lawnmower = (pos, direction) => {
    if (top_right_position === null) {
        throw 'Top right position is not initilized yet';
    }

    if (!is_pos_included(pos)) {
        throw 'Lawnmower cannot be spawned outside of the garden';
    }

    if (direction < 0 || direction > N_DIRECTIONS) {
        throw 'Direction is invalid';
    }

    lawnmowers.push({pos, direction,});
};
