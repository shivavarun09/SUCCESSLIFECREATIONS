import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/* ------------------------------------------------------------------ */
/* FAQ DATA */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    id: 'panel1',
    question: 'What services do you provide?',
    answer: (
      <>
        We provide website design and development, website maintenance and
        support, digital marketing campaigns, SEO, and social media management
        services for individuals, startups, and small businesses.
      </>
    ),
  },
  {
    id: 'panel2',
    question: 'How can I get started or request a quote?',
    answer: (
      <>
        You can contact us through email or phone with your requirements.
        Based on your project scope or marketing needs, we will share a clear
        plan, timeline, and pricing details.
      </>
    ),
  },
  {
    id: 'panel3',
    question: 'Do you offer customized website or marketing packages?',
    answer: (
      <>
        Yes, all our services can be customized based on your goals, budget,
        and timeline. We recommend solutions that are practical and suitable
        for your business needs.
      </>
    ),
  },
  {
    id: 'panel4',
    question: 'What is the typical project timeline?',
    answer: (
      <>
        Website development timelines depend on the project scope and features.
        Basic websites usually take 1–2 weeks, while larger projects may take
        longer. Marketing and SEO services are ongoing and discussed upfront.
      </>
    ),
  },
  {
    id: 'panel5',
    question: 'Do you provide support after project delivery?',
    answer: (
      <>
        Yes, we provide post-launch support and maintenance options.
        Support duration and scope are clearly communicated before starting
        the project to ensure transparency.
      </>
    ),
  },
  {
    id: 'panel6',
    question: 'How can I contact you for more information?',
    answer: (
      <>
        You can reach us via email at{' '}
        <Link href="mailto:contact@email.com">contact@email.com</Link>{' '}
        or contact us directly through the details provided on our website.
        We’ll be happy to discuss your requirements.
      </>
    ),
  },
];


/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */
export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>

      <Box sx={{ width: '100%' }}>
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded.includes(faq.id)}
            onChange={handleChange(faq.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faq.id}-content`}
              id={`${faq.id}-header`}
            >
              <Typography component="span" variant="subtitle2">
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
