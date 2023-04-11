import api from "api";
import { getServisesUrl } from "api/configs";

export const ServisesService = {
  async getAll() {
    return await api.get<any>(getServisesUrl(`/index`));
  },
  async show(id: any) {
    return await api.get<any>(getServisesUrl(`/show/${id}`));
  },
};
