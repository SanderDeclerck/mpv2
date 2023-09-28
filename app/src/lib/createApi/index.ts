import axios from "axios";
import { z } from "zod";

const apiUrl = (url: string) => import.meta.env.VITE_API + url;

export const get = <ZResponse extends z.ZodTypeAny, ZResponseType = z.infer<ZResponse>>(url: string) => {
  return {
    returns: async (responseSchema: ZResponse): Promise<ZResponseType> => {
      const response = await axios.get(apiUrl(url));
      const parsedResponse = responseSchema.parse(response.data);
      return parsedResponse;
      // Todo: handle errors
      // Todo: status codes
    },
  };
};

export const post = <
  ZBody extends z.ZodTypeAny,
  ZResponse extends z.ZodTypeAny,
  ZBodyType = z.infer<ZBody>,
  ZResponseType = z.infer<ZResponse>
>(
  url: string
) => {
  return {
    body: (body: ZBodyType, bodySchema: ZBody) => {
      return {
        returns: async (responseSchema: ZResponse): Promise<ZResponseType> => {
          const parsedBody = bodySchema.parse(body);
          const response = await axios.post(apiUrl(url), parsedBody);
          const parsedResponse = responseSchema.parse(response.data);
          return parsedResponse;
          // Todo: handle errors
          // Todo: status codes
        },
      };
    },
  };
};
