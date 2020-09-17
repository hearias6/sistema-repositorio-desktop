import http from "./service.http.js";

class ProveedoresService {

  getAll(page, size, data) {
    console.log('page : ', page);
    console.log('size : ', size);
    console.log('data : ', data);
    return http.get(`/Proveedores?page=${page}&size=${size}&id=${data.id}&codigo=${data.codigo}&nombre=${data.nombre}&celular=${data.celular}&estado=${data.estado}`);
  }

  get(id) {
    return http.get(`/Proveedores/${id}`);
  }

  create(data) {
    return http.post("/Proveedores", data);
  }

  update(id, data) {
    return http.put(`/Proveedores/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Proveedores/${id}`);
  }

}

export default new ProveedoresService();