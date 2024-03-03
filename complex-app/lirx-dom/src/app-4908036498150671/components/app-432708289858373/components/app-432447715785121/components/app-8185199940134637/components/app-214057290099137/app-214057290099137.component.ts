import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7131701530110129Component } from "./components/app-7131701530110129/app-7131701530110129.component";
import { App4087113127776419Component } from "./components/app-4087113127776419/app-4087113127776419.component";
import { App8334099841393519Component } from "./components/app-8334099841393519/app-8334099841393519.component";
import { App6292445092921071Component } from "./components/app-6292445092921071/app-6292445092921071.component";
import { App5929633956740235Component } from "./components/app-5929633956740235/app-5929633956740235.component";

// @ts-ignore
import html from './app-214057290099137.component.html?raw';
// @ts-ignore
import style from './app-214057290099137.component.scss?inline';

/**
 * COMPONENT: 'app-214057290099137'
 */

export const App214057290099137Component = new Component({
  name: 'app-214057290099137',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7131701530110129Component,
App4087113127776419Component,
App8334099841393519Component,
App6292445092921071Component,
App5929633956740235Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
