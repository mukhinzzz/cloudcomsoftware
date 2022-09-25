import $api from "..";
import { AxiosResponse } from "axios";

export async function deleteExtension(
  clientId: string,
  extensionId: string
): Promise<AxiosResponse> {
  return $api.delete(`/api/ver1.0/client/${clientId}/extension/${extensionId}`);
}
