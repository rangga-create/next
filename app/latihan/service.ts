import { axiosClient } from "@/service/axios";
import { FilterLatihan, ListLatihanResponse } from "./interface";
import { LatihanDetailResponse } from "./interface";
// import { create } from "domain";

export const latihanService = {
  list: async (params:FilterLatihan): Promise<ListLatihanResponse> => {
    return await axiosClient.get("/latihan/list",{params}).then((n) => n.data);
  },
  
  detail: async (id: number): Promise<LatihanDetailResponse> =>
    axiosClient.get(`/latihan/detail/${id}`).then((res) => res.data),

  create: async (payload: any): Promise<any> => {
    return await axiosClient
      .post("/latihan/create", payload)
      .then((n) => n.data);
  },
};
