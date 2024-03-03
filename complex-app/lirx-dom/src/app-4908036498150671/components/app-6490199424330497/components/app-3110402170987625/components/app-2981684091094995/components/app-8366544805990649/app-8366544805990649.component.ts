import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7342075944386761Component } from "./components/app-7342075944386761/app-7342075944386761.component";
import { App4342095192243851Component } from "./components/app-4342095192243851/app-4342095192243851.component";
import { App3702795202878515Component } from "./components/app-3702795202878515/app-3702795202878515.component";
import { App2601980692896289Component } from "./components/app-2601980692896289/app-2601980692896289.component";
import { App1918872295951705Component } from "./components/app-1918872295951705/app-1918872295951705.component";

// @ts-ignore
import html from './app-8366544805990649.component.html?raw';
// @ts-ignore
import style from './app-8366544805990649.component.scss?inline';

/**
 * COMPONENT: 'app-8366544805990649'
 */

export const App8366544805990649Component = new Component({
  name: 'app-8366544805990649',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7342075944386761Component,
App4342095192243851Component,
App3702795202878515Component,
App2601980692896289Component,
App1918872295951705Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
