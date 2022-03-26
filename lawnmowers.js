const DIRECTIONS = ['N', 'S', 'W', 'E'];

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

    if (DIRECTIONS.find((dir) => {return dir === direction;}) === undefined) {
        throw 'Direction is invalid';
    }

    const lawnmover = {pos, direction,};
    lawnmowers.push(lawnmover);

    return lawnmover;
};

const move_lawnmower = (lawnmover, direction) => {
    // Copying lawnmower pos
    let next_pos = {x: lawnmover.pos.x, y: lawnmover.pos.y,};

    switch (direction) {
        case DIRECTIONS[0]:
            next_pos.y += 1;
            break;
        case DIRECTIONS[1]:
            next_pos.y -= 1;
            break;
        case DIRECTIONS[2]:
            next_pos.x -= 1;
            break;
        case DIRECTIONS[3]:
            next_pos.x += 1;
            break;
    };

    // If the new pos is inside the garden, updates coordinates
    // Else, stays at the same position
    if (is_pos_included(next_pos)) {
        lawnmover.pos = next_pos;
    }
};

const print_lawnmower_infos = (lawnmover) => {
    console.log(`Lawnmower info: pos (${lawnmover.pos.x}, ${lawnmover.pos.y}) facing ${lawnmover.direction}`);
};

const print_all_lawnmowers_infos = () => {
    lawnmowers.forEach(lawnmower => {
        print_lawnmower_infos(lawnmower);
    });
};

module.exports = {
    set_top_right_position,
    add_lawnmower,
    move_lawnmower,
    print_lawnmower_infos,
    print_all_lawnmowers_infos,
};