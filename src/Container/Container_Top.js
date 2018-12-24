import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Tombol from '../Atom/Tombol';
import Title from '../Atom/Title';
import Data from '../Atom/Data';
import Typography from '@material-ui/core/Typography';

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
                            <Grid item xs={4} wrap="nowrap">
                            <img style={{width:'305px',height:'210px',margin:'10px 10px 10px 10px'}} src='https://cdn.slidesharecdn.com/ss_thumbnails/react-webinar-161101082735-thumbnail-4.jpg?cb=1477988980'/>
                            </Grid>
                            <Grid item xs={7}> 
                                <Title value={titleValue} valueStyle={this.state.style.styleContainerTop}/>
                                   <Typography variant="subtitle2" gutterBottom>
                                    Location Jakarta, Indonesia<br/>
                                    Members 1,078<br/>
                                    Organizers <Data/>              
                                    </Typography>
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
