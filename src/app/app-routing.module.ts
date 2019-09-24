import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorerViewComponent } from './explorer-view/explorer-view.component';
import { LogViewComponent } from './log-view/log-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/explorer', pathMatch: 'full' },
  { path: 'explorer', component: ExplorerViewComponent },
  { path: 'log', component: LogViewComponent },
  { path: '**', redirectTo: '/explorer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModules = [ExplorerViewComponent, LogViewComponent];
