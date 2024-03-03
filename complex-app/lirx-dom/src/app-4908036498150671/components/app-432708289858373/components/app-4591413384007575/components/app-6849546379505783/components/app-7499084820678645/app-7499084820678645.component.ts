import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6214939507847381Component } from "./components/app-6214939507847381/app-6214939507847381.component";
import { App1833264182891859Component } from "./components/app-1833264182891859/app-1833264182891859.component";
import { App4344124269634167Component } from "./components/app-4344124269634167/app-4344124269634167.component";
import { App3735982827431213Component } from "./components/app-3735982827431213/app-3735982827431213.component";
import { App8971326545519029Component } from "./components/app-8971326545519029/app-8971326545519029.component";

// @ts-ignore
import html from './app-7499084820678645.component.html?raw';
// @ts-ignore
import style from './app-7499084820678645.component.scss?inline';

/**
 * COMPONENT: 'app-7499084820678645'
 */

export const App7499084820678645Component = new Component({
  name: 'app-7499084820678645',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6214939507847381Component,
App1833264182891859Component,
App4344124269634167Component,
App3735982827431213Component,
App8971326545519029Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
