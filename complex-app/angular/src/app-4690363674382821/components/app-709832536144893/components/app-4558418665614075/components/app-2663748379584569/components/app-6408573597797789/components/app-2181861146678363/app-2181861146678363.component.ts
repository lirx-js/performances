import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2181861146678363',
  standalone: true,
  templateUrl: './app-2181861146678363.component.html',
  styleUrl: './app-2181861146678363.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2181861146678363Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
