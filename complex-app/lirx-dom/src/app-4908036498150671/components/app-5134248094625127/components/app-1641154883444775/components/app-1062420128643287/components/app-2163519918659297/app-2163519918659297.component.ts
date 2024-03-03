import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App514167907069159Component } from "./components/app-514167907069159/app-514167907069159.component";
import { App1997020252907029Component } from "./components/app-1997020252907029/app-1997020252907029.component";
import { App1955825034882521Component } from "./components/app-1955825034882521/app-1955825034882521.component";
import { App128320792184041Component } from "./components/app-128320792184041/app-128320792184041.component";
import { App6408487961900095Component } from "./components/app-6408487961900095/app-6408487961900095.component";

// @ts-ignore
import html from './app-2163519918659297.component.html?raw';
// @ts-ignore
import style from './app-2163519918659297.component.scss?inline';

/**
 * COMPONENT: 'app-2163519918659297'
 */

export const App2163519918659297Component = new Component({
  name: 'app-2163519918659297',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App514167907069159Component,
App1997020252907029Component,
App1955825034882521Component,
App128320792184041Component,
App6408487961900095Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
