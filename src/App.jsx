import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import HomePage from "./pages/HomePage"
import BookingsPage from "./pages/BookingsPage"
import CabinPage from "./pages/CabinPage"
import CheckinPage from "./pages/CheckinPage"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./ui/AppLayout"
import PlanTripPage from "./pages/PlanTripPage"
import ToursPage from "./pages/ToursPage"
import HotelsPage from "./pages/HotelsPage"
import SingleHotel from "./features/tours/SingleHotel"
import BookingDetails from "./features/booking/BookingDetails"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ProtectedRoute from "./ui/ProtectedRoute"
import ChangePasswordPage from "./pages/ChangePasswordPage"
import EmailValidatePage from "./pages/EmailValidatePage"
import AllFlights from "./features/trips/AllFlights"
import CreateTrip from "./features/trips/CreateFlight"
import EditFlight from "./features/trips/EditFlight"
import Account from "./pages/Account"
import TourDetails from "./features/places/TourDetails"
import ToursList from "./features/places/ToursList"
import StatPage from "./pages/StatPage"


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }} />
        <Routes>
          <Route element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
            <Route path='/' element={<HomePage />} />
            <Route path='/planTrip' element={<PlanTripPage />} />
            <Route path='/allFlight' element={<AllFlights />} />
            <Route path='/createFlight' element={<CreateTrip />} />
            <Route path='/editFlight/:flightId' element={<EditFlight />} />
            <Route path='/cabins' element={<CabinPage />} />
            <Route path='/checkin' element={<CheckinPage />} />
            <Route path='/tours' element={<ToursPage />} />
            <Route path='/tours/:tourId' element={<TourDetails />} />
            <Route path='/toursList' element={<ToursList />} />
            <Route path='/hotelsPage' element={<HotelsPage />} />
            <Route path='/hotelsPage/:hotelId' element={<SingleHotel />} />
            <Route path='/bookings' element={<BookingsPage />} />
            <Route path='/bookings/:bookingId' element={<BookingDetails />} />
            <Route path='/statistics' element={<StatPage />} />
            <Route path='/account' element={<Account />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/sendEmail' element={<EmailValidatePage />} />
          <Route path='/resetPassword' element={<ChangePasswordPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </QueryClientProvider>
  )
}

export default App
