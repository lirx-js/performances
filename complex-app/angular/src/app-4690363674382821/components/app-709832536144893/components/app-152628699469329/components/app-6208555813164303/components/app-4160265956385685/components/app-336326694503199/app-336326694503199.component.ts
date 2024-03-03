import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-336326694503199',
  standalone: true,
  templateUrl: './app-336326694503199.component.html',
  styleUrl: './app-336326694503199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App336326694503199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
