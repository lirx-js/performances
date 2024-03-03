import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2777400235929137Component } from "./components/app-2777400235929137/app-2777400235929137.component";
import { App3937179629875241Component } from "./components/app-3937179629875241/app-3937179629875241.component";
import { App4228623979254903Component } from "./components/app-4228623979254903/app-4228623979254903.component";
import { App7810982146742075Component } from "./components/app-7810982146742075/app-7810982146742075.component";
import { App8705908111386319Component } from "./components/app-8705908111386319/app-8705908111386319.component";

// @ts-ignore
import html from './app-5377026270887607.component.html?raw';
// @ts-ignore
import style from './app-5377026270887607.component.scss?inline';

/**
 * COMPONENT: 'app-5377026270887607'
 */

export const App5377026270887607Component = new Component({
  name: 'app-5377026270887607',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2777400235929137Component,
App3937179629875241Component,
App4228623979254903Component,
App7810982146742075Component,
App8705908111386319Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
