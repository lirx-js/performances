import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5360434627046155Component } from "./components/app-5360434627046155/app-5360434627046155.component";
import { App2752604172149883Component } from "./components/app-2752604172149883/app-2752604172149883.component";
import { App484667579557875Component } from "./components/app-484667579557875/app-484667579557875.component";
import { App810029040928905Component } from "./components/app-810029040928905/app-810029040928905.component";
import { App2384951689528625Component } from "./components/app-2384951689528625/app-2384951689528625.component";

// @ts-ignore
import html from './app-6260083565117069.component.html?raw';
// @ts-ignore
import style from './app-6260083565117069.component.scss?inline';

/**
 * COMPONENT: 'app-6260083565117069'
 */

export const App6260083565117069Component = new Component({
  name: 'app-6260083565117069',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5360434627046155Component,
App2752604172149883Component,
App484667579557875Component,
App810029040928905Component,
App2384951689528625Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
