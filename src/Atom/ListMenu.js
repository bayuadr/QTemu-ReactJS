import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';

class ListMenu extends React.Component{
render(){
return(
        <Tabs>
            <Link to="/" style={{textDecoration:'none'}}><Tab label="Home" style={{color:'white',textDecoration:'none'}}/></Link>
            <Link to="/CreateMeetUp" style={{textDecoration:'none'}}><Tab label="Create Meet Up" style={{color:'white'}} /></Link>
            <Link to="/Explore" style={{textDecoration:'none'}}><Tab label="Explore"  style={{color:'white'}}/></Link>     
        </Tabs>


        )
    }
}


export default ListMenu

