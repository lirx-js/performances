import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8356816961083119Component } from "./components/app-8356816961083119/app-8356816961083119.component";
import { App925061652678547Component } from "./components/app-925061652678547/app-925061652678547.component";
import { App433448081041989Component } from "./components/app-433448081041989/app-433448081041989.component";
import { App8910043785823787Component } from "./components/app-8910043785823787/app-8910043785823787.component";
import { App8136990655131167Component } from "./components/app-8136990655131167/app-8136990655131167.component";

// @ts-ignore
import html from './app-2079326901879641.component.html?raw';
// @ts-ignore
import style from './app-2079326901879641.component.scss?inline';

/**
 * COMPONENT: 'app-2079326901879641'
 */

export const App2079326901879641Component = new Component({
  name: 'app-2079326901879641',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8356816961083119Component,
App925061652678547Component,
App433448081041989Component,
App8910043785823787Component,
App8136990655131167Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
