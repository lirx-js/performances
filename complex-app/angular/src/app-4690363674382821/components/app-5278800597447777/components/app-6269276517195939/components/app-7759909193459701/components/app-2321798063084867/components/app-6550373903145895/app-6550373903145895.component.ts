import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6550373903145895',
  standalone: true,
  templateUrl: './app-6550373903145895.component.html',
  styleUrl: './app-6550373903145895.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6550373903145895Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
