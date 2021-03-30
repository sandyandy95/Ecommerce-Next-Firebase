import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './styles';

const useStyles = makeStyles(styles);

const CardProduct = ({
  name,
  price,
  description,
  photoURL,
  seller,
  actions,
  minWidth,
}) => {
  const classes = useStyles();
  return (
    <Card
      className={clsx(classes.root, {
        [classes.minWidth]: minWidth,
      })}
    >
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
        className={clsx(classes.media, { [classes.minMedia]: minWidth })}
        component="img"
        alt={name}
        image={photoURL}
      />
      <CardContent className={classes.content}>
        <Typography variant="h6">{name}</Typography>
        <Typography>{description}</Typography>
        <Typography variant="caption">{description}</Typography>
      </CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
};

CardProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  photoURL: PropTypes.string,
  seller: PropTypes.shape({
    name: PropTypes.string,
    photoURL: PropTypes.string,
  }),
  actions: PropTypes.element,
  minWidth: PropTypes.bool,
};
CardProduct.defaultProps = {
  name: '',
  price: 0,
  description: '',
  photoURL: '',
  seller: {
    name: '',
    photoURL: '',
  },
  minWidth: false,
  actions: <></>,
};
export default CardProduct;
