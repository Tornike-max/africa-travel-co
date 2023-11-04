import supabase from "./supabase";

export async function getTrips() {
  let { data, error } = await supabase.from("trip").select("*");
  if (error) throw new Error(error.message);

  return data;
}

export async function getSignleTrip(id) {
  let { data, error } = await supabase
    .from("trip")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function createTrip(newFlight) {
  console.log(newFlight);
  const { data, error } = await supabase
    .from("trip")
    .insert([{ ...newFlight }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteFlight(id) {
  const { error } = await supabase.from("trip").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function updateFlight(newFlight, flightId) {
  console.log(newFlight, flightId);
  const { data, error } = await supabase
    .from("trip")
    .update({ ...newFlight })
    .eq("id", flightId)
    .select();
  if (error) throw new Error(error.message);
  return data;
}
