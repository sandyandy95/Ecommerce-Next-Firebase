import PropTypes from 'prop-types';
import Link from 'next/link';

const NextLink = ({ children, href, ...props }) => (
  <Link href={href} {...props}>
    {children}
  </Link>
);

NextLink.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

export default NextLink;
