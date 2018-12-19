import React from 'react'
import Button from '@material-ui/core/Button'

const Tombol = (props) => {
    return (
    <div>
        <Button style={{backgroundColor:"#ffa733",color:'white'}} variant="contained">
            {props.value}
        </Button>
    </div>
    )
}

export default Tombol