import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5020943302688585',
  standalone: true,
  templateUrl: './app-5020943302688585.component.html',
  styleUrl: './app-5020943302688585.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5020943302688585Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
