import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8835477035585531Component } from "./components/app-8835477035585531/app-8835477035585531.component";
import { App5626458718132373Component } from "./components/app-5626458718132373/app-5626458718132373.component";
import { App1915205720631839Component } from "./components/app-1915205720631839/app-1915205720631839.component";
import { App7895221794276155Component } from "./components/app-7895221794276155/app-7895221794276155.component";
import { App6828016684950471Component } from "./components/app-6828016684950471/app-6828016684950471.component";

// @ts-ignore
import html from './app-3378284685260413.component.html?raw';
// @ts-ignore
import style from './app-3378284685260413.component.scss?inline';

/**
 * COMPONENT: 'app-3378284685260413'
 */

export const App3378284685260413Component = new Component({
  name: 'app-3378284685260413',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8835477035585531Component,
App5626458718132373Component,
App1915205720631839Component,
App7895221794276155Component,
App6828016684950471Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
