import React from 'react'
import Menu from '../Menu.js';
import Footer from'../Footer.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from '../Atom/Title'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../Redux/action'

class View extends React.Component{
    constructor(){
        super()
        this.state = {
                valueTitle : '',
                styleContainerTop : 'ContainerTop'
        }
    }
    
    componentDidMount(){
        this.props.fetchUser()
        if (this.props.match.params.index === '1')
        {
            this.setState({
                valueTitle : 'Meet Up 27 November  2017'
            })
        }
        else if (this.props.match.params.index === '2'){
            this.setState({
                valueTitle : 'Meet Up 27 October  2017'
            })
        }
        else if(this.props.match.params.index === '3'){
            this.setState({
                valueTitle : 'Meet Up 27 September 2017'
            })
        }
    }
   
     

    render(){

        const {valueTitle,styleContainerTop} = this.state
        const {value} = this.props
        return(
            <div>
                <Menu/>
                <Grid container style={{marginBottom:'20px',marginTop:'100px'}}>
                    <Grid item xs={2}>
                    </Grid>
                    
                    <Grid item xs={8}> 
                      <Title value={valueTitle} valueStyle={styleContainerTop}/>
                        <Paper style={{padding:'10px 10px 10px 10px'}}  dangerouslySetInnerHTML= {{__html :value[this.props.match.params.index]}}>
                        </Paper>
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
   
    value : state.valueContainer.data,
  
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
fetchUser
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(View)

