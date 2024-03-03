import { interval, IObservable, map$$, merge, single } from '@lirx/core';
import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component, VirtualComponentNode } from '@lirx/dom';

// @ts-ignore
import html from './app-5691689561666341.component.html?raw';
// @ts-ignore
import style from './app-5691689561666341.component.scss?inline';

/**
 * COMPONENT: 'app-5691689561666341'
 */

interface ITemplateData {
  readonly date: IObservable<string>;
  // readonly date: ISignal<string>;
}

export const App5691689561666341Component = new Component<HTMLElement, object, ITemplateData>({
  name: 'app-5691689561666341',
  template: compileReactiveHTMLAsComponentTemplate({ html }),
  styles: [compileStyleAsComponentStyle(style)],
  templateData: (node: VirtualComponentNode<HTMLElement, object>): ITemplateData => {

    const date = map$$(merge([single(void 0), interval(1000)]), () => new Date().toString());

    // const date = signal('');
    //
    // node.onConnected(() => {
    //   return interval(1000)(() => date.set(new Date().toString()));
    // });
    //

    return {
      date,
    };
  },
});
