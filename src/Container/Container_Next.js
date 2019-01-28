import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Title from '../Atom/Title'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import {fetchUser} from '../Redux/action'
import {bindActionCreators} from 'redux'
import ContentLoader, { Facebook } from 'react-content-loader'
import {Redirect} from 'react-router-dom'


class Container_Next extends Component{
    constructor(props){
        super(props)

        this.state ={
            valueTitle : 'Next Meetup',
        }
    }

    componentDidMount() {
        this.props.fetchUser()

    }

    render() {
        let i = 0

        const { valueTitle } = this.state
        const { Members,loading } = this.props
        if(Members === 'Not Found'){
            return <Redirect to ='/NotFound'/>
        }
        if (loading){
            return(
                <Grid container style={{marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Title value={valueTitle}/>
                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                    <ContentLoader>
                    <rect x="0" y="10" rx="4" ry="4" width="300" height="13" />
                    <rect x="10" y="40" rx="3" ry="3" width="250" height="10" />
                    <rect x="10" y="70" rx="4" ry="4" width="300" height="13" />
                    <rect x="0" y="100" rx="3" ry="3" width="250" height="10" />
                     </ContentLoader>   
                    </Paper>
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
                    <Title value={valueTitle}/>
                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                        <Typography variant="subtitle2" gutterBottom>
                        <b>Awesome meetup and event</b><br/><br/>
                        <font color='#DCDCDC'>25 January 2019</font><br/><br/>
                        Hello, JavaScript & Node.js Ninjas!<br/>
                        Get Ready for out monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br/>
                        The Meetup format will contain some short stories and technical talks.<br/>
                        If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br/>
                        <br/>
                        Remember to bring a photo ID to get through building security.<br/>
                        <br/>

                        --------------------------------------------------------------------------------------------------------------------------
                        <br/>
                        See you there!<br/>
                        {
                        
                            Members.map(names => {
                                if (names.name !== 'Obi-Wan Kenobi')
                                {
                                    return names.name + ', '
                                }
                                else{
                                    return names.name
                                    }
                            
                        })}
                        <br/>
           
                        </Typography>
                    </Paper>
                </Grid>          
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

const mapStateToProps = (state) => ({
    Members : state.data,
    loading : state.loading,
    
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
fetchUser
},dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (Container_Next);
