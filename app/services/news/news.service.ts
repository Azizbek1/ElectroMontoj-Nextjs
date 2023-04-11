import api from "api";
import { getNewsUrl } from "api/configs";

export const NewsService = {
  async getAll() {
    return await api.get<any>(getNewsUrl(`/index`));
  },
  async show(id: any) {
    return await api.get<any>(getNewsUrl(`/show/${id}`));
  },
};
