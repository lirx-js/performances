import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8941814363221621',
  standalone: true,
  templateUrl: './app-8941814363221621.component.html',
  styleUrl: './app-8941814363221621.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8941814363221621Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
