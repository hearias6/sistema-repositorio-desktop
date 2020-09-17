import productosService from '../services/productos.service'
import router from '../router'

export default {
    namespaced : true,
    state: {
        productoFiltro: {
            id: '',
            titulo: '',
            descripcion: '',
            estado: ''
        },
        producto: {
            id: '',
            titulo: '',
            descripcion: '',
            estado: '1'
        },
        productos: []
    },
    mutations: {
        setProductos(state, payload) {
            console.log('setProductos ..');
            console.log(payload);
            state.productos = payload;
            console.log(state.productos);
        },
        setProducto(state, producto) {
            state.producto = producto;
        },
        filtrarProductoEdit(state, payload) {
            state.productoFiltro.titulo = payload.titulo;
        },
        clearProducto(state, payload){
            console.log('clear  productos ', payload);
            state.producto = {
                id: '',
                titulo: '',
                descripcion: '',
                estado: ''
            }
            console.log('productos : ', state.producto);
        },
        clearFiltro(state, payload){
            console.log('clear filtro ', payload);
            state.productoFiltro = {
                id: '',
                titulo: '',
                descripcion: '',
                estado: ''
            }
        }
    },
    actions: {
        getProductos({ commit, state }) {
            console.log('get productos');
            console.log('filtro : ', state.productoFiltro);
            console.log('productos : ', state.producto);
            let list = []
            
            productosService.getAll(0, 100, state.productoFiltro)
                .then((response) => {
                    response.data.items.forEach(item => {
                        console.log(item);
                        list.push(item);
                    });
                    console.log(list);
                    commit('setProductos', list);
                })
                .catch((err) => {
                    console.log('error : ', err);
                });
            
            commit('setProductos', list);
        },
        getProductoById({ commit }, id) {
            productosService.get(id)
                .then((response) => {
                    commit('setProducto', response.data);
                });
        },
        editProducto({ commit }, productos) {
            console.log('editProducto ', productos);
            productosService.update(productos.id, productos)
                .then((response) => {
                    console.log('update success ', response);
                    commit('filtrarProductoEdit', productos);
                    router.push('/admin/productos')
                })
                .catch(err => {
                    console.log('error.. ', err);
                })

        },
        newProducto({commit, state}){
            console.log('new productos ');
            console.log(state.producto);
            productosService.create(state.producto)
            .then((response)=>{
                    console.log('success : ', response);
                    commit('clearProducto ',null);
                    router.push('/admin/productos')
                }
            )
            .catch(err=>{
                console.log('err : ', err);
            })
        }
    },
    getters:{

    }

}