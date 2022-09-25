import $api from "..";
import qs from "qs";

export async function getToken(
  login: string,
  password: string,
  appId: string,
  appSecret: string
) {
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
  // .then((response) => {
  //   localStorage.setItem("accessToken", response.data.access_token);
  //   localStorage.setItem("refreshToken", response.data.refresh_token);
  //   // getClient();
  // });

  return response;
}
//   .then(() => navigate("/all-extensions"));
// .then(() => {
//   console.log(localStorage.getItem("accessToken"));
//   $api.get(userURL).then((response) => console.log(response));
// });
