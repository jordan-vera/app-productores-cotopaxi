import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'search/:search',
        loadChildren: () => import('./../search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'buscar-por-canton',
        loadChildren: () => import('./../buscar-por-canton/buscar-por-canton.module').then( m => m.BuscarPorCantonPageModule)
      },
      {
        path: 'buscar-por-categoria',
        loadChildren: () => import('./../buscar-por-categoria/buscar-por-categoria.module').then( m => m.BuscarPorCategoriaPageModule)
      },
      {
        path: 'productor-show',
        loadChildren: () => import('./../productor-show/productor-show.module').then( m => m.ProductorShowPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
