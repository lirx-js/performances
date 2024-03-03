import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8551892603581577Component } from "./components/app-8551892603581577/app-8551892603581577.component";
import { App6722429886689879Component } from "./components/app-6722429886689879/app-6722429886689879.component";
import { App5303437271574253Component } from "./components/app-5303437271574253/app-5303437271574253.component";
import { App6806110022851325Component } from "./components/app-6806110022851325/app-6806110022851325.component";
import { App8491156411744445Component } from "./components/app-8491156411744445/app-8491156411744445.component";

// @ts-ignore
import html from './app-8784945507762159.component.html?raw';
// @ts-ignore
import style from './app-8784945507762159.component.scss?inline';

/**
 * COMPONENT: 'app-8784945507762159'
 */

export const App8784945507762159Component = new Component({
  name: 'app-8784945507762159',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8551892603581577Component,
App6722429886689879Component,
App5303437271574253Component,
App6806110022851325Component,
App8491156411744445Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
