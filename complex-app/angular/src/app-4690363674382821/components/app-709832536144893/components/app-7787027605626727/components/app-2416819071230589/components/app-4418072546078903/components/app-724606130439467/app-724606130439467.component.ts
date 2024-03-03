import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-724606130439467',
  standalone: true,
  templateUrl: './app-724606130439467.component.html',
  styleUrl: './app-724606130439467.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App724606130439467Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
