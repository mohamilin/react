import React from 'react'
// import tambahan 

import {connect} from 'react-redux';
import {addProduct, minProduct} from '../redux/actions/cart.actions';


// dr material ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
    height: 250,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function Container({cart, addProduct, minProduct}) {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Pizza HUT
            </Typography>
            <Typography variant="p" color="textSecondary">
             Enak Menggiurkan
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="previous" onClick = {() => {addProduct();  }}>
            <  AddCircleIcon/>
            </IconButton>
            <IconButton aria-label="play/pause">
                {cart}
            </IconButton>
            <IconButton aria-label="next" onClick = {() => {minProduct();  }}>
              <RemoveCircleIcon/>
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRG5vm_TDTjc64FO6hlWtL8TlWrG5HxdK5P3g&usqp=CAU"
          title="Pizza HOT"
        />
      </Card>
    );
  }

// agar connect dengan reduxnya
const mapStateToProps = ({cart}) => {
  return {
    cart : cart
  }
}

//agar connect dengan reduxnya dan button bisa berjalan
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: () => dispatch(addProduct()),
        minProduct: () => dispatch(minProduct()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Container)
