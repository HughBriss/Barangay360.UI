import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import { DropdownModule, SidebarModule } from '@coreui/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    IconSetService,
    importProvidersFrom(SidebarModule, DropdownModule),
  ]
};
