import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8459621208235651Component } from "./components/app-8459621208235651/app-8459621208235651.component";
import { App7737420594914971Component } from "./components/app-7737420594914971/app-7737420594914971.component";
import { App2957715804895203Component } from "./components/app-2957715804895203/app-2957715804895203.component";
import { App2045632482553505Component } from "./components/app-2045632482553505/app-2045632482553505.component";
import { App1492564772785665Component } from "./components/app-1492564772785665/app-1492564772785665.component";

// @ts-ignore
import html from './app-2942322745315045.component.html?raw';
// @ts-ignore
import style from './app-2942322745315045.component.scss?inline';

/**
 * COMPONENT: 'app-2942322745315045'
 */

export const App2942322745315045Component = new Component({
  name: 'app-2942322745315045',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8459621208235651Component,
App7737420594914971Component,
App2957715804895203Component,
App2045632482553505Component,
App1492564772785665Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
