import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6739309667130601',
  standalone: true,
  templateUrl: './app-6739309667130601.component.html',
  styleUrl: './app-6739309667130601.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6739309667130601Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
