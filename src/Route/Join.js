import React from 'react'
import Menu from '../Menu.js';
import Footer from'../Footer.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Title from '../Atom/Title'
import Tombol from '../Atom/Tombol'


class Join extends React.Component{
    constructor(){
        super()
        this.state ={
            title:'Join Meet Up',
            style:'ContainerTop',
            tanggal : new Date('August 19, 1975 23:15:30'),
            datenow : '',
            buttonValue:'Join'
        }
      
         
    }
 
    
    render(){
        
        const {title,style,datenow,buttonValue}= this.state
        return(
            <div>
            <Menu/>
                <Grid container style={{marginTop:'100px'}}>
                    <Grid item xs={2}>
                    </Grid>

                    <Grid item xs={8}>
                        <Paper style={{padding:'50px 50px 50px 50px'}}>
                        <Title value={title} valueStyle={style}/>
                        <br/>
                            <TextField
                            id="standard-with-placeholder"
                            label="Name"
                            placeholder="Subject Meet Up"
                            style={{width:'100%'}}
                            />
                            <br/><br/>
                            <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            style={{width:'100%'}}
                            />
                            <br/><br/>
                            <TextField
                            id="standard-with-placeholder"
                            label="Number Phone"
                            placeholder="Subject Meet Up"
                            style={{width:'100%'}}
                            />
                            <br/><br/>
                           
                            <br/><br/>
                            <Tombol value={buttonValue}/>

                           
                        </Paper>
                    </Grid>


                    <Grid item xs={2}>
                    </Grid>
                    
                </Grid> 
                <br/><br/>
            <Footer/>
            </div>
            
        )
    }
}

export default Join

