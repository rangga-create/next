import { BaseResponse } from "@/service/axios";
 
export interface Produk {
  id: number;
  nama: string;
  harga: number;      
  deskripsi: string;  
  updated_at?: string; 
}
export interface ListProdukResponse extends BaseResponse {
  data: Produk[];
  page: number;
  meta: {
    total : number,
    page : number,
    limit: number;
    lastPage: number;
  };
}

export interface ProdukDetailResponse extends BaseResponse {

  data: Produk;

}

export interface FilterProduk {
    Keyword: string; 
  nama: string;
  harga: string;
  dekskripsi: string;
    page: number; // halaman aktif
  limit: number;
}
 
