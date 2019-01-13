import React from 'react'
import { connect } from 'react-redux'
import {incrementAction, decrementAction,fetchUser, loading} from '../Redux/action'
import {bindActionCreators} from 'redux'
import Menu from '../Menu.js';
import Footer from'../Footer.js';
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress';
import {Redirect} from 'react-router-dom'

class Home_Redux extends React.Component{

    componentDidMount(){
       this.props.fetchUser()
    }

    render(){
        if (this.props.loading){
           return <LinearProgress />
        }
        else{
            if (this.props.users === 'Not Found'){
               return <Redirect to = '/NotFound'/>
            }
            else
            {
            return(
            
                <div style={{marginTop:'100px'}}>
                <ul>
                    {
                        this.props.users.map(data => {
                            return(
                            <li>{data.name}</li>    
                            )
                        })
                    }
               </ul>
                <Menu/>
                    <Grid container >
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8}>
                            <h2>{this.props.myNum}</h2>    
                            <button onClick={() => this.props.incrementAction()}>+</button>    
                            <button onClick={() => this.props.decrementAction()}>-</button>  
                            
                        </Grid>
                        
                        <Grid item xs={2}>
                        </Grid>
                        
                    </Grid>
                    <br/>
                    <br/>
                    
                <Footer/>
                </div>
              
                );
            }
    }
       
    }
}

const mapStateToProps = (state) => ({
         myNum : state.num,
         users : state.data,
         loading : state.loading
  })

  const mapDispatchToProps = (dispatch) => bindActionCreators({
    incrementAction,decrementAction,fetchUser
  },dispatch)
  


export default connect(mapStateToProps,mapDispatchToProps)(Home_Redux)