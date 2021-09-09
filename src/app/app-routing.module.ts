import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebsitesComponent } from './websites/websites.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'About',component: AboutComponent},
  {path: 'Contact',component: ContactComponent},
  {path: 'Resume',component: HomeComponent},
  {path: 'Projects',component: ProjectsComponent},
  {path: 'Websites',component:WebsitesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
