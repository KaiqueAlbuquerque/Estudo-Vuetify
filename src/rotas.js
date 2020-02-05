import HomeChamados from '../views/chamados/HomeChamados.vue';
import DashboardChamado from '../views/chamados/DashboardChamado.vue';

import HomeFinanceiro from '../views/financeiro/HomeFinanceiro.vue';
import DashboardFinanceiro from '../views/financeiro/DashboardFinanceiro.vue';

export const rotas = [
    { path: '/chamados/home', name: 'homeChamados', component: HomeChamados },
    { path: '/chamados/novo', name: 'novoChamado', component: HomeChamados },
    { path: '/chamados/dashboard', name: 'dashboardChamado', component: DashboardChamado },

    { path: '/financeiro/home', name: 'homeFinanceiro', component: HomeFinanceiro },
    { path: '/financeiro/dashboard', name: 'dashboardFinanceiro', component: DashboardFinanceiro },
    
    //Pagina default
    { path: '*', component: DashboardChamado }
]