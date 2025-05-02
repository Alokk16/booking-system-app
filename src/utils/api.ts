// src/utils/api.ts
import { Event, Booking } from './types';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'React Conf 2025',
    description: 'Annual conference for everything React.',
    date: '2025-06-15T09:00:00Z',
    location: 'San Francisco, CA',
    imageUrl: 'https://source.unsplash.com/random/800x600?conference',
    price: 49900,
  },
  // …more events
];

let mockBookings: Booking[] = [];

export async function fetchEvents(): Promise<Event[]> {
  return new Promise((res) => setTimeout(() => res(mockEvents), 300));
}

export async function fetchEventById(id: string): Promise<Event | undefined> {
  return new Promise((res) =>
    setTimeout(() => res(mockEvents.find((e) => e.id === id)), 300)
  );
}

export async function createBooking(eventId: string): Promise<Booking> {
  return new Promise((res) => {
    setTimeout(() => {
      const b: Booking = {
        id: Date.now().toString(),
        eventId,
        userId: 'user-123',
        paid: true,
        createdAt: new Date().toISOString(),
      };
      mockBookings.push(b);
      res(b);
    }, 300);
  });
}

export async function fetchBookings(): Promise<Booking[]> {
  return new Promise((res) =>
    setTimeout(() => res(mockBookings), 300)
  );
}
