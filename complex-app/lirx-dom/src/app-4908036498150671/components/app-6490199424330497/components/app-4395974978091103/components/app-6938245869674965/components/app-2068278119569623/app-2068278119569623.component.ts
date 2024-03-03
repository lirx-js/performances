import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5637001331900249Component } from "./components/app-5637001331900249/app-5637001331900249.component";
import { App3813065483646951Component } from "./components/app-3813065483646951/app-3813065483646951.component";
import { App2293228586994683Component } from "./components/app-2293228586994683/app-2293228586994683.component";
import { App155615427535489Component } from "./components/app-155615427535489/app-155615427535489.component";
import { App3808825488471533Component } from "./components/app-3808825488471533/app-3808825488471533.component";

// @ts-ignore
import html from './app-2068278119569623.component.html?raw';
// @ts-ignore
import style from './app-2068278119569623.component.scss?inline';

/**
 * COMPONENT: 'app-2068278119569623'
 */

export const App2068278119569623Component = new Component({
  name: 'app-2068278119569623',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5637001331900249Component,
App3813065483646951Component,
App2293228586994683Component,
App155615427535489Component,
App3808825488471533Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
