import React from 'react';

import Typography  from '@material-ui/core/Typography';

const IsiContainer = (Props) =>{
    if (Props.valueStyle == 'ContainerTop')
    {
        return (
        <Typography style= {{margin:'10px',borderBottom:'1px solid #DEDEDE'}}variant="h6" gutterBottom>
            <div dangerouslySetInnerHTML= {{__html :Props.value}}></div>
         </Typography>
        )
    }
    else{
        return(
            <Typography variant="subtitle2" gutterBottom>
                <div dangerouslySetInnerHTML= {{__html :Props.value}}></div>
                
            </Typography>
        )
    }
    
}

export default IsiContainer