import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router, Scroll } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from "@ionic/storage";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ViewportScroller } from '@angular/common';
import { CustomReuseStrategy } from './app-routing.cache';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    Base64,
    FileTransfer,
    File,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'nodeUrl', useValue: 'http://192.168.31.38:5000' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(router: Router, viewportScroller: ViewportScroller, store: Store<AppState>) {
  //   router.events.pipe(filter(e => e instanceof Scroll), switchMap(e => {
  //     return store.pipe(first(), timeout(200), map(() => e));
  //   })).subscribe(e => {
  //     if (e['position']) {
  //       viewportScroller.scrollToPosition(e['position']);
  //     } else if (e['anchor']) {
  //       viewportScroller.scrollToAnchor(e['anchor']);
  //     } else {
  //       viewportScroller.scrollToPosition([0, 0]);
  //     }
  //   });
  // }
}
