import $api from "..";

export async function deleteExtension(clientId: string, extensionId: string) {
  $api.delete(`/api/ver1.0/client/${clientId}/extension/${extensionId}`);
}
