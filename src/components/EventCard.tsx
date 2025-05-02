// src/components/EventCard.tsx
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Event } from '../utils/types';

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  const { id, title, date, location, imageUrl, price } = event;
  const formattedDate = new Date(date).toLocaleString(undefined, {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Card 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }} color="text.primary">
            ${ (price / 100).toFixed(2) }
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            component={RouterLink} 
            to={`/events/${id}`} 
            size="small"
          >
            View
          </Button>
          <Button 
            component={RouterLink} 
            to={`/events/${id}/book`} 
            size="small" 
            variant="contained"
          >
            Book Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
