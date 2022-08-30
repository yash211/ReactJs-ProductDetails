import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,ListItemText,Grid, Typography, Button} from '@mui/material';
import { Container } from '@mui/system';
import Details from './Details';
import { useState } from 'react';
const ShowProds = (props) => {
  const [detClick,setdetClick]=useState([])
  const onDetClick=(e,dname,dprice,dtype,ditems)=>{
    e.preventDefault();
    setdetClick([dname,dprice,dtype,ditems]);
  }
  return (
    <div> 
    <Container fixed sx={{
      marginTop:9,
    }}>
    {
      (props.ProductList.length!==0)?
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Product Type</TableCell>
              <TableCell align="right">Items List</TableCell>
              <TableCell align="center">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            props.ProductList.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.ptype}</TableCell>
                <TableCell align="right">{
                    row.pitems.map(item=>{
                      return(
                        <div>
                          <ListItemText primary={item}/>
                        </div>
                      )
                    })
                }</TableCell>
                <TableCell align="center">
                  <Button onClick={(e)=>onDetClick(e,row.name,row.price,row.ptype,row.pitems)}color="success" variant="contained">Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
    :
      <Typography color="crimson">No Records Found,Please Add</Typography>
     
    }
    {/* <Routes>
      <Route exact path="/details" element={<Details/>}></Route>
    </Routes> */}
    {
      (detClick[0]!=="")?<Details product={detClick}/>:""
    }
    </Container>
    </div>
  )
}

export default ShowProds
