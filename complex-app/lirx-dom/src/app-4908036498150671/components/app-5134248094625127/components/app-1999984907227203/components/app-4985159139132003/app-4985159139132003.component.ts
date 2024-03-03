import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7235143499952269Component } from "./components/app-7235143499952269/app-7235143499952269.component";
import { App8230261818971923Component } from "./components/app-8230261818971923/app-8230261818971923.component";
import { App4893205329956819Component } from "./components/app-4893205329956819/app-4893205329956819.component";
import { App2110209204511933Component } from "./components/app-2110209204511933/app-2110209204511933.component";
import { App8514068885466695Component } from "./components/app-8514068885466695/app-8514068885466695.component";

// @ts-ignore
import html from './app-4985159139132003.component.html?raw';
// @ts-ignore
import style from './app-4985159139132003.component.scss?inline';

/**
 * COMPONENT: 'app-4985159139132003'
 */

export const App4985159139132003Component = new Component({
  name: 'app-4985159139132003',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7235143499952269Component,
App8230261818971923Component,
App4893205329956819Component,
App2110209204511933Component,
App8514068885466695Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
