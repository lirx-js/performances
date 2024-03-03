import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3666638255906757Component } from "./components/app-3666638255906757/app-3666638255906757.component";
import { App718648295004049Component } from "./components/app-718648295004049/app-718648295004049.component";
import { App3680694718009163Component } from "./components/app-3680694718009163/app-3680694718009163.component";
import { App7995633121354987Component } from "./components/app-7995633121354987/app-7995633121354987.component";
import { App3893628258925387Component } from "./components/app-3893628258925387/app-3893628258925387.component";

// @ts-ignore
import html from './app-1021027532182207.component.html?raw';
// @ts-ignore
import style from './app-1021027532182207.component.scss?inline';

/**
 * COMPONENT: 'app-1021027532182207'
 */

export const App1021027532182207Component = new Component({
  name: 'app-1021027532182207',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3666638255906757Component,
App718648295004049Component,
App3680694718009163Component,
App7995633121354987Component,
App3893628258925387Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
