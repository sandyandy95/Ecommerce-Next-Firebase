import { Container, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './styles';

const useStyles = makeStyles(styles);

const ContainerResponsive = ({ children, center, ...props }) => {
  const classes = useStyles();
  return (
    <Container
      className={clsx(classes.root, {
        [classes.center]: center,
      })}
      {...props}
    >
      {children}
    </Container>
  );
};

ContainerResponsive.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  center: PropTypes.bool,
};
ContainerResponsive.defaultProps = {
  center: false,
};

export default ContainerResponsive;
