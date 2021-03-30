import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));
const ModalContainer = ({
  open,
  handleClose,
  title,
  description,
  children,
  ...props
}) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    {...props}
  >
    <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        {description}
      </DialogContentText>
    </DialogContent>
    {children}
  </Dialog>
);

ModalContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default ModalContainer;
