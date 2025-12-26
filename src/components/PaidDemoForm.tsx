import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Stack, 
  Container 
} from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface DemoFormState {
  name: string;
  email: string;
  mobile: string;
  slot: Dayjs | null;
  message: string;
}

const PaidDemoForm: React.FC = () => {
  const [formData, setFormData] = useState<DemoFormState>({
    name: '',
    email: '',
    mobile: '',
    slot: dayjs().add(1, 'day'), // Defaults to tomorrow
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    setFormData((prev) => ({ ...prev, slot: newValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', {
      ...formData,
      slot: formData.slot?.format('YYYY-MM-DD HH:mm A'),
    });
    // Add payment gateway integration logic here (e.g., Stripe or Razorpay)
    alert('Proceeding to payment...');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
            Book a Paid Demo Session
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Please fill in your details. You will be redirected to the payment gateway after submission.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />

              <TextField
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                label="Mobile Number"
                name="mobile"
                type="tel"
                fullWidth
                required
                value={formData.mobile}
                onChange={handleChange}
              />

              <DateTimePicker
                label="Preferred Demo Slot"
                value={formData.slot}
                onChange={handleDateChange}
                disablePast
                slotProps={{ textField: { fullWidth: true, required: true } }}
              />

              <TextField
                label="Any Message or Requirements"
                name="message"
                multiline
                rows={4}
                fullWidth
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you want to learn..."
              />

              <Button 
                type="submit" 
                variant="contained" 
                size="large" 
                fullWidth 
                sx={{ py: 1.5, fontWeight: 'bold' }}
              >
                Pay & Schedule Demo
              </Button>
            </Stack>
            
          </Box>
          
        </Paper>
        
      </Container>
    </LocalizationProvider>
  );
};

export default PaidDemoForm;