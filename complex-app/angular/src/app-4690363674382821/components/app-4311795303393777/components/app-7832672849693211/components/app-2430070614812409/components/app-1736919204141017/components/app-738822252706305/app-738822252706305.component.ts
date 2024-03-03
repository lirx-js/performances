import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-738822252706305',
  standalone: true,
  templateUrl: './app-738822252706305.component.html',
  styleUrl: './app-738822252706305.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App738822252706305Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
