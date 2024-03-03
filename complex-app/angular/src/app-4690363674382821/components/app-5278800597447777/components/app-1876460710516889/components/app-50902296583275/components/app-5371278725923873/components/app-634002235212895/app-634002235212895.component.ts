import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-634002235212895',
  standalone: true,
  templateUrl: './app-634002235212895.component.html',
  styleUrl: './app-634002235212895.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App634002235212895Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
