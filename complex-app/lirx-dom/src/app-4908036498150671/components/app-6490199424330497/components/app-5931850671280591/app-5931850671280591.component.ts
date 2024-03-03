import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6870219399213631Component } from "./components/app-6870219399213631/app-6870219399213631.component";
import { App7360571936466497Component } from "./components/app-7360571936466497/app-7360571936466497.component";
import { App3751352244114741Component } from "./components/app-3751352244114741/app-3751352244114741.component";
import { App147738737281721Component } from "./components/app-147738737281721/app-147738737281721.component";
import { App8167237032257669Component } from "./components/app-8167237032257669/app-8167237032257669.component";

// @ts-ignore
import html from './app-5931850671280591.component.html?raw';
// @ts-ignore
import style from './app-5931850671280591.component.scss?inline';

/**
 * COMPONENT: 'app-5931850671280591'
 */

export const App5931850671280591Component = new Component({
  name: 'app-5931850671280591',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6870219399213631Component,
App7360571936466497Component,
App3751352244114741Component,
App147738737281721Component,
App8167237032257669Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
