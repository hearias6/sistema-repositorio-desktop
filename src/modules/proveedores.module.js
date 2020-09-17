import proveedoresService from '../services/proveedores.service'
import router from '../router'

export default {
    namespaced : true,
    state: {
        tareas : ['tarea 1', 'tarea 3'],
        proveedorFiltro: {
            id: '',
            codigo : '',
            nombre: '',
            celular: '',
            ciudad : '',
            barrio : '',
            direccion : '',
            negocio : '',
            estado: ''
        },
        Proveedor: {
            id: '',
            codigo : '',
            nombre: '',
            celular: '',
            ciudad : '1',
            barrio : '',
            direccion : '',
            negocio : '',
            estado: '1'
        },
        proveedores: []
    },
    mutations: {
        setProveedores(state, payload) {
            console.log('setproveedores ..');
            console.log(payload);
            state.proveedores = payload;
            console.log(state.proveedores);
        },
        setProveedor(state, Proveedor) {
            console.log('Proveedor : ', Proveedor);
            state.Proveedor = Proveedor;
        },
        filtrarProveedorEdit(state, payload) {
            state.proveedorFiltro.nombre = payload.nombre;
        },
        clearProveedor(state, payload){
            console.log('clear  Proveedor ', payload);
            state.Proveedor = {
                id: '',
                codigo : '',
                nombre: '',
                celular: '',
                ciudad : '1',
                barrio : '',
                direccion : '',
                negocio : '',
                estado: '1'
            }
            console.log('Proveedor : ', state.Proveedor);
        },
        clearFiltro(state, payload){
            console.log('clear filtro ', payload);
            state.proveedorFiltro = {
                id: '',
                nombre: '',
                celular: '',
                estado: ''
            }
        }
    },
    actions: {
        getproveedores({ commit, state }) {
            console.log('get proveedores');
            console.log('filtro : ', state.proveedorFiltro);
            console.log('Proveedor : ', state.Proveedor);
            let list = []
            
            proveedoresService.getAll(0, 100, state.proveedorFiltro)
                .then((response) => {
                    response.data.items.forEach(item => {
                        console.log(item);
                        list.push(item);
                    });
                    console.log(list);
                    commit('setProveedores', list);
                })
                .catch((err) => {
                    console.log('error : ', err);
                });
            
            commit('setproveedores', list);
        },
        getProveedorById({ commit }, id) {
            proveedoresService.get(id)
                .then((response) => {
                    commit('setProveedor', response.data);
                });
        },
        editProveedor({ commit }, Proveedor) {
            console.log('editProveedor ', Proveedor);
            proveedoresService.update(Proveedor.id, Proveedor)
                .then((response) => {
                    console.log('update success ', response);
                    commit('filtrarProveedorEdit', Proveedor);
                    router.push('/admin/proveedores')
                })
                .catch(err => {
                    console.log('error.. ', err);
                })

        },
        newProveedor({commit, state}){
            console.log('new Proveedor ');
            console.log(state.Proveedor);
            proveedoresService.create(state.Proveedor)
            .then((response)=>{
                    console.log('success : ', response);
                    commit('clearProveedor ',null);
                    router.push('/admin/proveedores')
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