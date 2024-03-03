import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5601844982466675Component } from "./components/app-5601844982466675/app-5601844982466675.component";
import { App6299889505158005Component } from "./components/app-6299889505158005/app-6299889505158005.component";
import { App5337647585413001Component } from "./components/app-5337647585413001/app-5337647585413001.component";
import { App4366588356131343Component } from "./components/app-4366588356131343/app-4366588356131343.component";
import { App4154424951006987Component } from "./components/app-4154424951006987/app-4154424951006987.component";

// @ts-ignore
import html from './app-3187867890300655.component.html?raw';
// @ts-ignore
import style from './app-3187867890300655.component.scss?inline';

/**
 * COMPONENT: 'app-3187867890300655'
 */

export const App3187867890300655Component = new Component({
  name: 'app-3187867890300655',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5601844982466675Component,
App6299889505158005Component,
App5337647585413001Component,
App4366588356131343Component,
App4154424951006987Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
