
const variable = {
    num : 0,
    data: [],
    loading : true,
    checked : false,
    checked_past : false,
    valueContainer : 
    {
        data : [ `<b>27 November 2017</b><br/>
        <br/>
        #39 JakartaJS April Meetup with kumparan`,
        `<b>27 October 2017</b><br/>
        <br/>
        #38 JakartaJS April Meetup with kumparan`,
        `<b>27 September 2017</b><br/>
        <br/>
        #37 JakartaJS April Meetup with kumparan`,]
    }
    
}

export const reducers = (state = {...variable},action) =>{

    switch(action.type){
        case "INCREMENT":
       return({
            ...state,
            num : state.num+=1,
        })
        
        case "DECREMENT":
        return({
            ...state,
            num : state.num-=1,
        })
        case "reqUsersSucess":
        return({
            ...state,
            data : action.payload,
            loading : false
        })
        case "requesErrortUser":
        return({
            ...state,
            data : action.payload,
            loading : false
        })
        case "handleOnclick":
        return({
            ...state,
            checked : true,
        
        })
        case "handleOnCollapse":
        return({
            ...state,
            checked : false,
        })
        case "handleOnclick_past":
        return({
            ...state,
            checked_past:true
        })
        case "handleOnCollapse_past":
        return({
            ...state,
            checked_past:false
        })
      
        default :
        return state
        
        
    }

}