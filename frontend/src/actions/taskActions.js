import axios from "axios"

// Get task
export const getTask = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({ type: 'GET_TASK_REQUEST'})

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/task/${id}/`, config)

        dispatch({ 
            type: 'GET_TASK_SUCCESS',
            payload: data
        })


    } catch (error) {
        dispatch({
            type: 'GET_TASK_FAIL',
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message
        })
    }
}


// Edit task
export const editTask = (id, editedTask) => async (dispatch, getState) => {

    try {
        
        dispatch({ type: 'EDIT_TASK_REQUEST'})

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.put(`/api/task/${id}/edit/`, editedTask, config)

        dispatch({ 
            type: 'EDIT_TASK_SUCCESS',
        })


    } catch (error) {
        dispatch({
            type: 'EDIT_TASK_FAIL',
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message
        })
    }
}



// Create new Subtask
export const createTask = (task) => async (dispatch, getState) => {

    try {
        
        dispatch({ type: 'CREATE_TASK_REQUEST'})

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/task/create/`, task, config)

        dispatch({ 
            type: 'CREATE_TASK_SUCCESS',
            payload: data
        })


    } catch (error) {
        dispatch({
            type: 'CREATE_TASK_FAIL',
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message
        })
    }
}


// Delete subtask
export const deleteTask = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({ type: 'DELETE_TASK_REQUEST'})

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/task/${id}/delete/`, config)

        dispatch({ 
            type: 'DELETE_TASK_SUCCESS',
        })


    } catch (error) {
        dispatch({
            type: 'DELETE_TASK_FAIL',
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message
        })
    }
}


// Update subtask status
export const updateTaskStatus = (subtasks, status, taskID) => async (dispatch, getState) => {

    try {

        dispatch({ type: 'TASK_STATUS_REQUEST' })
        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.put(
            `/api/task/status/`,
            {'taskID': taskID,
             'subtasks': subtasks,
             'status': status },
            config
        )

        dispatch({
            type: 'TASK_STATUS_SUCCESS',
            payload: data
        })


    } catch (error) {
        dispatch({
            type: 'TASK_STATUS_FAIL',
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message
        })
    }
}




