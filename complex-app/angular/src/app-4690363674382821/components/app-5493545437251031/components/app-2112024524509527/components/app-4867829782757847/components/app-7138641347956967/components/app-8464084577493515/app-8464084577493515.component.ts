import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8464084577493515',
  standalone: true,
  templateUrl: './app-8464084577493515.component.html',
  styleUrl: './app-8464084577493515.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8464084577493515Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
