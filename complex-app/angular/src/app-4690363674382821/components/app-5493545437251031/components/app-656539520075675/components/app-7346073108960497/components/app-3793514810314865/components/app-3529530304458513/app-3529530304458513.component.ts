import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3529530304458513',
  standalone: true,
  templateUrl: './app-3529530304458513.component.html',
  styleUrl: './app-3529530304458513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3529530304458513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
