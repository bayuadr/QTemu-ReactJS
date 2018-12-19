import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Button from '../Atom/Tombol'
import Title from '../Atom/Title'
import Container from '../Atom/IsiContainer'
import See from '../Atom/SeeAll'

class Containter_Past extends Component{
    constructor(){
        super()
        this.state = {
            value : [{
                valueTitle : 'Past Meetup',
                valueContainer :`27 November 2017<br/>
                <br/>
                #39 JakartaJS April Meetup with kumparan`,
                valueButton :'View',
            }],
            valueContainer : [
                `<b>27 November 2017</b><br/>
                <br/>
                #39 JakartaJS April Meetup with kumparan`,
                `<b>27 October 2017</b><br/>
                <br/>
                #38 JakartaJS April Meetup with kumparan`,
                `<b>27 September 2017</b><br/>
                <br/>
                #37 JakartaJS April Meetup with kumparan`,
            ]
            
        }
    }
    render() {
        return (
        <Grid container style={{marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}> 
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Title value={this.state.value[0].valueTitle}/>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <See/>
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={24}>
                        {
                            this.state.valueContainer.map((data) => {
                                return (
                                <Grid item xs={4} > 
                                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                                        <Container wrap="nowrap" value={this.state.value[0].valueContainer}/>
                                        <br/>
                                        <Button value={this.state.value[0].valueButton}/>
                                    </Paper>                          
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </Grid>       
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

export default Containter_Past
