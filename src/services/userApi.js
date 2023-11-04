import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signUp({ email, password, fullName }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function forgetPassword(email) {
  const { error } = await supabase.auth.api.resetPasswordForEmail(email);
  if (error) {
    throw error;
  }
}

export async function updateUser({ email, fullName }) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    data: {
      fullName,
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function updatePassword({ password }) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}
