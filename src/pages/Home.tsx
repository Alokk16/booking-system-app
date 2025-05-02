// src/pages/Home.tsx
import { Typography, CircularProgress, Box } from '@mui/material';
import useSWR from 'swr';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../utils/api';
import { Event } from '../utils/types';

export default function Home() {
  const { data: events, error } = useSWR<Event[]>('events', fetchEvents);

  if (error) {
    return (
      <Layout>
        <Typography color="error">Failed to load events.</Typography>
      </Layout>
    );
  }

  if (!events) {
    return (
      <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Typography variant="h2" gutterBottom>
        Upcoming Events
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Box>
    </Layout>
  );
}
