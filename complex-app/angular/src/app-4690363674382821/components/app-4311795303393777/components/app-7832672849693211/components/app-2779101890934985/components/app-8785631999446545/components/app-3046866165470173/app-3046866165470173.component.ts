import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3046866165470173',
  standalone: true,
  templateUrl: './app-3046866165470173.component.html',
  styleUrl: './app-3046866165470173.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3046866165470173Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
