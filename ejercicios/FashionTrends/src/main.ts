import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Fashion } from './app/components/fashion/fashion';

bootstrapApplication(Fashion, appConfig)
  .catch((err) => console.error(err));
