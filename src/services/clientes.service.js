import http from "./service.http.js";

class clientesService {

  getAll(page, size, data) {
    console.log('page : ', page);
    console.log('size : ', size);
    console.log('data : ', data);
    return http.get(`/clientes?page=${page}&size=${size}&id=${data.id}&codigo=${data.codigo}&nombre=${data.nombre}&celular=${data.celular}&estado=${data.estado}`);
  }

  get(id) {
    return http.get(`/clientes/${id}`);
  }

  create(data) {
    return http.post("/clientes", data);
  }

  update(id, data) {
    return http.put(`/clientes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/clientes/${id}`);
  }

}

export default new clientesService();