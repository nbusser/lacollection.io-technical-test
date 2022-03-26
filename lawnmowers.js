// All valid orientations, displayed in circle
const ORIENTATIONS = ['N', 'E', 'S', 'W'];

const lawnmowers = [];

let top_right_position = null;

// Must be called before placing around the objects
const set_top_right_position = (pos) => {
    if (top_right_position !== null) {
        throw 'Top right position can only be initialized once';
    }

    if (pos.x < 0 || pos.y < 0) {
        throw 'Only positive coordinates are allowed';
    }

    top_right_position = pos;
};

// Checks if a position is out of bound
const is_pos_included = (pos) => {
    if(top_right_position === null) {
        throw 'Top right position is not initilized yet';
    }

    return (
        pos.x >= 0 && pos.x <= top_right_position.x
        && pos.y >= 0 && pos.y <= top_right_position.y
    );
};

// Giving a pos (x, y) and an orientation, creates a lawnmower
const add_lawnmower = (pos, orientation) => {
    if (top_right_position === null) {
        throw 'Top right position is not initilized yet';
    }

    if (typeof(pos.x) !== 'number' || typeof(pos.y) !== 'number') {
        throw 'Positions are not numbers';
    }

    if (!is_pos_included(pos)) {
        throw 'Lawnmower cannot be spawned outside of the garden';
    }

    if (ORIENTATIONS.find(dir => {return dir === orientation;}) === undefined) {
        throw 'Orientation is invalid';
    }

    const lawnmower = {pos, orientation,};
    lawnmowers.push(lawnmower);

    return lawnmower;
};

// Moves a lawnmower along a direction 'D' (right), 'G' (left) or 'A' (forward)
const move_lawnmower = (lawnmower, direction) => {
    // Gets the index of the current orientation in the ORIENTATION array
    const orIndex = ORIENTATIONS.findIndex(or => {return or === lawnmower.orientation});
    switch (direction) {
        // Turns the lawnmover 90° to the right
        case 'D':
            // Just plays with the orientation index
            lawnmower.orientation = ORIENTATIONS[(orIndex+1)%ORIENTATIONS.length];
            break;
        // Turns the lawnmover 90° to the left
        case 'G':
            if (orIndex === 0) {
                lawnmower.orientation = ORIENTATIONS[ORIENTATIONS.length-1];
            } else {
                lawnmower.orientation = ORIENTATIONS[orIndex-1]
            }
            break;
        // Moves the lawnmower forward
        case 'A':
            // Copying lawnmower pos
            let next_pos = {x: lawnmower.pos.x, y: lawnmower.pos.y,};

            switch (lawnmower.orientation) {
                case 'N':
                    next_pos.y += 1;
                    break;
                case 'S':
                    next_pos.y -= 1;
                    break;
                case 'W':
                    next_pos.x -= 1;
                    break;
                case 'E':
                    next_pos.x += 1;
                    break;
            };
            // If the new pos is inside the garden, updates coordinates
            // Else, stays at the same position
            if (is_pos_included(next_pos)) {
                lawnmower.pos = next_pos;
            }
            break;
        default:
            throw `"${direction}" is not a valid direction`;
    };
};

const print_lawnmower_infos = (lawnmover) => {
    console.log(`Lawnmower info: pos (${lawnmover.pos.x}, ${lawnmover.pos.y}) facing ${lawnmover.orientation}`);
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