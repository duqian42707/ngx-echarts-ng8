import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgZorroCustomModule } from './shared/ng-zorro-custom.module';
import { NgxEchartsModule, provideEcharts } from 'projects/ngx-echarts-ng8/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
// Import echarts extensions
import 'echarts-gl';
// Import echarts themes
import 'echarts/theme/macarons.js';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroCustomModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    NgxEchartsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    provideEcharts(),
  ],
})
export class AppModule {}
