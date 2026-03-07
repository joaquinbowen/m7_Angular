import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AutoCare } from './app/components/auto-care/auto-care';

bootstrapApplication(AutoCare, appConfig)
  .catch((err) => console.error(err));
