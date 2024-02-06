import axios from "axios";

type SendToServerOptionType = {
  path: string;
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  data?: {};
  callBackSuccess?: CallableFunction;
  callBackFailed?: CallableFunction;
  needAuth?: boolean;
  headerCustom?: any;
};

const TokenRefresh = async () => {
  try {
    const refreshTokens = await axios.put(
      process.env.VITE_API_URL + "refresh",
      {
        user_id: sessionStorage.getItem("user_id"),
        refresh_token: sessionStorage.getItem("refreshToken"),
      }
    );
    sessionStorage.setItem("user_id", refreshTokens?.data?.user_id);
    sessionStorage.setItem("accessToken", refreshTokens?.data?.access_token);
    sessionStorage.setItem("refreshToken", refreshTokens?.data?.refresh_token);
    alert("만료된 토큰입니다. 다시 시도해주세요.");
  } catch (error) {
    console.log(error);
    alert("유효하지 않은 접근입니다.");
    window.location.href = "/main";
  }
};

export const SendToServer = async (options: SendToServerOptionType) => {
  const {
    path,
    method,
    data,
    callBackSuccess,
    callBackFailed,
    needAuth,
    headerCustom,
  } = options;

  const headers = { "Content-Type": "application/json", ...headerCustom };

  if (needAuth) {
    if (!sessionStorage.getItem("accessToken")) return;
    headers["Authorization"] = `Bearer ${sessionStorage.getItem(
      "accessToken"
    )}`;
  }

  try {
    const response = await axios({
      url: `${process.env.VITE_API_URL}api/${path}`,
      method,
      data,
      headers,
    });
    callBackSuccess && callBackSuccess(response);
  } catch (error) {
    if (error?.response?.data?.statusCode === 401) {
      TokenRefresh();
    } else {
      callBackFailed
        ? callBackFailed(error)
        : alert(error?.response?.data?.message);
      console.log(error);
    }
  }
};

// axios 를 따로 공용 함수로 묶어서 분류한 이유

// 1. axios 를 통신이 필요한 곳 마다 따로 불러오지 않아도 된다.
// 2. base url 변경할 때 이 파일에서만 BASE_URL_LOCAL 을 BASE_URL_PRODUCT 로만 변경해주면 된다.
// 3. 결과에 따른 커스텀 스타일 모달 창 띄우기, 리프래시 토큰 처리등을 해당 함수 내부에서 한 번에 처리해서 다른 파일에 코드가 길어지는 것을 방지하려고 한다.
// 4. 토큰 리플래시 로직까지 함께 처리한다.
