import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetCreateComponent } from './components/asset-create/asset-create.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { CreateFacilityComponent } from './components/create-facility/create-facility.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { HomeComponent } from './components/home/home.component';
import { HlpComponent } from './components/hlp/hlp.component';
import { LoginComponent } from './components/login/login.component';
import { RaiseRequestComponent } from './components/raise-request/raise-request.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { KnowledgeRepoComponent } from './components/knowledge-repo/knowledge-repo.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'hlp',component:HlpComponent},
  {path:'assets/create',component:AssetCreateComponent},
  {path:'assets',component:AssetListComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'tickets/open',component:TicketsComponent},
  {path:'tickets/self',component:TicketsComponent},
  {path:'tickets/create',component:CreateTicketComponent},
  {path:'facilities',component:FacilitiesComponent},
  {path:'facilities/create',component:CreateFacilityComponent},
  {path:'signin',component:LoginComponent},
  {path:'signup',component:UserRegisterComponent},
  {path:'users', component: EmployeeListComponent},
  {path:'raise-issue', component: RaiseRequestComponent},
  {path:'knowledge-repos', component: KnowledgeRepoComponent},
  {path:'reports', component: ReportsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**', redirectTo:'/'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
