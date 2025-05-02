// src/pages/BookingPage.tsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import Layout from '../components/Layout';
import { fetchEventById, createBooking } from '../utils/api';
import { Event } from '../utils/types';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';

export default function BookingPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: event, error } = useSWR<Event | undefined>(
    () => (id ? ['event', id] : null),
    () => fetchEventById(id!)
  );
  const [loading, setLoading] = useState(false);

  if (error) {
    return (
      <Layout>
        <Typography color="error">Error loading event.</Typography>
      </Layout>
    );
  }

  if (!event) {
    return (
      <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  const handleBook = async () => {
    setLoading(true);
    await createBooking(event.id);
    setLoading(false);
    navigate('/dashboard');
  };

  return (
    <Layout>
      <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          Book: {event.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Price: ${(event.price / 100).toFixed(2)}
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }}>
          <TextField
            label="Your Name"
            fullWidth
            disabled
            value="John Doe"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Your Email"
            fullWidth
            disabled
            value="john@example.com"
            sx={{ mb: 4 }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleBook}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : `Confirm & Pay $${(event.price/100).toFixed(2)}`}
          </Button>
        </Box>
      </Paper>
    </Layout>
  );
}
