import axios from "axios";
import { z } from "zod";

const apiUrl = (url: string) => "http://localhost:4000" + url; //import.meta.env.VITE_API + url;

const method = {
  get: "get",
  post: "post",
} as const;
export interface ApiFn {
  url: string;
  method: keyof typeof method;
}

export interface PostFn<ZBodyType, ZResponseType> extends ApiFn {
  (body: ZBodyType): Promise<ZResponseType>;
}

export interface GetFn<ZResponseType> extends ApiFn {
  (): Promise<ZResponseType>;
}

export const setState = async (state: string) => {
  await fetch(apiUrl("/setState?state=" + state));
};

export type Body<P> = P extends PostFn<infer ZBodyType, unknown>
  ? ZBodyType
  : never;

const post = (url: string) => {
  return {
    body: <ZBody extends z.ZodTypeAny, ZBodyType = z.infer<ZBody>>(
      bodySchema: ZBody,
    ) => {
      return {
        returns: <
          ZResponse extends z.ZodTypeAny,
          ZResponseType = z.infer<ZResponse>,
        >(
          responseSchema: ZResponse,
        ): PostFn<ZBodyType, ZResponseType> => {
          const callFn = async (body: ZBodyType) => {
            const parsedBody = bodySchema.parse(body);
            const response = await axios.post(apiUrl(url), parsedBody);
            const parsedResponse = responseSchema.parse(response.data);
            return parsedResponse;
          };
          callFn.url = url;
          callFn.method = method.post;

          return callFn;
          // Todo: handle errors
          // Todo: status codes
        },
      };
    },
  };
};

const get = (url: string) => {
  return {
    returns: <
      ZResponse extends z.ZodTypeAny,
      ZResponseType = z.infer<ZResponse>,
    >(
      responseSchema: ZResponse,
    ): GetFn<ZResponseType> => {
      const callFn = async () => {
        const response = await axios.get(apiUrl(url));
        const parsedResponse = responseSchema.parse(response.data);
        return parsedResponse;
      };
      callFn.url = url;
      callFn.method = method.get;

      return callFn;
      // Todo: handle errors
      // Todo: status codes
    },
  };
};

export const api = { get, post };
