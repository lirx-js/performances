import { interval, IObservable, map$$, merge, single } from '@lirx/core';
import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component, VirtualComponentNode } from '@lirx/dom';

// @ts-ignore
import html from './app-265858323044479.component.html?raw';
// @ts-ignore
import style from './app-265858323044479.component.scss?inline';

/**
 * COMPONENT: 'app-265858323044479'
 */

interface ITemplateData {
  readonly date: IObservable<string>;
  // readonly date: ISignal<string>;
}

export const App265858323044479Component = new Component<HTMLElement, object, ITemplateData>({
  name: 'app-265858323044479',
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
