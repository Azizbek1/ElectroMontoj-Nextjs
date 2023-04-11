import api from "api";
import {  getPortUrl } from "api/configs";

export const PortfolioService = {
  async getAll() {
    return await api.get<any>(getPortUrl(`/index`));
  },
  async show(id: any) {
    return await api.get<any>(getPortUrl(`/show/${id}`));
  },
};
