import * as React from "react";
import Card from "../Card";
import CardHeader from "../../CardHeader/CardHeader";
import CardMedia from "../../CardMedia/CardMedia";
import CardContent from "../../CardContent/CardContent";
import CardActions from "../../CardActions/CardActions";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";

export default (
  <Card key="1">
    <CardHeader
      key="1.1"
      avatar={`<Avatar aria-label="Recipe">
        R
      </Avatar>`}
      action={`<IconButton>
         <Icon>more_vert</Icon>
        </IconButton>`}
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia key="1.2"
      image="https://www.platingsandpairings.com/wp-content/uploads/2016/01/Paella-1-Square.jpg"
      style={{"height": "100px"}}
    />
    <CardContent key="1.3">
      <Typography component="p" key="1.3.1">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableActionSpacing key="1.4">
      <IconButton aria-label="Add to favorites" key="1.4.1">
        <Icon key="1.4.1.1">favorite</Icon>
      </IconButton>
      <IconButton aria-label="Share" key="1.4.2"> 
        <Icon key="1.4.2.1">share</Icon>
      </IconButton>
    </CardActions>
  </Card>
);