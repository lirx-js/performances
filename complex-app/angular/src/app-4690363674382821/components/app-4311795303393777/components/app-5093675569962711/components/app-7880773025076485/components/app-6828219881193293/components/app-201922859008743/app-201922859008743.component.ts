import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-201922859008743',
  standalone: true,
  templateUrl: './app-201922859008743.component.html',
  styleUrl: './app-201922859008743.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App201922859008743Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
