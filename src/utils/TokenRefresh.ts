import { SendToServer } from "./SendToServer";

export const TokenRefresh = async () => {
  try {
    if (
      !sessionStorage.getItem("user_id") ||
      !sessionStorage.getItem("accessToken")
    )
      return;
    const postData = {
      user_id: sessionStorage.getItem("user_id"),
      refresh_token: sessionStorage.getItem("accessToken"),
    };
    SendToServer({
      path: "refresh",
      method: "PUT",
      data: postData,
    });
  } catch (error) {
    console.log(error);
  }
};
