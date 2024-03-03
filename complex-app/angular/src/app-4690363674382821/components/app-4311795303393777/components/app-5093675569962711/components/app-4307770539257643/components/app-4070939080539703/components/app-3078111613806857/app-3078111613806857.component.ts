import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3078111613806857',
  standalone: true,
  templateUrl: './app-3078111613806857.component.html',
  styleUrl: './app-3078111613806857.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3078111613806857Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
