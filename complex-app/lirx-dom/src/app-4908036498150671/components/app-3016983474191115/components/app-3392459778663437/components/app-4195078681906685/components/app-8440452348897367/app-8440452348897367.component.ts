import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App166975946615441Component } from "./components/app-166975946615441/app-166975946615441.component";
import { App597535159244873Component } from "./components/app-597535159244873/app-597535159244873.component";
import { App7014395444349989Component } from "./components/app-7014395444349989/app-7014395444349989.component";
import { App5721177176616149Component } from "./components/app-5721177176616149/app-5721177176616149.component";
import { App52404392198353Component } from "./components/app-52404392198353/app-52404392198353.component";

// @ts-ignore
import html from './app-8440452348897367.component.html?raw';
// @ts-ignore
import style from './app-8440452348897367.component.scss?inline';

/**
 * COMPONENT: 'app-8440452348897367'
 */

export const App8440452348897367Component = new Component({
  name: 'app-8440452348897367',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App166975946615441Component,
App597535159244873Component,
App7014395444349989Component,
App5721177176616149Component,
App52404392198353Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
