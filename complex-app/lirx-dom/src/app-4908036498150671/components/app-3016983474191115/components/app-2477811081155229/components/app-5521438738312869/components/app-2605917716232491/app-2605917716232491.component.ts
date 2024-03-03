import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8364526413513473Component } from "./components/app-8364526413513473/app-8364526413513473.component";
import { App2183025146735721Component } from "./components/app-2183025146735721/app-2183025146735721.component";
import { App5985683829941541Component } from "./components/app-5985683829941541/app-5985683829941541.component";
import { App5842276719139807Component } from "./components/app-5842276719139807/app-5842276719139807.component";
import { App6479650411676917Component } from "./components/app-6479650411676917/app-6479650411676917.component";

// @ts-ignore
import html from './app-2605917716232491.component.html?raw';
// @ts-ignore
import style from './app-2605917716232491.component.scss?inline';

/**
 * COMPONENT: 'app-2605917716232491'
 */

export const App2605917716232491Component = new Component({
  name: 'app-2605917716232491',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8364526413513473Component,
App2183025146735721Component,
App5985683829941541Component,
App5842276719139807Component,
App6479650411676917Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
