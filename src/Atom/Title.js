import React from 'react'
import Typography  from '@material-ui/core/Typography'

const Title = (props) => {
    if (props.valueStyle == 'ContainerTop'){
        return(
        <Typography style= {{margin:'10px',paddingBottom:'10px',borderBottom:'1px solid #DEDEDE',fontWeight:'bold'}} variant="h4" gutterBottom>
            {props.value}
        </Typography>) 
        }
        else{
            return (
            <Typography variant="h6" gutterBottom style={{fontWeight:'bold'}}>
                {props.value}
            </Typography>
            )
        }
    
}

export default Title