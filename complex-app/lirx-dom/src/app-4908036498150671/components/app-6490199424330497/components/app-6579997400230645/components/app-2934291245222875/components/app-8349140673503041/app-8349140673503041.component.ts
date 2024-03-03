import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1265687322805999Component } from "./components/app-1265687322805999/app-1265687322805999.component";
import { App428028666984377Component } from "./components/app-428028666984377/app-428028666984377.component";
import { App558183747911835Component } from "./components/app-558183747911835/app-558183747911835.component";
import { App7872329158913631Component } from "./components/app-7872329158913631/app-7872329158913631.component";
import { App6492969863103689Component } from "./components/app-6492969863103689/app-6492969863103689.component";

// @ts-ignore
import html from './app-8349140673503041.component.html?raw';
// @ts-ignore
import style from './app-8349140673503041.component.scss?inline';

/**
 * COMPONENT: 'app-8349140673503041'
 */

export const App8349140673503041Component = new Component({
  name: 'app-8349140673503041',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1265687322805999Component,
App428028666984377Component,
App558183747911835Component,
App7872329158913631Component,
App6492969863103689Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
