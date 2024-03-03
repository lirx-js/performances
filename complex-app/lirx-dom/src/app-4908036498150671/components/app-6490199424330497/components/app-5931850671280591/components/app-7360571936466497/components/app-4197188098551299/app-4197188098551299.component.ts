import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3437714136586189Component } from "./components/app-3437714136586189/app-3437714136586189.component";
import { App7765366144144091Component } from "./components/app-7765366144144091/app-7765366144144091.component";
import { App7666481613052951Component } from "./components/app-7666481613052951/app-7666481613052951.component";
import { App8401927681811715Component } from "./components/app-8401927681811715/app-8401927681811715.component";
import { App3841246254666367Component } from "./components/app-3841246254666367/app-3841246254666367.component";

// @ts-ignore
import html from './app-4197188098551299.component.html?raw';
// @ts-ignore
import style from './app-4197188098551299.component.scss?inline';

/**
 * COMPONENT: 'app-4197188098551299'
 */

export const App4197188098551299Component = new Component({
  name: 'app-4197188098551299',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3437714136586189Component,
App7765366144144091Component,
App7666481613052951Component,
App8401927681811715Component,
App3841246254666367Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
