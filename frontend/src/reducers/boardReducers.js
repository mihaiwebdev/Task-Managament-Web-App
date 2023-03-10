// Get all boards
export const boardListAllReducer = (state = {  }, action) => {
    switch(action.type) {
        case 'BOARD_LIST_ALL_REQUEST':
            return {
                loading: true,
                boards: []
            }

        case 'BOARD_LIST_ALL_SUCCESS':
            return {
                loading: false,
                boards: action.payload
            }

        case 'BOARD_LIST_ALL_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        case 'BOARD_LIST_ALL_RESET':
            return { }
            
        default:
            return state
    }
}


// Get single board
export const boardListReducer = (state = { board: []} , action) => {
    switch(action.type) {
        case 'BOARD_LIST_REQUEST':
            return {
                loading: true,
                board: []
            }

        case 'BOARD_LIST_SUCCESS':
            return {
                loading: false,
                board: action.payload
            }

        case 'BOARD_LIST_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        case 'BOARD_LIST_RESET':
            return  { board : [] }
            
        default: 
            return state
    }
}


// Create new Board
export const createBoardReducer = (state = { } , action) => {
    switch(action.type) {
        case 'BOARD_CREATE_REQUEST':
            return {
                loading: true,
            }

        case 'BOARD_CREATE_SUCCESS':
            return {
                loading: false,
                success: true,
                board: action.payload,
            }

        case 'BOARD_CREATE_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        case 'BOARD_CREATE_RESET':
            return { }

        default: 
            return state
    }
}


// Delete board
export const editBoardReducer = (state = { }, action) => {
    switch(action.type) {
        case 'EDIT_BOARD_REQUEST':
            return {
                loading: true
            }

        case 'EDIT_BOARD_SUCCESS':
            return {
                loading: false,
                board: action.payload,
                success: true,
            }
            
        case 'EDIT_BOARD_FAIL':
            return {
                loading: false,
                error: action.payload
        }

        case 'EDIT_BOARD_RESET':
            return { }

        default:
            return state
    }
}


// Delete board
export const deleteBoardReducer = (state = { }, action) => {
    switch(action.type) {
        case 'DELETE_BOARD_REQUEST':
            return {
                loading: true
            }

        case 'DELETE_BOARD_SUCCESS':
            return {
                loading: false,
                success: true,
            }
            
        case 'DELETE_BOARD_FAIL':
            return {
                loading: false,
                error: action.payload
        }

        case 'DELETE_BOARD_RESET':
            return { }

        default:
            return state
    }
}