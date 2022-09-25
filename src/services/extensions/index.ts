import $api from "..";
import { AxiosResponse } from "axios";

export interface IExtension {
  id: number;
  name: string;
  domain: string;
  type: string;
  status: string | null;
  label: string | null;
  client_id: number;
  extension_group_id: number | null;
  extra_params: string | null;
  dial_rule_limit: number | null;
  caller_id_name: string | null;
  create_date: string;
  did_as_transfer_caller_id: string | null;
  dial_rule_id: number | null;
  ani_rfc3325: boolean;
  message_did: string | null;
  ani: string | null;
}

export async function getExtensions(
  clientId: string
): Promise<AxiosResponse<IExtension[]>> {
  const response = await $api.get(`/api/ver1.0/client/${clientId}/extension/`);

  return response;
}
