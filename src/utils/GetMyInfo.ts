import { SendToServer } from "./SendToServer";

export const myAccessToken = sessionStorage.getItem("accessToken");
export const myRefreshToken = sessionStorage.getItem("refreshToken");
export const myUserId = sessionStorage.getItem("user_id");
export const myInfoData =
  sessionStorage.getItem("my_info") &&
  JSON.parse(sessionStorage.getItem("my_info"));

export const GetMyInfo = () => {
  SendToServer({
    path: `mypage`,
    method: "GET",
    needAuth: true,
    callBackSuccess: (response) => {
      sessionStorage.setItem("my_info", JSON.stringify(response?.data));
    },
  });
};
