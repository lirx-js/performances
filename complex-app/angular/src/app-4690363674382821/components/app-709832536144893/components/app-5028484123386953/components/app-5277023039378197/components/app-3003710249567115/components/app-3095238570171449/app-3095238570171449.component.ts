import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3095238570171449',
  standalone: true,
  templateUrl: './app-3095238570171449.component.html',
  styleUrl: './app-3095238570171449.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3095238570171449Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
