import axios, { AxiosResponse } from "axios";
import { GymInfo } from "../models/Gym";

export const fetchGymInfo = async (query: string): Promise<GymInfo[]> => {
  const url = "/v1/search/local.json";
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_API_KEY,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_API_SECRET,
      },
      params: {
        query,
        display: 10,
      },
    });

    return response.data.items as GymInfo[];
  } catch (err) {
    // TODO: 에러 코드별 예외처리
    throw new Error();
  }
};
