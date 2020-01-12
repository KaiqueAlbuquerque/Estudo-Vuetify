import HomeChamados from '../views/chamados/HomeChamados.vue';
import HomeFinanceiro from '../views/financeiro/HomeFinanceiro.vue';

export const rotas = [
    { path: '/chamados/home', name: 'homeChamados', component: HomeChamados },
    { path: '/chamados/novo', name: 'homeChamados', component: HomeChamados },
    { path: '/financeiro/home', name: 'homeFinanceiro', component: HomeFinanceiro },
    
    //Pagina default
    { path: '*', component: HomeChamados }
]