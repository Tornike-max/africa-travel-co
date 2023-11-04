import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export async function getHotels() {
  let { data, error } = await supabase.from("hotels").select("*");
  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function createNewHotel(newData) {
  //https://klbmdsduhkkswgqsunoh.supabase.co/storage/v1/object/public/hotel-images/01.jpg
  const imageName = `${Math.random()}-${newData?.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/hotel-images/${imageName}`;

  console.log(imagePath);
  console.log(imageName);
  const { data, error } = await supabase
    .from("hotels")
    .insert([{ ...newData, image: imagePath }])
    .select()
    .single();

  if (error) throw new Error(error.message);

  console.log(newData);
  const { error: storageError } = await supabase.storage
    .from("hotel-images")
    .upload(imageName, newData?.image);

  if (storageError) {
    toast.error(storageError?.message);
  }
  console.log(data);
  return data;
}

export async function deleteHotel(id) {
  const { error } = await supabase.from("hotels").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

export async function bookmarkedHotel(isBookmarked, id) {
  const { data, error } = await supabase
    .from("hotels")
    .update({ bookmarked: isBookmarked })
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error updating bookmark status:", error);
    throw new Error(error.message);
  }

  return data;
}

export async function getHotel(id) {
  let { data, error } = await supabase
    .from("hotels")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function searchHotels(hotelName) {
  const { data, error } = await supabase
    .from("hotels")
    .select("*")
    .ilike("hotelName", `%${hotelName}%`);

  if (error) {
    console.error("Error:", error);
    return;
  }
  return data;
}
