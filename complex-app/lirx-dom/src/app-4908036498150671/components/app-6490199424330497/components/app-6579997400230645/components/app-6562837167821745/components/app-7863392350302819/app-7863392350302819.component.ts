import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7430725063857235Component } from "./components/app-7430725063857235/app-7430725063857235.component";
import { App1581080677776395Component } from "./components/app-1581080677776395/app-1581080677776395.component";
import { App660458516697823Component } from "./components/app-660458516697823/app-660458516697823.component";
import { App5039954812288505Component } from "./components/app-5039954812288505/app-5039954812288505.component";
import { App5701713235118725Component } from "./components/app-5701713235118725/app-5701713235118725.component";

// @ts-ignore
import html from './app-7863392350302819.component.html?raw';
// @ts-ignore
import style from './app-7863392350302819.component.scss?inline';

/**
 * COMPONENT: 'app-7863392350302819'
 */

export const App7863392350302819Component = new Component({
  name: 'app-7863392350302819',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7430725063857235Component,
App1581080677776395Component,
App660458516697823Component,
App5039954812288505Component,
App5701713235118725Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
