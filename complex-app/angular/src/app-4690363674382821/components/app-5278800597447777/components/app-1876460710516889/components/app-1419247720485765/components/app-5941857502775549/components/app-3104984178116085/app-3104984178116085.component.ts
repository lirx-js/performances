import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3104984178116085',
  standalone: true,
  templateUrl: './app-3104984178116085.component.html',
  styleUrl: './app-3104984178116085.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3104984178116085Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
