import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3778429582070875',
  standalone: true,
  templateUrl: './app-3778429582070875.component.html',
  styleUrl: './app-3778429582070875.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3778429582070875Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
