import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1200545649578207Component } from "./components/app-1200545649578207/app-1200545649578207.component";
import { App7437250857832811Component } from "./components/app-7437250857832811/app-7437250857832811.component";
import { App4236805423835655Component } from "./components/app-4236805423835655/app-4236805423835655.component";
import { App8171536339769035Component } from "./components/app-8171536339769035/app-8171536339769035.component";
import { App2775023326784141Component } from "./components/app-2775023326784141/app-2775023326784141.component";

// @ts-ignore
import html from './app-3819206941323663.component.html?raw';
// @ts-ignore
import style from './app-3819206941323663.component.scss?inline';

/**
 * COMPONENT: 'app-3819206941323663'
 */

export const App3819206941323663Component = new Component({
  name: 'app-3819206941323663',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1200545649578207Component,
App7437250857832811Component,
App4236805423835655Component,
App8171536339769035Component,
App2775023326784141Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
