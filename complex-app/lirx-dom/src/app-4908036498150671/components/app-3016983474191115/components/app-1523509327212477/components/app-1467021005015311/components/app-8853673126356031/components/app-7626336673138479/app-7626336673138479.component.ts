import { interval, IObservable, map$$, merge, single } from '@lirx/core';
import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component, VirtualComponentNode } from '@lirx/dom';

// @ts-ignore
import html from './app-7626336673138479.component.html?raw';
// @ts-ignore
import style from './app-7626336673138479.component.scss?inline';

/**
 * COMPONENT: 'app-7626336673138479'
 */

interface ITemplateData {
  readonly date: IObservable<string>;
  // readonly date: ISignal<string>;
}

export const App7626336673138479Component = new Component<HTMLElement, object, ITemplateData>({
  name: 'app-7626336673138479',
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
