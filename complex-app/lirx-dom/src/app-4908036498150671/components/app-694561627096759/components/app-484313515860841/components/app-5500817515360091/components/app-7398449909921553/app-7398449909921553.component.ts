import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3698936889149477Component } from "./components/app-3698936889149477/app-3698936889149477.component";
import { App2775254277676817Component } from "./components/app-2775254277676817/app-2775254277676817.component";
import { App3723189364723221Component } from "./components/app-3723189364723221/app-3723189364723221.component";
import { App5638359546085501Component } from "./components/app-5638359546085501/app-5638359546085501.component";
import { App5264528632474353Component } from "./components/app-5264528632474353/app-5264528632474353.component";

// @ts-ignore
import html from './app-7398449909921553.component.html?raw';
// @ts-ignore
import style from './app-7398449909921553.component.scss?inline';

/**
 * COMPONENT: 'app-7398449909921553'
 */

export const App7398449909921553Component = new Component({
  name: 'app-7398449909921553',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3698936889149477Component,
App2775254277676817Component,
App3723189364723221Component,
App5638359546085501Component,
App5264528632474353Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
