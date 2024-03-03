import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2755214461051127Component } from "./components/app-2755214461051127/app-2755214461051127.component";
import { App7576511065931767Component } from "./components/app-7576511065931767/app-7576511065931767.component";
import { App1652606476231333Component } from "./components/app-1652606476231333/app-1652606476231333.component";
import { App1775039971548523Component } from "./components/app-1775039971548523/app-1775039971548523.component";
import { App1181859292060721Component } from "./components/app-1181859292060721/app-1181859292060721.component";

// @ts-ignore
import html from './app-2954729396645529.component.html?raw';
// @ts-ignore
import style from './app-2954729396645529.component.scss?inline';

/**
 * COMPONENT: 'app-2954729396645529'
 */

export const App2954729396645529Component = new Component({
  name: 'app-2954729396645529',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2755214461051127Component,
App7576511065931767Component,
App1652606476231333Component,
App1775039971548523Component,
App1181859292060721Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
