// api: requesters
import { requester } from "../api/requester";

// end-poins
import { ENDPOINTS } from "../api/endpoints";

// types
import type { TCreateMessageResponse } from "../interfaces";

export const getMessage = async (id: string): Promise<TCreateMessageResponse> => {
  const { data } = await requester()
    .get<TCreateMessageResponse>(`${ENDPOINTS.message}/${id}`);

  return data;
};
