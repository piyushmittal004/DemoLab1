import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CellData } from './CellData';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RackSample } from './rack-sample';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RackServiceService } from './rack-service.service';
import { MatButtonModule } from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatTableModule} from '@angular/material/table';
import { BackgroundComponent } from './background/background.component';
import {RouterModule, Routes} from "@angular/router";
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { MatSortModule } from '@angular/material/sort';

import { Mycoplasma } from './mycoplasma';
import {MatDialogModule} from '@angular/material/dialog'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { RackInformationComponent } from './rack-information/rack-information.component';
import{MatPaginatorModule} from '@angular/material/paginator';
import { EnterSampleComponent } from './enter-sample/enter-sample.component'
import { DashModel } from './dash-model';
import { FreezeTwentyComponent } from './freeze-twenty/freeze-twenty.component';
import { FreezeEightyComponent } from './freeze-eighty/freeze-eighty.component';
import { DNALABComponent } from './dnalab/dnalab.component';
import { EnterDNAComponent } from './enter-dna/enter-dna.component';
import { MycoplasmaLabComponent } from './mycoplasma-lab/mycoplasma-lab.component';
import { EnterMycoplasmaComponent } from './enter-mycoplasma/enter-mycoplasma.component';
import { LabLinking } from './lab-linking';
import { GeneprintLabComponent } from './geneprint-lab/geneprint-lab.component';
import { EnterGeneprintComponent } from './enter-geneprint/enter-geneprint.component';
import { KarotypingComponent } from './karotyping/karotyping.component';
import { PBMCLABComponent } from './pbmclab/pbmclab.component';
import { EnterPBMCComponent } from './enter-pbmc/enter-pbmc.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthHttpInterceptorService } from './auth-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    PendingRequestComponent,
    DashboardComponent,
    RackInformationComponent,
    EnterSampleComponent,
    FreezeTwentyComponent,
    FreezeEightyComponent,
    DNALABComponent,
    EnterDNAComponent,
    MycoplasmaLabComponent,
    EnterMycoplasmaComponent,
    GeneprintLabComponent,
    EnterGeneprintComponent,
    KarotypingComponent,
    PBMCLABComponent,
    EnterPBMCComponent,
    LoginComponent,
    LogoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
   MatNativeDateModule,
   MatListModule,
   MatIconModule,
   MatMenuModule,
   MatFormFieldModule,
   MatInputModule,
   MatCardModule,
   MatTableModule,
   MatSortModule,
   MatDatepickerModule,
   MatPaginatorModule,
   MatDialogModule


    
  ],
  entryComponents:[EnterDNAComponent,EnterGeneprintComponent,EnterPBMCComponent],
  providers: [CellData,RackSample,Mycoplasma,DashModel,LabLinking,{provide:HTTP_INTERCEPTORS,useClass:AuthHttpInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
