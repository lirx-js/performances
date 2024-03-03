import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8854626790530007',
  standalone: true,
  templateUrl: './app-8854626790530007.component.html',
  styleUrl: './app-8854626790530007.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8854626790530007Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
