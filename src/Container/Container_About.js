import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Title from '../Atom/Title'
import IsiContainer from '../Atom/IsiContainer'

class Container_Next extends Component{
    constructor(){
        super()
        this.state ={
            value :[{
                valueTitle : 'About Meetup',
                valueCointaer : `Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.
                <br/>
                <br/>
                Twitter : @JakartaJS and we use the hashtag #jakartajs`,
            }]
        }
    }

    render() {
        
        return (
        <Grid container style={{marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Title value={this.state.value[0].valueTitle}/>
                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                        <IsiContainer value={this.state.value[0].valueCointaer}/>
                    </Paper>
                </Grid>          
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

export default Container_Next
