import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7753148026874475Component } from "./components/app-7753148026874475/app-7753148026874475.component";
import { App5151728578680949Component } from "./components/app-5151728578680949/app-5151728578680949.component";
import { App3521101339084079Component } from "./components/app-3521101339084079/app-3521101339084079.component";
import { App1934428307751601Component } from "./components/app-1934428307751601/app-1934428307751601.component";
import { App5580737480567755Component } from "./components/app-5580737480567755/app-5580737480567755.component";

// @ts-ignore
import html from './app-2870476238328003.component.html?raw';
// @ts-ignore
import style from './app-2870476238328003.component.scss?inline';

/**
 * COMPONENT: 'app-2870476238328003'
 */

export const App2870476238328003Component = new Component({
  name: 'app-2870476238328003',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7753148026874475Component,
App5151728578680949Component,
App3521101339084079Component,
App1934428307751601Component,
App5580737480567755Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
