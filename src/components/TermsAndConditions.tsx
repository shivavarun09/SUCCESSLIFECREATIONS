import {
  Container,
  Typography,
  Box,
  Divider,
  Paper,
} from '@mui/material';

export default function TermsAndConditions() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, sm: 10 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Header */}
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          textAlign="center"
        >
          Terms & Conditions
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          gutterBottom
        >
          Last updated: {new Date().toLocaleDateString()}
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Introduction */}
        <Typography paragraph color="text.secondary">
          These Terms and Conditions govern your use of this website and the
          services provided by us. By accessing this website or making a
          payment, you agree to comply with and be bound by these terms.
        </Typography>

        {/* Services */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Services Offered
          </Typography>
          <Typography paragraph>
            We provide professional services including website design and
            development, website maintenance, digital marketing, SEO, social
            media management, and paid demo or consultation sessions.
          </Typography>
          <Typography paragraph>
            Service details, timelines, and pricing are discussed and agreed
            upon before the start of any project or session.
          </Typography>
        </Box>

        {/* Paid Services */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Paid Demo & Consultation Sessions
          </Typography>
          <Typography paragraph>
            Demo and consultation sessions are paid services. Payment must be
            completed in advance to confirm the booking.
          </Typography>
          <Typography paragraph>
            Outcomes or results from demo sessions are indicative in nature and
            do not constitute guarantees of specific business results.
          </Typography>
        </Box>

        {/* Payments */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Payments & Billing
          </Typography>
          <Typography paragraph>
            All payments are processed securely through Razorpay or other
            approved payment gateways. You agree to provide accurate payment
            information at the time of purchase.
          </Typography>
          <Typography paragraph>
            Prices are subject to change, but confirmed bookings will not be
            affected by future price updates.
          </Typography>
        </Box>

        {/* Refunds */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Refunds & Cancellations
          </Typography>
          <Typography paragraph>
            Refunds and cancellations are governed by our Refund Policy.
            Please review the Refund Policy page for detailed information
            before making a payment.
          </Typography>
        </Box>

        {/* Responsibilities */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            User Responsibilities
          </Typography>
          <Typography paragraph>
            You agree to provide accurate information, timely feedback, and
            necessary content required for service delivery. Delays in
            communication may impact timelines.
          </Typography>
        </Box>

        {/* Intellectual Property */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Intellectual Property
          </Typography>
          <Typography paragraph>
            All content, designs, code, and materials created during a project
            remain our intellectual property until full payment is received.
            Upon completion of payment, ownership terms will be as agreed.
          </Typography>
        </Box>

        {/* Limitation */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Limitation of Liability
          </Typography>
          <Typography paragraph>
            We shall not be held liable for any indirect, incidental, or
            consequential damages arising from the use of our services or
            website.
          </Typography>
        </Box>

        {/* Changes */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Changes to Terms
          </Typography>
          <Typography paragraph>
            We reserve the right to update or modify these Terms and Conditions
            at any time. Continued use of the website after changes indicates
            acceptance of the updated terms.
          </Typography>
        </Box>

        {/* Contact */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Contact Information
          </Typography>
          <Typography paragraph>
            If you have any questions regarding these Terms & Conditions,
            please contact us through the details provided on our website.
          </Typography>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Footer note */}
        <Typography
          variant="caption"
          color="text.secondary"
          textAlign="center"
          display="block"
        >
          These terms are intended to ensure transparency, professionalism,
          and a fair working relationship between both parties.
        </Typography>
      </Paper>
    </Container>
  );
}
