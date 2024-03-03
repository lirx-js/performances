import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App314689810686923Component } from "./components/app-314689810686923/app-314689810686923.component";
import { App5416412479003293Component } from "./components/app-5416412479003293/app-5416412479003293.component";
import { App8000122245365333Component } from "./components/app-8000122245365333/app-8000122245365333.component";
import { App5054538659557123Component } from "./components/app-5054538659557123/app-5054538659557123.component";
import { App8741206111428887Component } from "./components/app-8741206111428887/app-8741206111428887.component";

// @ts-ignore
import html from './app-5843079715607917.component.html?raw';
// @ts-ignore
import style from './app-5843079715607917.component.scss?inline';

/**
 * COMPONENT: 'app-5843079715607917'
 */

export const App5843079715607917Component = new Component({
  name: 'app-5843079715607917',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App314689810686923Component,
App5416412479003293Component,
App8000122245365333Component,
App5054538659557123Component,
App8741206111428887Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
