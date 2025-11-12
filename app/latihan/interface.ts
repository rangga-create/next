import { BaseResponse } from "@/service/axios";
 
export interface Latihan {
  id: number;
  title: string;
  name: string;
  alamat: string;
  umur: number;
  updated_at: Date;
}
 
export interface ListLatihanResponse extends BaseResponse {
  data: Latihan[];

}

export interface LatihanDetailResponse extends BaseResponse {

  data: Latihan;

}

export interface FilterLatihan {
  title: string;
  name: string;
  alamat: string;
  umur: string;
}
 
