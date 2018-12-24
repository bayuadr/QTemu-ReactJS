import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Title from '../Atom/Title'
import Typography from '@material-ui/core/Typography'
import Data from '../Atom/Data';
import axios from 'axios';
import Collapse from '@material-ui/core/Collapse';


class Container_Member extends Component{
    constructor(){
        super()
        this.state = {
            valueTitle : 'Members',
            check : false,
            person : [],
       
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

    componentDidMount(){
        axios.get('https://swapi.co/api/people/')
        .then(res => {
           
            this.setState({
                person : res.data.results
            })
        })
    }

    render() {
        let label = ''
        let Others = 'Others'
        const {checked,valueTitle,person} = this.state
        
        checked?   label = <label onClick={this.handleCollapse}>Collapse</label> : label = <label onClick={this.handleOnclick}>Sea All</label>
        checked?  Others = '' : Others = 'Others' 
        
        return (
        <Grid container style={{marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Title value={valueTitle}/>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="subtitle2" gutterBottom style={{fontWeight:'bold',float:'Right',color:'#ffa733',textDecoration:'underline'}}>
                         {label}
                        </Typography>
                        </Grid>
                    </Grid>
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
                    {
                        person.map(data =>{
                            if(data.name !== 'Luke Skywalker'){
                                return (
                                
                                    <Paper style={{padding:'10px 10px 10px 10px',marginBottom:'25px'}}>
                                    <Grid container wrap="nowrap">
                                        <Grid item xs={2}>
                                            <Avatar alt="Hacktiv8 Logo" style={{width:'75px',height:'75px',marginRight:'0px',backgroundColor:'rgb(255, 167, 51)'}} >{data.name.charAt(0)}</Avatar>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" gutterBottom>
                                                Organizers <br/><br/>
                                                 {data.name}
                                            </Typography>
                                        </Grid>
                                    </Grid>   
                                    </Paper>     
                                )
                            }   
                        })
                   }
                   </Collapse>
                </Grid>          
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

export default Container_Member
