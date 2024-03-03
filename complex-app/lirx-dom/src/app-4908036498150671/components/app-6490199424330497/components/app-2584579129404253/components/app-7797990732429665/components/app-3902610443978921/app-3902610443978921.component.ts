import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6067982201039Component } from "./components/app-6067982201039/app-6067982201039.component";
import { App8365747512344091Component } from "./components/app-8365747512344091/app-8365747512344091.component";
import { App2974324685824815Component } from "./components/app-2974324685824815/app-2974324685824815.component";
import { App5164734863243555Component } from "./components/app-5164734863243555/app-5164734863243555.component";
import { App5853063722462007Component } from "./components/app-5853063722462007/app-5853063722462007.component";

// @ts-ignore
import html from './app-3902610443978921.component.html?raw';
// @ts-ignore
import style from './app-3902610443978921.component.scss?inline';

/**
 * COMPONENT: 'app-3902610443978921'
 */

export const App3902610443978921Component = new Component({
  name: 'app-3902610443978921',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6067982201039Component,
App8365747512344091Component,
App2974324685824815Component,
App5164734863243555Component,
App5853063722462007Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
