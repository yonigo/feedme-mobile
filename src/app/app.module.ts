import { LOCALE_ID, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpClientModule } from '@angular/common/http';
import localeHe from '@angular/common/locales/he';
import { registerLocaleData } from '@angular/common';
import { OrdersProvider } from '../providers/orders/orders';
import { ServerDataProvider } from '../providers/server-data/server-data';

registerLocaleData(localeHe, 'he');

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: LOCALE_ID, useValue: 'he' },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerDataProvider,
    AuthServiceProvider,
    OrdersProvider
  ]
})
export class AppModule {}
