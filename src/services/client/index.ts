import $api from "..";

export async function getClient() {
  const response = await $api.get("/api/ver1.0/user/");
  return response;
}
