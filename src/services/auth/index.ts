import $api from "..";
import qs from "qs";
import { AxiosResponse } from "axios";

interface ITokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}

export async function getToken(
  login: string,
  password: string,
  appId: string,
  appSecret: string
): Promise<AxiosResponse<ITokenResponse>> {
  const response = $api.post(
    "/oauth/token",
    qs.stringify({
      grant_type: "password",
      username: login,
      password: password,
      client_id: appId,
      client_secret: appSecret,
    })
  );
  return response;
}
