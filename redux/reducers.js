const variable = {
    num : 0
}

const increment = (state = {...variable},action) =>{
    switch(action.type){
        case "INCREMENT":
        return ({
            ...state,
            num :state.num+=1
        })
    }
}

module.exports = increment