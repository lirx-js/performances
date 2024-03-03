import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-917822831776133',
  standalone: true,
  templateUrl: './app-917822831776133.component.html',
  styleUrl: './app-917822831776133.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App917822831776133Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
