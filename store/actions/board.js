import {BOARD_CHANGE} from '../constants';

export function changeBoard(position) {
    

    return {type: BOARD_CHANGE,
        payload: position}
}
    