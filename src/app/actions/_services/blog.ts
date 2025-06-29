import axios, { AxiosResponse } from "axios";
const ApiUrl = process.env.NEXT_PUBLIC_CLASS_API;
const http = axios.create({
  baseURL: ApiUrl,
  timeout: 20000,
});

http.interceptors.response.use((res: AxiosResponse) => res.data);

type CreateBlogPayloadType = {
  title: string;
  metaTitle: string;
  slug: string;
};
export const createBlogApi = (
  payload: CreateBlogPayloadType
): Promise<null> => {
  return http.post("/blog/category", payload);
};
