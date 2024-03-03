import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8525494568137915Component } from "./components/app-8525494568137915/app-8525494568137915.component";
import { App2494631131849641Component } from "./components/app-2494631131849641/app-2494631131849641.component";
import { App6013173384842619Component } from "./components/app-6013173384842619/app-6013173384842619.component";
import { App1167588793752133Component } from "./components/app-1167588793752133/app-1167588793752133.component";
import { App6512842449938697Component } from "./components/app-6512842449938697/app-6512842449938697.component";

// @ts-ignore
import html from './app-8919168801603047.component.html?raw';
// @ts-ignore
import style from './app-8919168801603047.component.scss?inline';

/**
 * COMPONENT: 'app-8919168801603047'
 */

export const App8919168801603047Component = new Component({
  name: 'app-8919168801603047',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8525494568137915Component,
App2494631131849641Component,
App6013173384842619Component,
App1167588793752133Component,
App6512842449938697Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
