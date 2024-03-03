import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8858374323589659Component } from "./components/app-8858374323589659/app-8858374323589659.component";
import { App8151349945847897Component } from "./components/app-8151349945847897/app-8151349945847897.component";
import { App7347208138394625Component } from "./components/app-7347208138394625/app-7347208138394625.component";
import { App6107075851318353Component } from "./components/app-6107075851318353/app-6107075851318353.component";
import { App1944094708370603Component } from "./components/app-1944094708370603/app-1944094708370603.component";

// @ts-ignore
import html from './app-1537245549304611.component.html?raw';
// @ts-ignore
import style from './app-1537245549304611.component.scss?inline';

/**
 * COMPONENT: 'app-1537245549304611'
 */

export const App1537245549304611Component = new Component({
  name: 'app-1537245549304611',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8858374323589659Component,
App8151349945847897Component,
App7347208138394625Component,
App6107075851318353Component,
App1944094708370603Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
