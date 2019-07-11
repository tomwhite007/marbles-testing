import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  APP_FEATURE_KEY,
  initialState as appInitialState,
  appReducer
} from './+state/app/app.reducer';
import { AppEffects } from './+state/app/app.effects';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  AUTH_FEATURE_KEY,
  initialState as authInitialState,
  authReducer
} from './+state/auth/auth.reducer';
import { AuthEffects } from './+state/auth/auth.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { app: appReducer },
      {
        initialState: { app: appInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer, {
      initialState: authInitialState
    }),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
