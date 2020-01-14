import HomeChamados from '../views/chamados/HomeChamados.vue';
import Dashboard from '../views/chamados/Dashboard.vue';
import HomeFinanceiro from '../views/financeiro/HomeFinanceiro.vue';

export const rotas = [
    { path: '/chamados/home', name: 'homeChamados', component: HomeChamados },
    { path: '/chamados/novo', name: 'novoChamado', component: HomeChamados },
    { path: '/chamados/dashboard', name: 'dashboardChamado', component: Dashboard },

    { path: '/financeiro/home', name: 'homeFinanceiro', component: HomeFinanceiro },
    
    //Pagina default
    { path: '*', component: Dashboard }
]