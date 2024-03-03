import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5880495103792025Component } from "./components/app-5880495103792025/app-5880495103792025.component";
import { App7596793068584477Component } from "./components/app-7596793068584477/app-7596793068584477.component";
import { App8541687622386125Component } from "./components/app-8541687622386125/app-8541687622386125.component";
import { App3922909623287485Component } from "./components/app-3922909623287485/app-3922909623287485.component";
import { App7535452792061295Component } from "./components/app-7535452792061295/app-7535452792061295.component";

// @ts-ignore
import html from './app-5133641987225585.component.html?raw';
// @ts-ignore
import style from './app-5133641987225585.component.scss?inline';

/**
 * COMPONENT: 'app-5133641987225585'
 */

export const App5133641987225585Component = new Component({
  name: 'app-5133641987225585',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5880495103792025Component,
App7596793068584477Component,
App8541687622386125Component,
App3922909623287485Component,
App7535452792061295Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
