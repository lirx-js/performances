import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App228658037375041Component } from "./components/app-228658037375041/app-228658037375041.component";
import { App6939601094161649Component } from "./components/app-6939601094161649/app-6939601094161649.component";
import { App7732519636149709Component } from "./components/app-7732519636149709/app-7732519636149709.component";
import { App2354834317850723Component } from "./components/app-2354834317850723/app-2354834317850723.component";
import { App6590419154092049Component } from "./components/app-6590419154092049/app-6590419154092049.component";

// @ts-ignore
import html from './app-8273438445805697.component.html?raw';
// @ts-ignore
import style from './app-8273438445805697.component.scss?inline';

/**
 * COMPONENT: 'app-8273438445805697'
 */

export const App8273438445805697Component = new Component({
  name: 'app-8273438445805697',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App228658037375041Component,
App6939601094161649Component,
App7732519636149709Component,
App2354834317850723Component,
App6590419154092049Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
