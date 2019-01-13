import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Data from '../Atom/Data';
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse';


class SeeAll extends React.Component{
    constructor(){
        super()
        this.state = {
            checked : false,
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

    render(){
        const {checked} = this.state
        let label = '' 
        let Others = 'Others'
        
        checked?   label = <label onClick={this.handleCollapse}>Collapse</label> : label = <label onClick={this.handleOnclick}>Sea All</label>
        checked?  Others = '' : Others = 'Others' 
        if(this.props.Data === 'Members')
        {
            return(
                <div>
                    <Typography variant="subtitle2" gutterBottom style={{fontWeight:'bold',float:'Right',color:'#ffa733',textDecoration:'underline'}}>
                    {label}
                    </Typography>
                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                                <Grid container wrap="nowrap">
                                    <Grid item xs={2}>
                                        <Avatar alt="Hacktiv8 Logo" style={{width:'75px',height:'75px',marginRight:'0px',backgroundColor:'rgb(255, 167, 51)'}} 
                                        >L</Avatar>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Organizers <br/><br/>
                                            <Data/>  {Others}
                                        </Typography>
                                    </Grid>
                                 </Grid>   
                                </Paper>
                                <br/>   
                    
                    <Collapse in={checked}>
                    {this.props.children}
                    </Collapse>
                </div>
            )
            
        }
        else
        {

        }
           
    }

}
    
export default SeeAll