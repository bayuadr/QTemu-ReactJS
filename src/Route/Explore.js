import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Title from '../Atom/Title'
import Container from '../Atom/IsiContainer'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../Redux/action'
import {connect} from 'react-redux'
import Menu from '../Menu.js';
import Footer from'../Footer.js';
import Tombol from '../Atom/Tombol';

class Explore extends Component{
    constructor(){
        super()
        this.state = {
            
                valueTitle : 'Explore',
                valueButton :'View',  
                styleContainerTop : 'ContainerTop'
        }
    }

    componentDidMount(){
        this.props.fetchUser()
    }


    render() {
        
        const {value} = this.props
        const {valueTitle,valueButton,styleContainerTop} = this.state

        return (
            <div>
            <Menu/>
        <Grid container style={{marginBottom:'20px',marginTop:'100px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}> 
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Title value={valueTitle} valueStyle={styleContainerTop}/>
                        </Grid>
                       
                    </Grid>
                    
                    <Grid container spacing={24}>
                        {
                      
                            value.map((data,indexmap) => {
                                  
                              
                           
                                return (
                                <Grid item xs={4} > 
                                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                                        <Container wrap="nowrap" value={data}/>
                                        <br/>
                                        <Tombol value={valueButton} valueIndex={indexmap}/>
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
        <Footer/>
            </div>
            
      )
    }
}

const mapStateToProps = (state) => ({
    checked : state.checked_past,
    value : state.valueContainer.data,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
fetchUser
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Explore)
