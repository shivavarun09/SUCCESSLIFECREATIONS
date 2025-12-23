import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {Link as link} from "react-router-dom"


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          {/* Heading */}
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              fontSize: 'clamp(2.6rem, 8vw, 3.5rem)',
            }}
          >
            Build your online presence with{' '}
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              clarity & confidence
            </Typography>
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Professional website design, development, maintenance, and digital
            marketing services including SEO and social media management.
          </Typography>

          {/* CTA */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ pt: 3, justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#pricing"
            >
              Book demo
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="#services"
            >
              View services
            </Button>
          </Stack>

          {/* Disclaimer */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center', mt: 1 }}
          >
            Demo sessions are paid and conducted online. Secure payments are
            handled via Razorpay. By proceeding, you agree to our{' '}
            <Link component={link} to="terms" color="primary">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link component={link} to="/refund-policy" color="primary">
              Refund Policy
            </Link>
            .
          </Typography>
        </Stack>

        {/* Visual */}
        {/* <StyledBox id="image" /> */}
      </Container>
    </Box>
  );
}
