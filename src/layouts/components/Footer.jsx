import { Box, Grid, Link, Tooltip, Typography, useTheme } from '@material-ui/core';

// eslint-disable-next-line react/prop-types
const WhatsAppLink = ({ children }) => (
  <Link href="https://wa.link/stss7l" target="_blank" color="inherit">
    <Typography color="inherit">{children}</Typography>
  </Link>
);
const Footer = () => {
  const { palette } = useTheme();
  return (
    <Box component="footer" bgcolor={palette.primary.main} color={palette.primary.contrastText} p={4}>
      <Grid container>
        <Grid item sm={6} xs={12} color="inherit">
          <Tooltip title="Visita mi web">
            <Link href="http://cristian-ronda.tk/" target="_blank">
              <img src="/logo.png" alt="cristian-ronda-logo" style={{ width: 210, height: 'auto', objectFit: 'contain', marginBottom: 16 }} />
            </Link>
          </Tooltip>
          <WhatsAppLink>¿Eres cliente?</WhatsAppLink>
          <WhatsAppLink>¿Eres vendedor?</WhatsAppLink>
          <WhatsAppLink>Me interesa este producto</WhatsAppLink>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography gutterBottom color="inherit" variant="h4">
            Solicita una demo
          </Typography>
          <Link href="tel:+593987868889" target="_blank" color="inherit">
            <Typography color="inherit">0987 868 889</Typography>
          </Link>
          <Link href="mailto:cristian.ronda.dev@gmail.com" target="_blank" color="inherit">
            <Typography color="inherit">cristian.ronda.dev@gmail.com</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
