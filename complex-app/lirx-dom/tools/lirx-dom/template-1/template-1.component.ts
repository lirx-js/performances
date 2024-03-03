import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

[{imports}]

// @ts-ignore
import html from './[{name}].component.html?raw';
// @ts-ignore
import style from './[{name}].component.scss?inline';

/**
 * COMPONENT: '[{name}]'
 */

export const [{namePascalCase}]Component = new Component({
  name: '[{name}]',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      [{components}]
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
