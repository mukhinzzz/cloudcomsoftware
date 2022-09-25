import $api from "..";

export async function getExtensions(clientId: string) {
  const response = await $api.get(`/api/ver1.0/client/${clientId}/extension/`);

  return response;
}

// import { get } from '..';

// export const getCategories = async () => {
//   const response = await get({
//     url: '/categories'
//   });

//   return response;
// };
