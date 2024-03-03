import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4842183543786385',
  standalone: true,
  templateUrl: './app-4842183543786385.component.html',
  styleUrl: './app-4842183543786385.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4842183543786385Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
