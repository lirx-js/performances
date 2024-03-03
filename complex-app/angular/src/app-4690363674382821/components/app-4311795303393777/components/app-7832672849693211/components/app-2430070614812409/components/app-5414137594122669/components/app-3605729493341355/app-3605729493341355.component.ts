import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3605729493341355',
  standalone: true,
  templateUrl: './app-3605729493341355.component.html',
  styleUrl: './app-3605729493341355.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3605729493341355Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
