import { AxiosResponse } from "axios";
import $api from "..";

interface IClientResponse {
  id: number;
  login: string;
  admin: boolean;
  dealer_id: number | null;
  client_id: number;
  extension_group_id: number | null;
  extension_id: number | null;
  timezone: string;
  access: string;
  extra_params: string | null;
}

export async function getClient(): Promise<AxiosResponse<IClientResponse>> {
  const response = await $api.get("/api/ver1.0/user/");
  return response;
}
