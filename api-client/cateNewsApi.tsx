import { CategoryNews } from "../models/categoryNews";
import axiosClient from "./config";

export const getAll = (): Promise<CategoryNews> => {
  return axiosClient.get("/categoryNews");
};

export const remove = (id: string): Promise<CategoryNews> => {
  return axiosClient.delete(`/categoryNews/${id}`);
};

export const add = (news: CategoryNews): Promise<CategoryNews> => {
  return axiosClient.post("/categoryNews", news);
};

export const get = (id: string): Promise<CategoryNews> => {
  return axiosClient.get(`/categoryNews/${id}`);
};
export const update = (news: CategoryNews): Promise<CategoryNews> => {
  return axiosClient.put(`/categoryNews/${news._id}`, news);
};