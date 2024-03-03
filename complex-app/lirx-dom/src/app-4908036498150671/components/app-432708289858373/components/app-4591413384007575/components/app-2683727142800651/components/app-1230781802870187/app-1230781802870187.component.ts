import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1705679092283265Component } from "./components/app-1705679092283265/app-1705679092283265.component";
import { App4546546698700625Component } from "./components/app-4546546698700625/app-4546546698700625.component";
import { App5847621694150489Component } from "./components/app-5847621694150489/app-5847621694150489.component";
import { App703058451104305Component } from "./components/app-703058451104305/app-703058451104305.component";
import { App538096833709171Component } from "./components/app-538096833709171/app-538096833709171.component";

// @ts-ignore
import html from './app-1230781802870187.component.html?raw';
// @ts-ignore
import style from './app-1230781802870187.component.scss?inline';

/**
 * COMPONENT: 'app-1230781802870187'
 */

export const App1230781802870187Component = new Component({
  name: 'app-1230781802870187',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1705679092283265Component,
App4546546698700625Component,
App5847621694150489Component,
App703058451104305Component,
App538096833709171Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
