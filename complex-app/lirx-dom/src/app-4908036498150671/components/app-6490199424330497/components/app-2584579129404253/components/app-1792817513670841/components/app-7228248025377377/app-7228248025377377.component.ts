import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2126272237468213Component } from "./components/app-2126272237468213/app-2126272237468213.component";
import { App8330710892336705Component } from "./components/app-8330710892336705/app-8330710892336705.component";
import { App8340666759863455Component } from "./components/app-8340666759863455/app-8340666759863455.component";
import { App1159051825029557Component } from "./components/app-1159051825029557/app-1159051825029557.component";
import { App1759961633691723Component } from "./components/app-1759961633691723/app-1759961633691723.component";

// @ts-ignore
import html from './app-7228248025377377.component.html?raw';
// @ts-ignore
import style from './app-7228248025377377.component.scss?inline';

/**
 * COMPONENT: 'app-7228248025377377'
 */

export const App7228248025377377Component = new Component({
  name: 'app-7228248025377377',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2126272237468213Component,
App8330710892336705Component,
App8340666759863455Component,
App1159051825029557Component,
App1759961633691723Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
