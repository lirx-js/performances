import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-590597803301513',
  standalone: true,
  templateUrl: './app-590597803301513.component.html',
  styleUrl: './app-590597803301513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App590597803301513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
