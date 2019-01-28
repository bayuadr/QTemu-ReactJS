import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Title from '../Atom/Title'
import Typography from '@material-ui/core/Typography'
import {bindActionCreators} from 'redux'
import {fetchUser,seeall,colapse} from '../Redux/action'
import Collapse from '@material-ui/core/Collapse';
import {connect} from 'react-redux'
import { List } from 'react-content-loader';
import {Redirect} from 'react-router-dom'

class Container_Member extends Component{
    constructor(){
        super()
        this.state = {
            valueTitle : 'Members',
       
        }
    }

    componentDidMount(){
        this.props.fetchUser()
    }

    render() {
        let label = ''
        let Others = 'Others'
        const {valueTitle} = this.state
        
        const {checked,seeall,colapse,users} = this.props


        checked?   label = <label onClick={colapse}>Collapse</label> : label = <label onClick={seeall}>Sea All</label>
        checked?  Others = '' : Others = 'Others' 
        
        if(users === 'Not Found'){
            return <Redirect to ='/NotFound'/>
        }

        if (this.props.loading){
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
                            <Paper style={{padding:'10px 10px 10px 10px',marginBottom:'25px'}}>
                            <List width='250' height="10"/>
                            </Paper>
                                    <br/>
                                
                        </Grid>          
                    </Grid>
                    
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
              )
         }

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
                    {
                        users.map(data =>{
                            if(data.name === 'Luke Skywalker'){
                                return (
                                
                                    <Paper style={{padding:'10px 10px 10px 10px',marginBottom:'25px'}}>
                                    <Grid container wrap="nowrap">
                                        <Grid item xs={2}>
                                            <Avatar alt="Hacktiv8 Logo" style={{width:'75px',height:'75px',marginRight:'0px',backgroundColor:'rgb(255, 167, 51)'}} >{data.name.charAt(0)}</Avatar>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" gutterBottom>
                                                Organizers <br/><br/>
                                                 {data.name} {Others}
                                            </Typography>
                                        </Grid>
                                    </Grid>   
                                    </Paper>     
                                )
                            }   
                        })
                   }
                            <br/>
                            
                            <Collapse in={checked}>     
                    {
                        users.map(data =>{
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

const mapStateToProps = (state) => ({
    myNum : state.num,
    users : state.data,
    loading : state.loading,
    checked : state.checked
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
fetchUser,seeall,colapse
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Container_Member)