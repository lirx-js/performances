import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7932471931858723Component } from "./components/app-7932471931858723/app-7932471931858723.component";
import { App5433833895636347Component } from "./components/app-5433833895636347/app-5433833895636347.component";
import { App5655696535104131Component } from "./components/app-5655696535104131/app-5655696535104131.component";
import { App1983137808972071Component } from "./components/app-1983137808972071/app-1983137808972071.component";
import { App1750280414119589Component } from "./components/app-1750280414119589/app-1750280414119589.component";

// @ts-ignore
import html from './app-3078204566583869.component.html?raw';
// @ts-ignore
import style from './app-3078204566583869.component.scss?inline';

/**
 * COMPONENT: 'app-3078204566583869'
 */

export const App3078204566583869Component = new Component({
  name: 'app-3078204566583869',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7932471931858723Component,
App5433833895636347Component,
App5655696535104131Component,
App1983137808972071Component,
App1750280414119589Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
