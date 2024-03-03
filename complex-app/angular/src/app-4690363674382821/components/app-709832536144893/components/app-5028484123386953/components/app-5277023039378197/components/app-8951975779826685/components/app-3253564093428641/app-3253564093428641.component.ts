import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3253564093428641',
  standalone: true,
  templateUrl: './app-3253564093428641.component.html',
  styleUrl: './app-3253564093428641.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3253564093428641Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
