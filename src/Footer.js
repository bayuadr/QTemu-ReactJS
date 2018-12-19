import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';


class Footer extends Component{
    render() {
        return (
        <Grid container style={{marginBottom:'20px'}}>
            <Grid item xs={2}>
            </Grid>
            
            <Grid item xs={8}>
                <div style={{borderTop:'1px solid #D3D3D3',textAlign:'Center',fontWeight:'bold'}}>
                        &copy; Hacktiv8 2018
                </div>        
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
      )
    }
}

export default Footer
