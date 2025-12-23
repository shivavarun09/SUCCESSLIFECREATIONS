import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown.tsx';
import Sitemark from './SitemarkIcon.tsx';
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 0px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 20px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {/* Added Link with onClick to scroll up */}
            <Link 
              to="/" 
              onClick={scrollToTop}
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <Sitemark />
            </Link>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
              <Button variant="text" color="info" size="small" href='#features'>
                Features
              </Button>
              <Button variant="text" color="info" size="small" href='#testimonials'>
                Testimonials
              </Button>
              <Button variant="text" color="info" size="small" href='#services'>
                Services
              </Button>
              <Button variant="text" color="info" size="small" href='#pricing'>
                Pricing
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} href='#faq'>
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="text" size="small" component={Link} to='/sign-in'>
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small" component={Link} to='/sign-up'>
              Sign up
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem component="a" href="#features" onClick={toggleDrawer(false)}>
                  Features
                </MenuItem>
                <MenuItem component="a" href="#testimonials" onClick={toggleDrawer(false)}>
                  Testimonials
                </MenuItem>
                <MenuItem component="a" href="#services" onClick={toggleDrawer(false)}>
                  Services
                </MenuItem>
                <MenuItem component="a" href="#pricing" onClick={toggleDrawer(false)}>
                  Pricing
                </MenuItem>
                <MenuItem component="a" href="#faq" onClick={toggleDrawer(false)}>
                  FAQ
                </MenuItem>
              
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" component={Link} to="/sign-up" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" component={Link} to="/sign-in" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}