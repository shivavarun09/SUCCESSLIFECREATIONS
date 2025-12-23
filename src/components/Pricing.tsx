import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

/* ------------------------------------------------------------------ */
/* PRICING DATA */
/* ------------------------------------------------------------------ */
const pricingPlans = [
  {
    id: 'starter',
    title: 'Starter Website',
    price: '₹12,000',
    description: [
      'Single-page or basic multi-page website',
      'Responsive design (mobile-friendly)',
      'Basic SEO setup',
      'Contact form integration',
      'Deployment & basic support',
    ],
    buttonText: 'Get details',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    highlighted: false,
  },
  {
    id: 'business',
    title: 'Business Website',
    subheader: 'Most Popular',
    price: '₹25,000',
    description: [
      '5–7 page custom website',
      'Modern UI & responsive layout',
      'SEO-friendly structure',
      'Performance optimization',
      '1 month free maintenance',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
    highlighted: true,
  },
  {
    id: 'growth',
    title: 'Digital Growth Plan',
    price: '₹18,000 / month',
    description: [
      'SEO & social media management',
      'Content planning & optimization',
      'Digital marketing campaign support',
      'Monthly performance reporting',
      'Ongoing support & consultation',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    highlighted: false,
  },
];


/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */
export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      {/* Heading */}
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Pricing Plans
        </Typography>
        <Typography color="text.secondary">
          Flexible photography and videography packages designed for weddings,
          events, and family celebrations.
        </Typography>
      </Box>

      {/* Pricing Cards */}
      <Grid container spacing={3} sx={{ justifyContent: 'center', width: '100%' }}>
        {pricingPlans.map((plan) => (
          <Grid
            key={plan.id}
            size={{ xs: 12, sm: plan.highlighted ? 12 : 6, md: 4 }}
          >
            <Card
              sx={[
                {
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 6,
                  },
                },
                plan.highlighted
                  ? (theme) => ({
                      border: 'none',
                      background:
                        'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                      boxShadow: `0 10px 20px hsla(220, 20%, 42%, 0.3)`,
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: `0 14px 28px hsla(220, 20%, 42%, 0.4)`,
                      },
                      ...theme.applyStyles('dark', {
                        background:
                          'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                      }),
                    })
                  : {},
              ]}
            >
              <CardContent>
                {/* Title */}
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    },
                    plan.highlighted ? { color: 'grey.100' } : {},
                  ]}
                >
                  <Typography variant="h6">{plan.title}</Typography>
                  {plan.subheader && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={plan.subheader}
                      color="secondary"
                    />
                  )}
                </Box>

                {/* Price */}
                <Box
                  sx={[
                    { display: 'flex', alignItems: 'baseline' },
                    plan.highlighted ? { color: 'grey.50' } : {},
                  ]}
                >
                  <Typography variant="h3">{plan.price}</Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Features */}
                {plan.description.map((feature) => (
                  <Box
                    key={feature}
                    sx={{
                      py: 0.8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color: plan.highlighted
                          ? 'primary.light'
                          : 'primary.main',
                      }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={plan.highlighted ? { color: 'grey.50' } : {}}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </CardContent>

              {/* Action */}
              <CardActions>
                <Button
                  fullWidth
                  variant={plan.buttonVariant as 'outlined' | 'contained'}
                  color={plan.buttonColor as 'primary' | 'secondary'}
                >
                  {plan.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
