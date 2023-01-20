// Get all boards
export const boardListAllReducer = (state = { boards: [] }, action) => {
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

        default: 
            return state
    }
}


// Update subtask and task status
export const updatedTaskStatus = (state = { task: []}, action) => {
    switch(action.type) {
        case 'SUBTASK_STATUS_REQUEST':
            return {
                loading: true,
            }

        case 'SUBTASK_STATUS_SUCCESS':
            return {
                loading: false,
                success:true,
                task: action.payload
            }

        case 'SUBTASK_STATUS_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


