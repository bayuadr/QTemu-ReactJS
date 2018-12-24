import React from 'react';
import axios from 'axios';
import { List } from 'react-content-loader'


class Data extends React.Component{
    constructor(){
        super()
        this.state = {
            data :[],
            loading : true
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/')
        .then(res =>{
            this.setState({
                data : res.data.results,
                loading : false
            })
        })
    }

  
    render(){
        console.log(this.state.loading)
        const { data,loading } = this.state
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

export default Data