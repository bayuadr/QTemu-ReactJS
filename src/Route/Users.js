import React from 'react'
import Menu from '../Menu.js';
import Footer from'../Footer.js';

class Users extends React.Component{
    render(){
        
        return(
            <div>
                <Menu/>
                <div style={{marginTop:'100px'}}>
                {this.props.match.params.person}
                </div>
            <Footer/>
            </div>
            
        )
    }
}

export default Users

