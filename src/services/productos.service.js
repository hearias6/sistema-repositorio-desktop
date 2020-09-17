import http from "./service.http.js";

class productosService {

  getAll(page, size, data) {
    console.log('page : ', page);
    console.log('size : ', size);
    console.log('data : ', data);
    return http.get(`/productos?page=${page}&size=${size}&id=${data.id}&titulo=${data.titulo}&descripcion=${data.descripcion}&estado=${data.estado}`);
  }

  get(id) {
    return http.get(`/productos/${id}`);
  }

  create(data) {
    return http.post("/productos", data);
  }

  update(id, data) {
    return http.put(`/productos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/productos/${id}`);
  }

}

export default new productosService();