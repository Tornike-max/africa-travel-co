import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export async function getPlaces() {
  let { data, error } = await supabase
    .from("places")
    .select("mainImage,name,id")
    .lte("id", 4);
  if (error) throw new Error(error.message);
  return data;
}

export async function getPlace(id) {
  let { data, error } = await supabase.from("places").select("*").eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}

export async function updateBookStatus({ status, isBooked, id }) {
  const { data, error } = await supabase
    .from("places")
    .update({
      isBooked: isBooked,
      status: status,
    })
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

export async function getAllPlaces() {
  let { data, error } = await supabase.from("places").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function bookmarkedPlace(isBookmarked, id) {
  const { data, error } = await supabase
    .from("places")
    .update({ bookmarked: isBookmarked })
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error updating bookmark status:", error);
    throw new Error(error.message);
  }

  return data;
}

export async function creteNewPlace(newData) {
  // https://klbmdsduhkkswgqsunoh.supabase.co/storage/v1/object/public/tour-images/aldabra
  console.log(newData);

  const mainImageName = `${Math.random()}-${
    newData?.mainImage?.name
  }`.replaceAll("/", "");

  const imageName = `${Math.random()}-${newData?.image?.name}`.replaceAll(
    "/",
    ""
  );

  const mainImagePath = `${supabaseUrl}/storage/v1/object/public/tour-images/${mainImageName}`;

  const imagePath = `${supabaseUrl}/storage/v1/object/public/tour-images/${imageName}`;

  const { data, error } = await supabase
    .from("places")
    .insert([{ ...newData, image: imagePath, mainImage: mainImagePath }])
    .select()
    .single();

  if (error) throw new Error(error.message);

  const [imageUploadResult, mainImageUploadResult] = await Promise.all([
    supabase.storage.from("tour-images").upload(imageName, newData?.image),
    supabase.storage
      .from("tour-images")
      .upload(mainImageName, newData?.mainImage),
  ]);

  // const { error: storageError } = await supabase.storage
  //   .from("tour-images")
  //   .upload(imageName, newData?.image);

  if (imageUploadResult.error) {
    toast.error(imageUploadResult?.error);
  }

  // const { error: storageError1 } = await supabase.storage
  //   .from("tour-images")
  //   .upload(imageName, newData?.mainImage);

  if (mainImageUploadResult.error) {
    toast.error(mainImageUploadResult?.error);
  }

  return data;
}

export async function deletePlace(id) {
  const { error } = await supabase.from("places").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
