import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8490232892770579',
  standalone: true,
  templateUrl: './app-8490232892770579.component.html',
  styleUrl: './app-8490232892770579.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8490232892770579Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
