import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8211201158165191',
  standalone: true,
  templateUrl: './app-8211201158165191.component.html',
  styleUrl: './app-8211201158165191.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8211201158165191Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
