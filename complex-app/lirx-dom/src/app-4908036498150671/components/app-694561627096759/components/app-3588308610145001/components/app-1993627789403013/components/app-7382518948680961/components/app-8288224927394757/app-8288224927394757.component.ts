import { interval, IObservable, map$$, merge, single } from '@lirx/core';
import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component, VirtualComponentNode } from '@lirx/dom';

// @ts-ignore
import html from './app-8288224927394757.component.html?raw';
// @ts-ignore
import style from './app-8288224927394757.component.scss?inline';

/**
 * COMPONENT: 'app-8288224927394757'
 */

interface ITemplateData {
  readonly date: IObservable<string>;
  // readonly date: ISignal<string>;
}

export const App8288224927394757Component = new Component<HTMLElement, object, ITemplateData>({
  name: 'app-8288224927394757',
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
