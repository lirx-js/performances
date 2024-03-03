import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8009459886759241Component } from "./components/app-8009459886759241/app-8009459886759241.component";
import { App907861846989087Component } from "./components/app-907861846989087/app-907861846989087.component";
import { App7298046441160523Component } from "./components/app-7298046441160523/app-7298046441160523.component";
import { App727669822358505Component } from "./components/app-727669822358505/app-727669822358505.component";
import { App2720935897519707Component } from "./components/app-2720935897519707/app-2720935897519707.component";

// @ts-ignore
import html from './app-1444934131086645.component.html?raw';
// @ts-ignore
import style from './app-1444934131086645.component.scss?inline';

/**
 * COMPONENT: 'app-1444934131086645'
 */

export const App1444934131086645Component = new Component({
  name: 'app-1444934131086645',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8009459886759241Component,
App907861846989087Component,
App7298046441160523Component,
App727669822358505Component,
App2720935897519707Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
