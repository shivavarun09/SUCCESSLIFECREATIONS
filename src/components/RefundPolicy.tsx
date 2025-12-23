import {
  Container,
  Typography,
  Box,
  Divider,
  Paper,
} from '@mui/material';
export default function RefundPolicy() {
  return (
    <>
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
          Refund & Cancellation Policy
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

        {/* Intro */}
        <Typography paragraph color="text.secondary">
          This Refund and Cancellation Policy explains the terms under which
          refunds may be issued for services purchased through our website.
          By completing a payment, you acknowledge and agree to the policy
          outlined below.
        </Typography>

        {/* Paid Demo */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Paid Demo Sessions
          </Typography>
          <Typography paragraph>
            Demo sessions are paid professional services. Once a demo session
            is booked and confirmed, the payment is generally non-refundable.
          </Typography>
          <Typography paragraph>
            If you are unable to attend the scheduled demo, you may request a
            reschedule by informing us at least <strong>24 hours in advance</strong>.
            Rescheduling requests are subject to availability.
          </Typography>
        </Box>

        {/* Services */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Website & Digital Services
          </Typography>
          <Typography paragraph>
            Payments made for website design, development, maintenance,
            digital marketing, SEO, or social media services are
            <strong> non-refundable </strong>
            once work has started or resources have been allocated.
          </Typography>
          <Typography paragraph>
            If a project is cancelled before any work begins, a partial refund
            may be considered after deducting consultation or administrative
            charges.
          </Typography>
        </Box>

        {/* Exceptions */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Exceptional Circumstances
          </Typography>
          <Typography paragraph>
            Refunds may be considered in rare cases where services cannot be
            delivered due to unforeseen circumstances from our side. Such
            requests are reviewed on a case-by-case basis.
          </Typography>
        </Box>

        {/* Razorpay */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Payment Processing
          </Typography>
          <Typography paragraph>
            All payments are securely processed via <strong>Razorpay</strong>.
            Approved refunds, if any, will be credited back to the original
            payment method within <strong>5–7 working days</strong>, depending
            on the payment provider or bank.
          </Typography>
        </Box>

        {/* Contact */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Contact Information
          </Typography>
          <Typography paragraph>
            If you have any questions regarding this Refund Policy, please
            contact us through the details available on our website. We are
            happy to assist you.
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
          This policy is intended to ensure transparency, fairness, and clarity
          for both clients and service providers.
        </Typography>
      </Paper>
    </Container>
    </>
  );
}
