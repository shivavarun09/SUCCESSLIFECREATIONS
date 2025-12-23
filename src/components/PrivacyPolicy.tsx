import {
  Container,
  Typography,
  Box,
  Divider,
  Paper,
} from '@mui/material';

export default function PrivacyPolicy() {
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
          Privacy Policy
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
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you visit our website or use our services.
          By using this website, you agree to the practices described below.
        </Typography>

        {/* Information Collected */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Information We Collect
          </Typography>
          <Typography paragraph>
            We may collect personal information such as your name, email
            address, phone number, and service requirements when you contact
            us, book a demo, or make a payment.
          </Typography>
          <Typography paragraph>
            We may also collect non-personal information such as browser type,
            device details, and website usage data to improve user experience.
          </Typography>
        </Box>

        {/* Usage */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            How We Use Your Information
          </Typography>
          <Typography paragraph>
            Your information is used only for legitimate business purposes,
            including responding to inquiries, delivering services, processing
            payments, scheduling demo sessions, and improving our offerings.
          </Typography>
          <Typography paragraph>
            We do not sell, rent, or trade your personal information to third
            parties.
          </Typography>
        </Box>

        {/* Payments */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Payment Information
          </Typography>
          <Typography paragraph>
            All payments on this website are securely processed through trusted
            third-party payment gateways such as <strong>Razorpay</strong>.
            We do not store or have access to your card, UPI, or banking details.
          </Typography>
        </Box>

        {/* Cookies */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Cookies & Tracking
          </Typography>
          <Typography paragraph>
            This website may use cookies or similar technologies to enhance
            functionality and analyze website traffic. You can control cookie
            preferences through your browser settings.
          </Typography>
        </Box>

        {/* Data Security */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Data Security
          </Typography>
          <Typography paragraph>
            We take reasonable measures to protect your personal information
            from unauthorized access, misuse, or disclosure. However, no method
            of online transmission is completely secure.
          </Typography>
        </Box>

        {/* Third Party */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Third-Party Links
          </Typography>
          <Typography paragraph>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those websites.
            We encourage you to review their privacy policies separately.
          </Typography>
        </Box>

        {/* Policy Updates */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Changes to This Policy
          </Typography>
          <Typography paragraph>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </Typography>
        </Box>

        {/* Contact */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us using the details provided on our website.
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
          This policy is intended to protect user privacy while ensuring
          transparency in how information is handled.
        </Typography>
      </Paper>
    </Container>
  );
}
