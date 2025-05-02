import { useParams, Link as RouterLink } from 'react-router-dom';
import useSWR from 'swr';
import Layout from '../components/Layout';
import { fetchEventById } from '../utils/api';
import { Event } from '../utils/types';
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  CardMedia,
} from '@mui/material';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: event, error } = useSWR<Event | undefined>(
    () => (id ? ['event', id] : null),
    () => fetchEventById(id!)
  );

  if (error) {
    return (
      <Layout>
        <Typography color="error">Failed to load event.</Typography>
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

  const formattedDate = new Date(event.date).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        {event.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {formattedDate} — {event.location}
      </Typography>
      <CardMedia
        component="img"
        height="360"
        image={event.imageUrl}
        alt={event.title}
        sx={{ borderRadius: 2, mb: 3 }}
      />
      <Typography variant="body1" paragraph>
        {event.description}
      </Typography>
      <Button
        component={RouterLink}
        to={`/events/${event.id}/book`}
        variant="contained"
        size="large"
      >
        Book Now — ${(event.price / 100).toFixed(2)}
      </Button>
    </Layout>
  );
}
