import React, {useEffect,useState} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Dairy from "../images/Dairy.png";
import Vege from "../images/Vegetables.jpg";
import Meat from "../images/Meat.jpg";

const useStyles = makeStyles(theme=>({
    main:{
        width:240,
        height:340,
        marginLeft: 50,        
    }    
}))



export default function CategoryCard({record}) {

  const img = record.img;
  const [value, setValue] = useState("");
  const classes = useStyles();
  
  

  return (
    <div className={classes.main}>
      <Card elevation={3} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image= {Vege}
            alt= ""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {record.categoryName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {record.categoryDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
