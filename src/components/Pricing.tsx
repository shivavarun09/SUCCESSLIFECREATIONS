import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import {
  Box,
  Button,
  Card,
  Chip,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid, // Note: MUI moved to Grid2 in newer versions
  Typography
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

/* ------------------------------------------------------------------ */
/* UPDATED PRICING DATA WITH PATHS */
/* ------------------------------------------------------------------ */
const pricingPlans = [
  {
    id: 'starter',
    title: 'Starter Website',
    path: '/contact', // Specific path
    subheader: 'Basic',
    price: '₹12,000',
    description: [
      'Single-page or basic multi-page website',
      'Responsive design (mobile-friendly)',
      'Basic SEO setup',
      'Contact form integration',
      'Deployment & basic support',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    highlighted: false,
  },
  {
    id: 'demo',
    title: 'Book Demo',
    path: '/paid-demo-form', // The link you requested
    subheader: 'Most Popular',
    price: '₹999',
    description: [
      '30-minute paid demo session',
      'Requirement discussion & guidance',
      'Website & digital strategy overview',
      'Clear pricing & roadmap explanation',
      'Q&A and next steps clarity',
    ],
    buttonText: 'Pay & Book Demo',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
    highlighted: true,
  },
  {
    id: 'growth',
    title: 'Digital Growth Plan',
    path: '/services/growth', // Another specific path
    subheader: 'Digital',
    price: '₹18,000 / month',
    description: [
      'SEO & social media management',
      'Content planning & optimization',
      'Digital marketing campaign support',
      'Monthly performance reporting',
      'Ongoing support & consultation',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    highlighted: false,
  },
];

export default function Pricing() {
  const navigate = useNavigate(); // 2. Initialize the hook

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
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' } }}>
        <Typography variant="h4" gutterBottom>Pricing Plans</Typography>
        <Typography color="text.secondary">
          Flexible photography and videography packages designed for weddings, events, and family celebrations.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ justifyContent: 'center', width: '100%' }}>
        {pricingPlans.map((plan) => (
          <Grid key={plan.id} size={{ xs: 12, sm: plan.highlighted ? 12 : 6, md: 4 }}>
            <Card
              sx={[
                {
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                },
                plan.highlighted ? (theme) => ({
                    border: 'none',
                    background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                    boxShadow: `0 10px 20px hsla(220, 20%, 42%, 0.3)`,
                    ...theme.applyStyles('dark', {
                      background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                    }),
                  }) : {},
              ]}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={[{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, plan.highlighted ? { color: 'grey.100' } : {}]}>
                  <Typography variant="h6">{plan.title}</Typography>
                  {plan.subheader && <Chip icon={<AutoAwesomeIcon />} label={plan.subheader} color="secondary" />}
                </Box>

                <Box sx={[{ display: 'flex', alignItems: 'baseline' }, plan.highlighted ? { color: 'grey.50' } : {}]}>
                  <Typography variant="h3">{plan.price}</Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {plan.description.map((feature) => (
                  <Box key={feature} sx={{ py: 0.8, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleRoundedIcon sx={{ width: 20, color: plan.highlighted ? 'primary.light' : 'primary.main' }} />
                    <Typography variant="subtitle2" sx={plan.highlighted ? { color: 'grey.50' } : {}}>{feature}</Typography>
                  </Box>
                ))}
              </CardContent>

              <CardActions>
                {/* 3. Add onClick handler to navigate */}
                <Button
                  fullWidth
                  variant={plan.buttonVariant as 'outlined' | 'contained'}
                  color={plan.buttonColor as 'primary' | 'secondary'}
                  onClick={() => navigate(plan.path)}
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