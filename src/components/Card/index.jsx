import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';

const useStyles = makeStyles(styles);

const CardProduct = ({ name, price, description, photoURL, seller }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          seller.photoURL ? (
            <Avatar className={classes.avatar} src={seller.photoURL} />
          ) : (
            <Avatar className={classes.avatar}>
              {`${seller.name}`[0].toLocaleUpperCase()}
            </Avatar>
          )
        }
        title={`${seller.name}`}
        subheader={`$ ${price}`}
      />
      <CardMedia
        className={classes.media}
        component="img"
        alt={name}
        image={photoURL}
      />
      <CardContent className={classes.content}>
        <Typography variant="h6">{name}</Typography>
        <Typography>{description}</Typography>
        <Typography variant="caption">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Comprar</Button>
        <Button>Ver más</Button>
      </CardActions>
    </Card>
  );
};

CardProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  photoURL: PropTypes.string,
  seller: PropTypes.shape({
    name: PropTypes.string,
    photoURL: PropTypes.string,
  }),
};
CardProduct.defaultProps = {
  name: '',
  price: '',
  description: '',
  photoURL: '',
  seller: {
    name: '',
    photoURL: '',
  },
};
export default CardProduct;
