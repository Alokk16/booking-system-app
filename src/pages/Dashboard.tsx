// src/pages/Dashboard.tsx
import useSWR from 'swr';
import Layout from '../components/Layout';
import { fetchBookings, fetchEvents } from '../utils/api';
import { Booking, Event } from '../utils/types';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
} from '@mui/material';

export default function Dashboard() {
  // fetch the user's bookings
  const { data: bookings, error: bookingsError } = useSWR<Booking[]>(
    'bookings',
    fetchBookings
  );
  // also fetch all events so we can look up titles
  const { data: events, error: eventsError } = useSWR<Event[]>(
    'events',
    fetchEvents
  );

  if (bookingsError || eventsError) {
    return (
      <Layout>
        <Typography color="error">Failed to load data.</Typography>
      </Layout>
    );
  }

  if (!bookings || !events) {
    return (
      <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  if (bookings.length === 0) {
    return (
      <Layout>
        <Typography>You have no bookings yet.</Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        My Bookings
      </Typography>
      <List>
        {bookings.map((b) => {
          const evt = events.find((e) => e.id === b.eventId);
          return (
            <ListItem key={b.id}>
              <ListItemText
                primary={evt ? evt.title : 'Unknown Event'}
                secondary={new Date(b.createdAt).toLocaleString()}
              />
            </ListItem>
          );
        })}
      </List>
    </Layout>
  );
}
