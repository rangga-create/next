import { axiosClient } from "@/service/axios";
import { FilterProduk, ListProdukResponse, ProdukDetailResponse } from "./interface";


export const produkService = {
  list: async (params:FilterProduk): Promise<ListProdukResponse> => {
    return await axiosClient.get("/produk/List",{params}).then((n) => n.data);
  },
  
  detail: async (id: number): Promise<ProdukDetailResponse> =>
    axiosClient.get(`/produk/detail/${id}`).then((res) => res.data),

  create: async (payload: any): Promise<any> => {
    return await axiosClient
      .post("/produk/buat", payload)
      .then((n) => n.data);
  },
};
