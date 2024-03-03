import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8798202281137819Component } from "./components/app-8798202281137819/app-8798202281137819.component";
import { App7972201710769017Component } from "./components/app-7972201710769017/app-7972201710769017.component";
import { App5136205936605403Component } from "./components/app-5136205936605403/app-5136205936605403.component";
import { App1147295638554813Component } from "./components/app-1147295638554813/app-1147295638554813.component";
import { App4789207677521373Component } from "./components/app-4789207677521373/app-4789207677521373.component";

// @ts-ignore
import html from './app-4104917446691877.component.html?raw';
// @ts-ignore
import style from './app-4104917446691877.component.scss?inline';

/**
 * COMPONENT: 'app-4104917446691877'
 */

export const App4104917446691877Component = new Component({
  name: 'app-4104917446691877',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8798202281137819Component,
App7972201710769017Component,
App5136205936605403Component,
App1147295638554813Component,
App4789207677521373Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
