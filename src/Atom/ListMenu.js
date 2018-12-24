import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class ListMenu extends React.Component{
render(){
return(
    <Tabs>
        <Tab label="Create Meet Up" style={{color:'white'}} />
        <Tab label="Explore"  style={{color:'white'}}/>
    </Tabs>
            )
    }
}


export default ListMenu

