import clientesService from '../services/clientes.service'
import router from '../router'

export default {
    namespaced : true,
    state: {
        tareas : ['tarea 1', 'tarea 2'],
        clienteFiltro: {
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
        cliente: {
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
        clientes: [],
        error : ''
    },
    mutations: {
        setClientes(state, payload) {
            console.log('setclientes ..');
            console.log(payload);
            state.clientes = payload;
            console.log(state.clientes);
        },
        setCliente(state, cliente) {
            console.log('cliente : ', cliente);
            state.cliente = cliente;
        },
        filtrarClienteEdit(state, payload) {
            state.clienteFiltro.nombre = payload.nombre;
        },
        clearCliente(state, payload){
            console.log('clear  cliente ', payload);
            state.cliente = {
                id: '',
                nombre: '',
                celular: '',
                estado: '1'
            }
            console.log('cliente : ', state.cliente);
        },
        clearFiltro(state, payload){
            console.log('clear filtro ', payload);
            state.clienteFiltro = {
                id: '',
                nombre: '',
                celular: '',
                estado: ''
            }
        },
        generateError(state, payload){
            console.log('generate error : ', payload);
            state.error = payload;
            console.log('error : ', state.error);
        }
    },
    actions: {
        getClientes({ commit, state }) {
            console.log('get clientes');
            console.log('filtro : ', state.clienteFiltro);
            console.log('cliente : ', state.cliente);
            let list = []
            
            clientesService.getAll(0, 100, state.clienteFiltro)
                .then((response) => {
                    response.data.items.forEach(item => {
                        console.log(item);
                        list.push(item);
                    });
                    console.log(list);
                    commit('setClientes', list);
                })
                .catch((err) => {
                    console.log('error : ', err);
                    commit('generateError', err)
                });
            
            commit('setClientes', list);
        },
        getClienteById({ commit }, id) {
            clientesService.get(id)
                .then((response) => {
                    commit('setCliente', response.data);
                });
        },
        editCliente({ commit }, cliente) {
            console.log('editCliente ', cliente);
            clientesService.update(cliente.id, cliente)
                .then((response) => {
                    console.log('update success ', response);
                    commit('filtrarClienteEdit', cliente);
                    router.push('/admin/clientes')
                })
                .catch(err => {
                    console.log('error.. ', err);
                })

        },
        newCliente({commit, state}){
            console.log('new cliente ');
            console.log(state.cliente);
            clientesService.create(state.cliente)
            .then((response)=>{
                    console.log('success : ', response);
                    commit('clearCliente ',null);
                    router.push('/admin/clientes')
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