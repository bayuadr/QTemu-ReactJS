import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Title from '../Atom/Title'
import Container from '../Atom/IsiContainer'
import axios from 'axios';

class Container_Next extends Component{
    constructor(props){
        super(props)

        this.state ={
            valueTitle : 'Next Meetup',
            valueContainer : '',   
        }
    }

    componentDidMount = async () => {
        let people = []
       
        await  axios.get('https://swapi.co/api/people/')
        .then((res) =>{
             people = res.data.results
             let dataBaru = this.state.valueContainer
                dataBaru = `<b>Awesome meetup and event</b><br/><br/>
                <font color='#DCDCDC'>25 January 2019</font><br/><br/>
                Hello, JavaScript & Node.js Ninjas!<br/>
                Get Ready for out monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br/>
                The Meetup format will contain some short stories and technical talks.<br/>
                If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br/>
                <br/>
                Remmber to bring a photo ID to get through building security.<br/>
                <br/>
                `+
                people.map(person =>{
                    return person.name 
                })+`</br>
                --------
                
                <br/>
                
                <br/>
                See you there!<br/>
                <br/>`

            this.setState({
                valueContainer : dataBaru 
             })
        })

        
    }

    render() {
        const { valueTitle,valueContainer } = this.state
        return (
        <Grid container style={{marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Title value={valueTitle}/>
                    <Paper style={{padding:'10px 10px 10px 10px'}}>
                        <Container value={valueContainer}/>
                            {/* {
                              people.map((person) =>{
                                 return (
                                    <Container valueAPI={person.name}/>
 
                                )
                              })   
                            } */}
                    </Paper>
                </Grid>          
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

export default Container_Next
