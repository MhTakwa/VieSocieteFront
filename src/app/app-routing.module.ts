import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsModule } from './settings/settings.module';
import { SettingsComponent } from './settings/settings/settings.component';
import { WorkspaceModule } from './workspace/workspace.module';
import { WorkspaceComponent } from './workspace/workspace/workspace.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: '',
        loadChildren: './settings/settings.module#SettingsModule'
      }
    ]
  },
  {
  
   // path: 'workspace/:projectId',
   path: 'workspace',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        loadChildren: './workspace/workspace.module#WorkspaceModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
