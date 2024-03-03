import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3593463576089135Component } from "./components/app-3593463576089135/app-3593463576089135.component";
import { App7956338271512087Component } from "./components/app-7956338271512087/app-7956338271512087.component";
import { App1534899641639357Component } from "./components/app-1534899641639357/app-1534899641639357.component";
import { App7669228963475409Component } from "./components/app-7669228963475409/app-7669228963475409.component";
import { App5365015893196329Component } from "./components/app-5365015893196329/app-5365015893196329.component";

// @ts-ignore
import html from './app-8639382655800095.component.html?raw';
// @ts-ignore
import style from './app-8639382655800095.component.scss?inline';

/**
 * COMPONENT: 'app-8639382655800095'
 */

export const App8639382655800095Component = new Component({
  name: 'app-8639382655800095',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3593463576089135Component,
App7956338271512087Component,
App1534899641639357Component,
App7669228963475409Component,
App5365015893196329Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
