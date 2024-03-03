import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3407684461600237Component } from "./components/app-3407684461600237/app-3407684461600237.component";
import { App3776831741024665Component } from "./components/app-3776831741024665/app-3776831741024665.component";
import { App1370603711730317Component } from "./components/app-1370603711730317/app-1370603711730317.component";
import { App1410272265655749Component } from "./components/app-1410272265655749/app-1410272265655749.component";
import { App2326104144572763Component } from "./components/app-2326104144572763/app-2326104144572763.component";

// @ts-ignore
import html from './app-5724227718567665.component.html?raw';
// @ts-ignore
import style from './app-5724227718567665.component.scss?inline';

/**
 * COMPONENT: 'app-5724227718567665'
 */

export const App5724227718567665Component = new Component({
  name: 'app-5724227718567665',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3407684461600237Component,
App3776831741024665Component,
App1370603711730317Component,
App1410272265655749Component,
App2326104144572763Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
