import PropTypes from 'prop-types';
import ContainerResponsive from '#Components/Container';
import Footer from './components/Footer';

const ContainerApp = ({ children, user, layoutProps }) => (
  <>
    <ContainerResponsive user={user} {...layoutProps}>
      {children}
    </ContainerResponsive>
    <Footer />
  </>
);

ContainerApp.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.shape(),
  layoutProps: PropTypes.shape({
    center: PropTypes.bool,
    disableNav: PropTypes.bool,
  }),
};
ContainerApp.defaultProps = {
  user: {},
  layoutProps: {
    center: false,
    disableNav: false,
  },
};
export default ContainerApp;
