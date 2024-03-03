import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7154629281155797Component } from "./components/app-7154629281155797/app-7154629281155797.component";
import { App6183912705189305Component } from "./components/app-6183912705189305/app-6183912705189305.component";
import { App6802050997460585Component } from "./components/app-6802050997460585/app-6802050997460585.component";
import { App8405279454376843Component } from "./components/app-8405279454376843/app-8405279454376843.component";
import { App517817501754617Component } from "./components/app-517817501754617/app-517817501754617.component";

// @ts-ignore
import html from './app-8054561286240155.component.html?raw';
// @ts-ignore
import style from './app-8054561286240155.component.scss?inline';

/**
 * COMPONENT: 'app-8054561286240155'
 */

export const App8054561286240155Component = new Component({
  name: 'app-8054561286240155',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7154629281155797Component,
App6183912705189305Component,
App6802050997460585Component,
App8405279454376843Component,
App517817501754617Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
