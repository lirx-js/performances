import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2133346561472099',
  standalone: true,
  templateUrl: './app-2133346561472099.component.html',
  styleUrl: './app-2133346561472099.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2133346561472099Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
