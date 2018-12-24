import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Button from '../Atom/Tombol'
import Title from '../Atom/Title'
import Container from '../Atom/IsiContainer'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide';

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
            ],
            checked : false           
        }
    }

  
    handleOnclick = () => {
        this.setState({ 
            checked: true 
        })
      };

      handleCollapse = () => {
        this.setState({ 
            checked: false 
        })
      };


    render() {
        let label = ''
        
        this.state.checked?   label = <label onClick={this.handleCollapse}>Collapse</label> : label = <label onClick={this.handleOnclick}>Sea All</label>
        
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
                            <Typography variant="subtitle2" gutterBottom style={{fontWeight:'bold',float:'Right',color:'#ffa733',textDecoration:'underline'}}>
                            {label}
                            </Typography>
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
                    <Slide direction="up" in={this.state.checked} mountOnEnter unmountOnExit>
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
                     </Slide>
                </Grid>       
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

export default Containter_Past
