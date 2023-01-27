// api: requesters
import { requester } from "../api/requester";

// end-poins
import { ENDPOINTS } from "../api/endpoints";

// types
import type { TCreateMessage, TCreateMessageResponse } from "../interfaces";

export const postMessage = async (message: TCreateMessage): Promise<TCreateMessageResponse> => {
  const { data } = await requester()
    .post<TCreateMessageResponse>(ENDPOINTS.createMessage, message);

  return data;
};
