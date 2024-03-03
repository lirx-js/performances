import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App449745673427151Component } from "./components/app-449745673427151/app-449745673427151.component";
import { App2517924213709577Component } from "./components/app-2517924213709577/app-2517924213709577.component";
import { App6865404863321815Component } from "./components/app-6865404863321815/app-6865404863321815.component";
import { App1725834585922639Component } from "./components/app-1725834585922639/app-1725834585922639.component";
import { App8378220739863637Component } from "./components/app-8378220739863637/app-8378220739863637.component";

// @ts-ignore
import html from './app-7952905325725349.component.html?raw';
// @ts-ignore
import style from './app-7952905325725349.component.scss?inline';

/**
 * COMPONENT: 'app-7952905325725349'
 */

export const App7952905325725349Component = new Component({
  name: 'app-7952905325725349',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App449745673427151Component,
App2517924213709577Component,
App6865404863321815Component,
App1725834585922639Component,
App8378220739863637Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
