import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EventDetail from '../pages/EventDetail';
import BookingPage from '../pages/BookingPage';
import Dashboard from '../pages/Dashboard';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events/:id" element={<EventDetail />} />
        <Route path="events/:id/book" element={<BookingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
