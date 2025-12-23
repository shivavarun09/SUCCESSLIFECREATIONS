import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Note the change to Grid2 for the latest MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import VerifiedRoundedIcon from '@mui/icons-material/Verified';

const items = [
  {
    icon: <LanguageRoundedIcon />,
    title: 'Website Design & Development',
    description:
      'Clean, responsive, and user-friendly websites built using modern technologies, tailored to your business goals.',
  },
  {
    icon: <BuildRoundedIcon />,
    title: 'Maintenance & Technical Support',
    description:
      'Regular updates, bug fixes, performance improvements, and reliable support to keep your website running smoothly.',
  },
  {
    icon: <CampaignRoundedIcon />,
    title: 'Digital Marketing Campaigns',
    description:
      'Well-planned digital marketing campaigns focused on brand visibility, audience engagement, and measurable growth.',
  },
  {
    icon: <TrendingUpRoundedIcon />,
    title: 'SEO & Social Media Management',
    description:
      'Search engine optimization and social media strategies designed to improve reach, consistency, and online presence.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Clear Communication & Transparency',
    description:
      'Regular updates, honest timelines, and clear explanations at every stage of the project or campaign.',
  },
  {
    icon: <VerifiedRoundedIcon />,
    title: 'Reliable & Professional Service',
    description:
      'Commitment to quality work, on-time delivery, and ethical practices that clients can confidently rely on.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="services"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Services
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Delivering Reliable Web & Marketing Services
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  backgroundColor: 'grey.800',
                  border: '1px solid',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  
                  // Hover Effects
                  transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: 'primary.light',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
                    cursor: 'pointer',
                  },
                  
                  // Targeted icon animation on card hover
                  '&:hover .icon-wrapper': {
                    opacity: 1,
                    color: 'primary.light',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Box 
                  className="icon-wrapper"
                  sx={{ 
                    opacity: '50%', 
                    transition: '0.3s ease-in-out',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {item.icon}
                </Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}