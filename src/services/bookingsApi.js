import { NUM_PAGE } from "../utils/constants";
import supabase from "./supabase";

export async function getBookings(curPage) {
  let query = supabase
    .from("bookings")
    .select("*,guests(fullName,email,nationality),trip(*)", { count: "exact" });

  if (curPage) {
    const from = Number(curPage) === 1 ? 1 : Number(curPage - 1) * NUM_PAGE;
    const to = Number(curPage) * NUM_PAGE;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error(error.message);

  return { data, count };
}

export async function updateStatus(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "checked in", isPaid: true })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function checkout(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "checked out" })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteBooking(id) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function getBookingDetails(id) {
  let { data, error } = await supabase
    .from("bookings")
    .select("*,guests(fullName,email,nationality),trip(*),hotels(*)")
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
}

export async function searchHotelWithName(hotelName) {
  let { data, error } = await supabase.from("hotels").select(hotelName);

  if (error) throw new Error(error.message);
  return data;
}

export async function createBooking(newBookingObj) {
  const newBooking = {
    guestId: newBookingObj.guestId,
    tripId: newBookingObj.tripId,
    hotelId: newBookingObj.hotelId,
  };

  // Use the upsert method to insert or update the booking
  const { data, error } = await supabase
    .from("bookings")
    .upsert([newBooking], { onConflict: ["guestId", "tripId", "hotelId"] });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function statBookings() {
  let { data, error } = await supabase
    .from("bookings")
    .select("*,guests(fullName,email,nationality),trip(*),hotels(*)");

  if (error) throw new Error(error.message);

  return data;
}
