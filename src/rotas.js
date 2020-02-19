import HomeChamados from '../views/chamados/HomeChamados.vue';
import DashboardChamado from '../views/chamados/DashboardChamado.vue';

import Centros from '../views/financeiro/Centros.vue';
import DashboardFinanceiro from '../views/financeiro/DashboardFinanceiro.vue';
import ContasReceber from '../views/financeiro/ContasReceber.vue';
import ContasPagar from '../views/financeiro/ContasPagar.vue';

import Agendamentos from '../views/vendas/Agendamentos.vue';

export const rotas = [
    { path: '/chamados/home', name: 'homeChamados', component: HomeChamados },
    { path: '/chamados/novo', name: 'novoChamado', component: HomeChamados },
    { path: '/chamados/dashboard', name: 'dashboardChamado', component: DashboardChamado },

    { path: '/financeiro/centros', name: 'centros', component: Centros },
    { path: '/financeiro/dashboard', name: 'dashboardFinanceiro', component: DashboardFinanceiro },
    { path: '/financeiro/contasreceber', name: 'contasReceber', component: ContasReceber },
    { path: '/financeiro/contaspagar', name: 'contasPagar', component: ContasPagar},

    { path: '/vendas/agendamentos', name: 'agendamentos', component: Agendamentos },

    //Pagina default
    { path: '*', component: DashboardChamado }
]