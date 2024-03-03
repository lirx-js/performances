import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4905529568290165Component } from "./components/app-4905529568290165/app-4905529568290165.component";
import { App4964875557111439Component } from "./components/app-4964875557111439/app-4964875557111439.component";
import { App6506532375869421Component } from "./components/app-6506532375869421/app-6506532375869421.component";
import { App90625105130011Component } from "./components/app-90625105130011/app-90625105130011.component";
import { App8400562137755181Component } from "./components/app-8400562137755181/app-8400562137755181.component";

// @ts-ignore
import html from './app-5349714133778011.component.html?raw';
// @ts-ignore
import style from './app-5349714133778011.component.scss?inline';

/**
 * COMPONENT: 'app-5349714133778011'
 */

export const App5349714133778011Component = new Component({
  name: 'app-5349714133778011',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4905529568290165Component,
App4964875557111439Component,
App6506532375869421Component,
App90625105130011Component,
App8400562137755181Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
