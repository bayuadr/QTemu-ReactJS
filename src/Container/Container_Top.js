import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Tombol from '../Atom/Tombol';
import Title from '../Atom/Title';
import IsiContainer from '../Atom/IsiContainer';
import axios from 'axios';

class Container_Top extends Component{
    constructor(){
        super()
        this.state ={
            
                titleValue : 'Hacktiv8 Meet Up',
                buttonValue : 'Join Us',
                IsiContainerValue : ''
            ,
            style : 
                {
                    styleContainerTop : 'ContainerTop'
                } 
        }
    }

    componentDidMount = async() => {
        let people = []

        await axios.get('https://swapi.co/api/people/')
        .then(res => {
            people = res.data.results    
            let dataBaru = this.state.IsiContainerValue
            dataBaru = `Location Jakarta, Indonesia<br/>
            Members 1,078<br/>
            Organizers `+ people[0].name 
            
            this.setState({
                IsiContainerValue : dataBaru
            })
        })

    }

    render() {
        const {titleValue,buttonValue,IsiContainerValue} = this.state
        return (
        <Grid container style={{marginTop:'100px',marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Paper>
                        <Grid container>
                            <Grid item xs={5} wrap="nowrap">
                            <img style={{width:'305px',height:'210px',margin:'10px 10px 10px 10px'}} src='https://cdn.slidesharecdn.com/ss_thumbnails/react-webinar-161101082735-thumbnail-4.jpg?cb=1477988980'/>
                            </Grid>
                            <Grid item xs={7}> 
                                <Title value={titleValue} valueStyle={this.state.style.styleContainerTop}/>
                                <IsiContainer value={IsiContainerValue} valueStyle={this.state.style.styleContainerTop}/>
                                
                                <Tombol value={buttonValue}/>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>          
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

export default Container_Top
