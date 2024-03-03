import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7910928903426295Component } from "./components/app-7910928903426295/app-7910928903426295.component";
import { App4090273872251511Component } from "./components/app-4090273872251511/app-4090273872251511.component";
import { App2137034697925539Component } from "./components/app-2137034697925539/app-2137034697925539.component";
import { App4811389601366169Component } from "./components/app-4811389601366169/app-4811389601366169.component";
import { App5912766703712177Component } from "./components/app-5912766703712177/app-5912766703712177.component";

// @ts-ignore
import html from './app-8455946670724329.component.html?raw';
// @ts-ignore
import style from './app-8455946670724329.component.scss?inline';

/**
 * COMPONENT: 'app-8455946670724329'
 */

export const App8455946670724329Component = new Component({
  name: 'app-8455946670724329',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7910928903426295Component,
App4090273872251511Component,
App2137034697925539Component,
App4811389601366169Component,
App5912766703712177Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
