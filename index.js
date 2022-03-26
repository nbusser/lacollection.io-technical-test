const North = 0;
const South = 1;
const West = 2;
const East = 3;

const lawnmowers = [];

let top_right_position = null;

const set_top_right_position = (pos) => {
    if (top_right_position !== null) {
        console.error('Top right position can only be initialized once');
    }
    else if (pos.x < 0 || pos.y < y) {
        console.error('Only positive coordinates are allowed');
    }
    else {
        top_right_position = pos;
    }
};

const is_pos_included = (pos) => {
    if(top_right_position === null) {
        console.error('Top right position is not initilized yet');
        return;
    }

    return (
        pos.x >= 0 && pos.x <= top_right_position.x
        && pos.y >= 0 && pos.y <= top_right_position.y
    );
};

const add_lawnmower = (pos, direction) => {
    if (top_right_position === null) {
        console.error('Top right position is not initilized yet');
        return;
    }
};
