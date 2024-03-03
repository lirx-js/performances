import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7008411077920731Component } from "./components/app-7008411077920731/app-7008411077920731.component";
import { App2942322745315045Component } from "./components/app-2942322745315045/app-2942322745315045.component";
import { App3868697687954123Component } from "./components/app-3868697687954123/app-3868697687954123.component";
import { App5724227718567665Component } from "./components/app-5724227718567665/app-5724227718567665.component";
import { App505717787559393Component } from "./components/app-505717787559393/app-505717787559393.component";

// @ts-ignore
import html from './app-142024238373631.component.html?raw';
// @ts-ignore
import style from './app-142024238373631.component.scss?inline';

/**
 * COMPONENT: 'app-142024238373631'
 */

export const App142024238373631Component = new Component({
  name: 'app-142024238373631',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7008411077920731Component,
App2942322745315045Component,
App3868697687954123Component,
App5724227718567665Component,
App505717787559393Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
