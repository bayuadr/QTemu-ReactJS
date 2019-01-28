
import axios from 'axios'

export const incrementAction = () => ({type:"INCREMENT"})
export const decrementAction = () => ({type:"DECREMENT"})

export const fetchUser = () => {
    return dispatch =>{
        axios.get('https://swapi.co/api/people')
        .then(
            res => {
                if(res.status === 200){
                    return res.data.results
                }
                else
                {
                    return 'Not Found'    
                }
                
            }
        )
        .then( 
            data=>{
                dispatch(reqUsersSuccess(data))
            }
        )
        .catch(
            error=>{
                dispatch(reqUsersError(error))
            }
        )
    }
}

export const reqUsersSuccess = (payload) =>({
    type:'reqUsersSucess',
    payload
})

export const reqUsersError = (payload) =>({
    type:'requesErrortUser',
    payload
})

export const seeall = () =>({
    type:'handleOnclick',
})

export const colapse = () =>({
    type:'handleOnCollapse',
})

export const seeall_past = () =>({
    type:'handleOnclick_past',
})

export const colapse_past = () =>({
    type:'handleOnCollapse_past',
})

