import React from 'react';
import axios from 'axios';
import { List } from 'react-content-loader';
import {Redirect} from 'react-router-dom';

class Data extends React.Component{
    constructor(){
        super()
        this.state = {
            data :[],
            loading : true,
            isErr:false
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people')
        .then(res =>{
            this.setState({
                data : res.data.results,
                loading : false
            })
        })
        .catch(err => {
            this.setState({
                isErr :true
            })
    })
}

  
    render(){
        const { data,loading,isErr } = this.state
        if(isErr)
        {
           return <Redirect to ='/NotFound'/>
        }
        else{    
            if(loading)
            {
            return <List width="300" height="10"/>
            }
            else
            {
                if(this.props.DataAPI === 'Full'){
                    return(
                        data.map(person =>{
                            return person.name +', ' 
                        })
                        )
                    }
                else{
                    return(
                        data.map(person =>{
                            if(person.name === 'Luke Skywalker')
                            {
                                return person.name 
                            }
                        })
                    )         
                }
            }
        }

    }
}

export default Data