import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7895968234777395Component } from "./components/app-7895968234777395/app-7895968234777395.component";
import { App1488559484375509Component } from "./components/app-1488559484375509/app-1488559484375509.component";
import { App2813501566656951Component } from "./components/app-2813501566656951/app-2813501566656951.component";
import { App1237363194125011Component } from "./components/app-1237363194125011/app-1237363194125011.component";
import { App3190563928862049Component } from "./components/app-3190563928862049/app-3190563928862049.component";

// @ts-ignore
import html from './app-7002839027960591.component.html?raw';
// @ts-ignore
import style from './app-7002839027960591.component.scss?inline';

/**
 * COMPONENT: 'app-7002839027960591'
 */

export const App7002839027960591Component = new Component({
  name: 'app-7002839027960591',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7895968234777395Component,
App1488559484375509Component,
App2813501566656951Component,
App1237363194125011Component,
App3190563928862049Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
