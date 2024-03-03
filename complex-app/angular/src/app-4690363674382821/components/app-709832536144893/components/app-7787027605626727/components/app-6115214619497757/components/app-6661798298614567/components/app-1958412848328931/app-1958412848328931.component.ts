import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1958412848328931',
  standalone: true,
  templateUrl: './app-1958412848328931.component.html',
  styleUrl: './app-1958412848328931.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1958412848328931Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
