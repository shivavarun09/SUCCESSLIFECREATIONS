import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import SitemarkIcon from './SitemarkIcon.tsx';
import { Link as RouterLink } from 'react-router-dom';

/* ------------------------------------------------------------------ */
/* COPYRIGHT */
/* ------------------------------------------------------------------ */
function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      ©{' '}
  
        SuccessLifeCreations Web & Digital Services
    {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

/* ------------------------------------------------------------------ */
/* FOOTER */
/* ------------------------------------------------------------------ */
export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        {/* Brand + Newsletter */}
        <Box sx={{ flex: 1 }}>
          <SitemarkIcon />

          <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>
            Stay connected
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Get updates on website tips, digital marketing insights, and service
            updates. No spam—only useful information.
          </Typography>

          <InputLabel htmlFor="email-newsletter">Email</InputLabel>
          <Stack direction="row" spacing={1}>
            <TextField
              id="email-newsletter"
              size="small"
              variant="outlined"
              placeholder="Your email address"
              sx={{ width: 240 }}
            />
            <Button variant="contained" size="small">
              Subscribe
            </Button>
          </Stack>
        </Box>

        {/* Services */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Services
          </Typography>
          <Link color="text.secondary">Website Design & Development</Link>
          <Link color="text.secondary">Website Maintenance & Support</Link>
          <Link color="text.secondary">Digital Marketing Campaigns</Link>
          <Link color="text.secondary">SEO & Social Media Management</Link>
        </Box>

        {/* Contact */}
        <Box sx={{ flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" fontWeight="medium">
            Contact
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneRoundedIcon fontSize="small" />
            <Link href="tel:+910000000000" color="text.secondary">
              +91 00000 00000
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <EmailRoundedIcon fontSize="small" />
            <Link
              href="mailto:contact@successlifecreations.com"
              color="text.secondary"
            >
              contact@successlifecreations.com
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="flex-start">
            <LocationOnRoundedIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Hyderabad, Telangana, India
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: 4,
          borderTop: '1px solid',
          borderColor: 'divider',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {/* Legal links (ONLY ONCE) */}
        <Box>
          <Link component={RouterLink} to="/privacy-policy" color="text.secondary">
            Privacy Policy
          </Link>
          {' • '}
          <Link component={RouterLink} to="/terms" color="text.secondary">
            Terms of Service
          </Link>
          {' • '}
          <Link component={RouterLink} to="/refund-policy" color="text.secondary">
            Refund Policy
          </Link>
          <Copyright />
        </Box>

        {/* Social Links */}
        <Stack direction="row" spacing={1}>
          <IconButton href="#" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" aria-label="YouTube">
            <YouTubeIcon />
          </IconButton>
          <IconButton
            href="https://wa.me/910000000000"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
