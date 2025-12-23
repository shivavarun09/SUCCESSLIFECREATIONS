import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Using Grid2 to support the size prop correctly
import { useColorScheme } from '@mui/material/styles';

const userTestimonials = [
  {
    avatar: <Avatar alt="Rohit Sharma" src="/static/images/avatar/1.jpg" />,
    name: 'Rohit Sharma',
    occupation: 'Startup Founder',
    testimonial:
      "They designed and developed our business website exactly as we discussed. The layout is clean, responsive, and easy for our customers to navigate. Communication was clear throughout the project, and delivery was on time.",
  },
  {
    avatar: <Avatar alt="Ananya Reddy" src="/static/images/avatar/2.jpg" />,
    name: 'Ananya Reddy',
    occupation: 'Small Business Owner',
    testimonial:
      "I approached them for website redesign and basic SEO support. They explained everything patiently and suggested improvements that actually made sense. The website looks professional now and performs much better than before.",
  },
  {
    avatar: <Avatar alt="Suresh Kumar" src="/static/images/avatar/3.jpg" />,
    name: 'Suresh Kumar',
    occupation: 'Retail Business Owner',
    testimonial:
      "They helped us with website maintenance and digital marketing campaigns. Regular updates and transparent reporting made it easy to track progress. Overall, a reliable and professional experience.",
  },
  {
    avatar: <Avatar alt="Priya Mehta" src="/static/images/avatar/4.jpg" />,
    name: 'Priya Mehta',
    occupation: 'Freelancer',
    testimonial:
      "I needed a personal portfolio website, and they delivered exactly what I wanted. The design is simple, fast, and mobile-friendly. They were very supportive even after the site went live.",
  },
  {
    avatar: <Avatar alt="Amit Verma" src="/static/images/avatar/5.jpg" />,
    name: 'Amit Verma',
    occupation: 'Marketing Manager',
    testimonial:
      "We worked with them on SEO and social media management. Their approach was practical and realistic, without any false promises. The content and optimization were handled professionally.",
  },
  {
    avatar: <Avatar alt="Neha Joshi" src="/static/images/avatar/6.jpg" />,
    name: 'Neha Joshi',
    occupation: 'Interior Designer',
    testimonial:
      "They built a website for my design studio and guided me on online presence. I appreciated their honesty, clear timelines, and attention to detail. A smooth and stress-free experience.",
  },
];

const darkModeLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const lightModeLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

export default function Testimonials() {
  const { mode, systemMode } = useColorScheme();

  let logos;
  const currentMode = mode === 'system' ? systemMode : mode;
  logos = currentMode === 'light' ? lightModeLogos : darkModeLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Testimonials
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          See what our clients say about our web development and digital marketing services, 
          and how we help businesses build a strong and reliable online presence.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                  borderColor: 'primary.main',
                  boxShadow: (theme) => 
                    theme.palette.mode === 'light' 
                    ? '0 10px 20px rgba(0,0,0,0.1)' 
                    : '0 10px 20px rgba(0,0,0,0.5)',
                  cursor: 'default',
                },
                // Triggering logo effect on card hover
                '&:hover .testimonial-logo': {
                  opacity: 0.8,
                  transform: 'scale(1.1)',
                }
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary', fontStyle: 'italic' }}
                >
                  "{testimonial.testimonial}"
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2, // adding padding for the logo
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <Box
                    component="img"
                    className="testimonial-logo"
                    src={logos[index]}
                    alt={`Logo ${index + 1}`}
                    sx={{
                        width: '64px',
                        opacity: 0.3,
                        transition: 'all 0.3s ease-in-out',
                        alignSelf: 'center'
                    }}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}