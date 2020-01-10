import HomeChamados from '../views/chamados/HomeChamados.vue';

export const rotas = [
    { path: '/chamados/home', name: 'homeChamados', component: HomeChamados },
    
    //Pagina default
    { path: '*', component: HomeChamados }
]