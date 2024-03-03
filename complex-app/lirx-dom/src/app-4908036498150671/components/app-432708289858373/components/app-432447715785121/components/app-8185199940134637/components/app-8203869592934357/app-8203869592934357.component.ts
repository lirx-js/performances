import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3451756917656871Component } from "./components/app-3451756917656871/app-3451756917656871.component";
import { App2095658092699215Component } from "./components/app-2095658092699215/app-2095658092699215.component";
import { App5692116903961091Component } from "./components/app-5692116903961091/app-5692116903961091.component";
import { App7471642473453887Component } from "./components/app-7471642473453887/app-7471642473453887.component";
import { App3490585514764525Component } from "./components/app-3490585514764525/app-3490585514764525.component";

// @ts-ignore
import html from './app-8203869592934357.component.html?raw';
// @ts-ignore
import style from './app-8203869592934357.component.scss?inline';

/**
 * COMPONENT: 'app-8203869592934357'
 */

export const App8203869592934357Component = new Component({
  name: 'app-8203869592934357',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3451756917656871Component,
App2095658092699215Component,
App5692116903961091Component,
App7471642473453887Component,
App3490585514764525Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
