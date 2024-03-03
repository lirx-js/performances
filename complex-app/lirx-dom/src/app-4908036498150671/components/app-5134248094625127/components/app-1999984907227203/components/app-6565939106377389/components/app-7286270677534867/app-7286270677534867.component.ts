import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8596782829021857Component } from "./components/app-8596782829021857/app-8596782829021857.component";
import { App2358190953026431Component } from "./components/app-2358190953026431/app-2358190953026431.component";
import { App6615941900578849Component } from "./components/app-6615941900578849/app-6615941900578849.component";
import { App2926253189865195Component } from "./components/app-2926253189865195/app-2926253189865195.component";
import { App524789058854099Component } from "./components/app-524789058854099/app-524789058854099.component";

// @ts-ignore
import html from './app-7286270677534867.component.html?raw';
// @ts-ignore
import style from './app-7286270677534867.component.scss?inline';

/**
 * COMPONENT: 'app-7286270677534867'
 */

export const App7286270677534867Component = new Component({
  name: 'app-7286270677534867',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8596782829021857Component,
App2358190953026431Component,
App6615941900578849Component,
App2926253189865195Component,
App524789058854099Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
