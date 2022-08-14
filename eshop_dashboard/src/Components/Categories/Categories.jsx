import axios from "axios";
import React, {useEffect,useState} from "react";
import Container from "@material-ui/core/Container";
import CategoryCard from "./CategoryCard"; 
import Masonry from "react-masonry-css";
import CategoryHeader from "./CategoryHeader";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
  } from "@material-ui/core/";
import { img } from "./img"; 
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      marginLeft:12,
    }
  }));
  

function Categories(){

    const [records, setRecords] = useState([]);

    useEffect(()=>{
        const APIURL = `http://localhost:8080/v1/product-categories`;
        axios.get(APIURL).then((response)=>{
            if(response.data){
                setRecords(Object.values(response.data));
                console.log(response.data);
            }
        });
    },[])

   
    const classes = useStyles();
   
    return(
       
        <div>
            <CategoryHeader
              title="Product Categories"
              subTitle="Our product categories which we will server for our customers"
              icon={<ShoppingCartIcon fontSize="large" />}
            
            />
            <br/>
            <br/>
            <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                >
                        {records.map(record=>(
                            <div key={record.categoryId} > 
                                <CategoryCard record={record}/>
                            </div>
                        ))}
                
                </Grid>
            </div>
            

        </div>
    );
}

export default Categories;