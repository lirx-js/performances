import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-606601457312465',
  standalone: true,
  templateUrl: './app-606601457312465.component.html',
  styleUrl: './app-606601457312465.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App606601457312465Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
