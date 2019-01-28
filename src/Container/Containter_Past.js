import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Tombol from '../Atom/Tombol'
import Title from '../Atom/Title'
import Container from '../Atom/IsiContainer'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide';
import {bindActionCreators} from 'redux'
import {colapse_past,seeall_past,fetchUser} from '../Redux/action'
import {connect} from 'react-redux'

class Containter_Past extends Component{
    constructor(){
        super()
        this.state = {
            
                valueTitle : 'Past Meetup',
                valueButton :'View',  
        }
    }

    componentDidMount(){
        this.props.fetchUser()
    }


  

    render() {
        let label = ''
    
        const {checked,seeall_past,colapse_past,value,index} = this.props
        const {valueTitle,valueButton} = this.state

        checked?   label = <label onClick={colapse_past}>Collapse</label> : label = <label onClick={seeall_past}>Sea All</label>
        
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
                    
                    <Grid container spacing={24}>
                        {
                            value.map((data,index) => {
                        
                                return (
                                <Grid item xs={4} > 
                                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                                        <Container wrap="nowrap" value={data}/>
                                        <br/>
                                        <Tombol value={valueButton} valueIndex={index}/>
                                    </Paper>                          
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                    <Grid container spacing={24}>
                        {
                            
                          value.map((data,index) => {
                          
                                return (
                                <Grid item xs={4} > 
                                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                                        <Container wrap="nowrap" value={data}/>
                                        <br/>
                                        <Tombol value={valueButton} valueIndex={index}/>
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

const mapStateToProps = (state) => ({
    checked : state.checked_past,
    value : state.valueContainer.data,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
seeall_past,colapse_past,fetchUser
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Containter_Past)
