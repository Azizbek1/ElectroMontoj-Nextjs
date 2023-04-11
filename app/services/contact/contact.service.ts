import api from "api";
import { postContact } from "../configs/api.config";

export const ContactService = {
  async create(data: any) {
    return await api.post<any>(postContact(`/create`), data);
  },
 
};
