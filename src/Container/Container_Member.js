import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Title from '../Atom/Title'
import Container from '../Atom/IsiContainer'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse';



class Container_Member extends Component{
    constructor(){
        super()
        this.state = {
            value : [{
                valueTitle : 'Members',
                valueContainer : `<Typography variant="subtitle2" gutterBottom>
                Organizers <br/><br/>
                Adhy Wiranata &nbsp;&nbsp;4 Others.
                </Typography>`,
            }],
            check : false
        }
    }

    handleChange = () => {
        this.setState({ 
            checked: true 
        })
      };

    render() {
        const {checked} = this.state
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
                            <label onClick={this.handleChange}>Sea All</label>
                        </Typography>
                        </Grid>
                    </Grid>
                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                        <Grid container wrap="nowrap">
                            <Grid item xs={3}>
                                <Avatar alt="Hacktiv8 Logo" style={{width:'75px',height:'75px',marginRight:'0px'}} 
                                src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1482132470/vfmmn0twb17nn2epblee.png"/>
                            </Grid>
                            <Grid item xs={6}>
                                <Container value={this.state.value[0].valueContainer}/>
                            </Grid>
                           
                         </Grid>
                        
                         <Collapse in={checked}>
                                <Grid item xs={3}>
                                    <Avatar alt="Hacktiv8 Logo" style={{width:'75px',height:'75px',marginRight:'0px'}} 
                                    src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1482132470/vfmmn0twb17nn2epblee.png"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Container value={this.state.value[0].valueContainer}/>
                                </Grid>
                            </Collapse>
                   </Paper>
                </Grid>          
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

export default Container_Member
