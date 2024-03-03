import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1885491095648489Component } from "./components/app-1885491095648489/app-1885491095648489.component";
import { App3413530542658461Component } from "./components/app-3413530542658461/app-3413530542658461.component";
import { App375347250878215Component } from "./components/app-375347250878215/app-375347250878215.component";
import { App5455148493650851Component } from "./components/app-5455148493650851/app-5455148493650851.component";
import { App6694420770004347Component } from "./components/app-6694420770004347/app-6694420770004347.component";

// @ts-ignore
import html from './app-3135951515515751.component.html?raw';
// @ts-ignore
import style from './app-3135951515515751.component.scss?inline';

/**
 * COMPONENT: 'app-3135951515515751'
 */

export const App3135951515515751Component = new Component({
  name: 'app-3135951515515751',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1885491095648489Component,
App3413530542658461Component,
App375347250878215Component,
App5455148493650851Component,
App6694420770004347Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
