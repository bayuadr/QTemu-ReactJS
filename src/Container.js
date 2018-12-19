import Container_Top from'./Container/Container_Top.js';
import Container_Next from'./Container/Container_Next.js';
import Container_About from'./Container/Container_About.js';
import Container_Member from'./Container/Container_Member.js';
import Containter_Past from'./Container/Containter_Past.js';
import React, { Component } from 'react';

class Container extends Component{
    render() {
        return(
            <div style={{flexGrow:'1',margin:0}}>
            <Container_Top/>
            <Container_Next/>
            <Container_About/>
            <Container_Member/>
            <Containter_Past/>
            </div>
        );
    }
}

export default Container
