import axios from "axios";
import { z } from "zod";

const apiUrl = (url: string) => "http://localhost:4000" + url; //import.meta.env.VITE_API + url;

export const get = (url: string) => {
  return {
    returns: async <ZResponse extends z.ZodTypeAny, ZResponseType = z.infer<ZResponse>>(
      responseSchema: ZResponse
    ): Promise<ZResponseType> => {
      const response = await axios.get(apiUrl(url));
      const parsedResponse = responseSchema.parse(response.data);
      return parsedResponse;
      // Todo: handle errors
      // Todo: status codes
    },
  };
};

export interface PostFn<ZBodyType, ZResponseType> {
  (body: ZBodyType): Promise<ZResponseType>;
  url: string;
}

export type Body<P> = P extends PostFn<infer ZBodyType, unknown> ? ZBodyType : never;

export const post = (url: string) => {
  return {
    body: <ZBody extends z.ZodTypeAny, ZBodyType = z.infer<ZBody>>(bodySchema: ZBody) => {
      return {
        returns: <ZResponse extends z.ZodTypeAny, ZResponseType = z.infer<ZResponse>>(
          responseSchema: ZResponse
        ): PostFn<ZBodyType, ZResponseType> => {
          const callFn = async (body: ZBodyType) => {
            const parsedBody = bodySchema.parse(body);
            const response = await axios.post(apiUrl(url), parsedBody);
            const parsedResponse = responseSchema.parse(response.data);
            return parsedResponse;
          };
          callFn.url = url;

          return callFn;
          // Todo: handle errors
          // Todo: status codes
        },
      };
    },
  };
};
