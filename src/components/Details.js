import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText'
const Details = (props) => {

  return (
    <div>
    {
     (props.product.length!=0)?
    <Card sx={{ minWidth: 275,marginTop:6 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.product[0]}
        </Typography>
        <Typography variant="h5" component="div">
          {props.product[2]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.product[1]}
        </Typography>
        <Typography variant="p">
          {
           props.product[3].map(item=>{
                      return(
                        <div>
                          <ListItemText primary={item}/>
                        </div>
                      )
                    })}
        </Typography>
      </CardContent>
    </Card>:""
    }
    </div>
  )
}

export default Details
