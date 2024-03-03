import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6236903171634955Component } from "./components/app-6236903171634955/app-6236903171634955.component";
import { App465936723718409Component } from "./components/app-465936723718409/app-465936723718409.component";
import { App545797682728889Component } from "./components/app-545797682728889/app-545797682728889.component";
import { App5572696028473583Component } from "./components/app-5572696028473583/app-5572696028473583.component";
import { App3016528154294847Component } from "./components/app-3016528154294847/app-3016528154294847.component";

// @ts-ignore
import html from './app-7877399997174527.component.html?raw';
// @ts-ignore
import style from './app-7877399997174527.component.scss?inline';

/**
 * COMPONENT: 'app-7877399997174527'
 */

export const App7877399997174527Component = new Component({
  name: 'app-7877399997174527',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6236903171634955Component,
App465936723718409Component,
App545797682728889Component,
App5572696028473583Component,
App3016528154294847Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
