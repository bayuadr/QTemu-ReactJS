import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';

class Tombol extends React.Component{
    constructor(){
        super()
        this.state = {
            open: false,
          };
        
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
  
      handleClose = () => {
        this.setState({ open: false });
      };
      render(){
          
          const {value,valueIndex} = this.props
          
        if(value ==='View'){
        return (
            <div>
             <Link to={`/View/${valueIndex}`} style={{color:'white',textDecoration:'none'}}>
                <Button style={{backgroundColor:"#ffa733",color:'white'}} variant="contained">
                    {value}
                </Button>
             </Link>
            </div>
            )
       }
       else if(value ==='Join' || value ==='Submit'){
        return (
            <div>
        <Button style={{backgroundColor:"#ffa733",color:'white',textDecoration:'none'}} variant="contained" onClick={this.handleClickOpen}>
            {value}
        </Button>
        <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Information !"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {value === 'Join' ? 'Success Join, See you there !' : 'Success Creating New Meet Up, See you there !'}
            </DialogContentText>
        </DialogContent>
       
        </Dialog>
        </div>
        )
    }
       return (
        <div>
            <Button style={{backgroundColor:"#ffa733",color:'white',textDecoration:'none'}} variant="contained">
                {value}
            </Button>
            
        </div>
        )
        
      }
    

}

export default Tombol