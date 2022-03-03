import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BeginingComponent } from './component/begining/begining.component';
import { FooterComponent } from './component/footer/footer.component';
import { SkillComponent } from './component/skill/skill.component';
import { ProjectComponent } from './component/project/project.component';
import { FormComponent } from './component/form/form.component';
import { AboutOfMyComponent } from './component/about-of-my/about-of-my.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeginingComponent,
    FooterComponent,
    SkillComponent,
    ProjectComponent,
    FormComponent,
    AboutOfMyComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
