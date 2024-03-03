import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7161088684123809Component } from "./components/app-7161088684123809/app-7161088684123809.component";
import { App7261167869321531Component } from "./components/app-7261167869321531/app-7261167869321531.component";
import { App1661276350305697Component } from "./components/app-1661276350305697/app-1661276350305697.component";
import { App1703926572074523Component } from "./components/app-1703926572074523/app-1703926572074523.component";
import { App5068973935565029Component } from "./components/app-5068973935565029/app-5068973935565029.component";

// @ts-ignore
import html from './app-4921079530252127.component.html?raw';
// @ts-ignore
import style from './app-4921079530252127.component.scss?inline';

/**
 * COMPONENT: 'app-4921079530252127'
 */

export const App4921079530252127Component = new Component({
  name: 'app-4921079530252127',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7161088684123809Component,
App7261167869321531Component,
App1661276350305697Component,
App1703926572074523Component,
App5068973935565029Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
