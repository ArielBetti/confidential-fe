// api: requesters
import { requester } from "../api/requester";

// end-poins
import { ENDPOINTS } from "../api/endpoints";

export const deleteMessage = async (id: string): Promise<{ status: number }> => {
  const { data } = await requester()
    .delete<{ status: number }>(`${ENDPOINTS.message}/${id}`, {});

  return data;
};
