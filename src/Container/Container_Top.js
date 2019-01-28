import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Tombol from '../Atom/Tombol';
import Title from '../Atom/Title';
import Typography from '@material-ui/core/Typography';
import {fetchUser} from '../Redux/action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ContentLoader, { Facebook } from 'react-content-loader'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'


class Container_Top extends Component{
    constructor(){
        super()
        this.state ={
            
                titleValue : 'Hacktiv8 Meet Up',
                buttonValue : 'Join Us',
         
                    styleContainerTop : 'ContainerTop'
              
        }
    }

    componentDidMount()
    {
        this.props.fetchUser()
    }

    render() {
        const {users,loading} = this.props
        const {titleValue,buttonValue,styleContainerTop} = this.state
        if(users === 'Not Found'){
            return <Redirect to ='/NotFound'/>
        }
        if (loading){
            return(
    <Grid container style={{marginTop:'100px',marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Paper>
                        <Grid container>
                            <Grid item xs={5} wrap="nowrap">
                            <img style={{width:'305px',height:'210px',margin:'10px 10px 10px 10px'}} src='https://cdn.slidesharecdn.com/ss_thumbnails/react-webinar-161101082735-thumbnail-4.jpg?cb=1477988980'/>
                            </Grid>
                            <Grid item xs={7}> 
                                <ContentLoader>
                                    <rect x="0" y="10" rx="4" ry="4" width="300" height="13" />
                                    <rect x="10" y="40" rx="3" ry="3" width="250" height="10" />
                                    <rect x="10" y="70" rx="4" ry="4" width="300" height="13" />
                                    <rect x="0" y="100" rx="3" ry="3" width="250" height="10" />
                                 </ContentLoader>   

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>          
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>)
        }

        return (
        <Grid container style={{marginTop:'100px',marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Paper>
                        <Grid container>
                            <Grid item xs={5} wrap="nowrap">
                            <img style={{width:'305px',height:'210px',margin:'10px 10px 10px 10px'}} src='https://cdn.slidesharecdn.com/ss_thumbnails/react-webinar-161101082735-thumbnail-4.jpg?cb=1477988980'/>
                            </Grid>
                            <Grid item xs={7}> 
                                <Title value={titleValue} valueStyle={styleContainerTop}/>
                                   <Typography variant="subtitle2" gutterBottom>
                                    Location Jakarta, Indonesia<br/>
                                    Members 1,078<br/>
                                    Organizers {
                                        users.map(data=>{
                                            if (data.name ==='Luke Skywalker')
                                            return data.name
                                        })
                                    }           
                                    </Typography>
                                <Link to= '/Join' style={{color:'white',textDecoration:'none'}}><Tombol value={buttonValue} style={{color:'white',textDecoration:'none'}}/></Link> 

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>          
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

const mapStateToProps = (state) =>({
    users : state.data,
    loading : state.loading
})

const mapActionToProps = (dispatch) => bindActionCreators({
    fetchUser
},dispatch)

export default connect(mapStateToProps,mapActionToProps)(Container_Top)
