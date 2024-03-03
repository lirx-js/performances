import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6382836792516387',
  standalone: true,
  templateUrl: './app-6382836792516387.component.html',
  styleUrl: './app-6382836792516387.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6382836792516387Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
