import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8630257335592393',
  standalone: true,
  templateUrl: './app-8630257335592393.component.html',
  styleUrl: './app-8630257335592393.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8630257335592393Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
