import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7733233960862063Component } from "./components/app-7733233960862063/app-7733233960862063.component";
import { App8862098507056459Component } from "./components/app-8862098507056459/app-8862098507056459.component";
import { App2377239046820773Component } from "./components/app-2377239046820773/app-2377239046820773.component";
import { App8557348990849323Component } from "./components/app-8557348990849323/app-8557348990849323.component";
import { App8671002396849707Component } from "./components/app-8671002396849707/app-8671002396849707.component";

// @ts-ignore
import html from './app-733657880836495.component.html?raw';
// @ts-ignore
import style from './app-733657880836495.component.scss?inline';

/**
 * COMPONENT: 'app-733657880836495'
 */

export const App733657880836495Component = new Component({
  name: 'app-733657880836495',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7733233960862063Component,
App8862098507056459Component,
App2377239046820773Component,
App8557348990849323Component,
App8671002396849707Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
