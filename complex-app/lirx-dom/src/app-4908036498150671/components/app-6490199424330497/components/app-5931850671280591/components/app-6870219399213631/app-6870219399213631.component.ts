import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8402075428218423Component } from "./components/app-8402075428218423/app-8402075428218423.component";
import { App4457366983356637Component } from "./components/app-4457366983356637/app-4457366983356637.component";
import { App879276885166219Component } from "./components/app-879276885166219/app-879276885166219.component";
import { App6260083565117069Component } from "./components/app-6260083565117069/app-6260083565117069.component";
import { App2689807124786453Component } from "./components/app-2689807124786453/app-2689807124786453.component";

// @ts-ignore
import html from './app-6870219399213631.component.html?raw';
// @ts-ignore
import style from './app-6870219399213631.component.scss?inline';

/**
 * COMPONENT: 'app-6870219399213631'
 */

export const App6870219399213631Component = new Component({
  name: 'app-6870219399213631',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8402075428218423Component,
App4457366983356637Component,
App879276885166219Component,
App6260083565117069Component,
App2689807124786453Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
