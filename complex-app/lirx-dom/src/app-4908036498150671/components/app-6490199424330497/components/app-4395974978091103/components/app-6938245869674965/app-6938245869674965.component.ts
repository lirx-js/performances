import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2535106534432785Component } from "./components/app-2535106534432785/app-2535106534432785.component";
import { App3163490624736123Component } from "./components/app-3163490624736123/app-3163490624736123.component";
import { App2068278119569623Component } from "./components/app-2068278119569623/app-2068278119569623.component";
import { App6736834274333031Component } from "./components/app-6736834274333031/app-6736834274333031.component";
import { App1119467637810037Component } from "./components/app-1119467637810037/app-1119467637810037.component";

// @ts-ignore
import html from './app-6938245869674965.component.html?raw';
// @ts-ignore
import style from './app-6938245869674965.component.scss?inline';

/**
 * COMPONENT: 'app-6938245869674965'
 */

export const App6938245869674965Component = new Component({
  name: 'app-6938245869674965',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2535106534432785Component,
App3163490624736123Component,
App2068278119569623Component,
App6736834274333031Component,
App1119467637810037Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
