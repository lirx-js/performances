import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3566169225450977Component } from "./components/app-3566169225450977/app-3566169225450977.component";
import { App1898416666332757Component } from "./components/app-1898416666332757/app-1898416666332757.component";
import { App7267168006245643Component } from "./components/app-7267168006245643/app-7267168006245643.component";
import { App8323903344270591Component } from "./components/app-8323903344270591/app-8323903344270591.component";
import { App1207035061624967Component } from "./components/app-1207035061624967/app-1207035061624967.component";

// @ts-ignore
import html from './app-1004749068098949.component.html?raw';
// @ts-ignore
import style from './app-1004749068098949.component.scss?inline';

/**
 * COMPONENT: 'app-1004749068098949'
 */

export const App1004749068098949Component = new Component({
  name: 'app-1004749068098949',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3566169225450977Component,
App1898416666332757Component,
App7267168006245643Component,
App8323903344270591Component,
App1207035061624967Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
