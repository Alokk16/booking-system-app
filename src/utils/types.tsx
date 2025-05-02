// src/utils/types.ts
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  price: number;
}

export interface Booking {
  id: string;
  eventId: string;
  userId: string;
  paid: boolean;
  createdAt: string;
}
