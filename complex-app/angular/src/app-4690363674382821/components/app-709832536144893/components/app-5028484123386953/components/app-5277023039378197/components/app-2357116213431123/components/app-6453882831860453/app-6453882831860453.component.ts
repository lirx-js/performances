import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6453882831860453',
  standalone: true,
  templateUrl: './app-6453882831860453.component.html',
  styleUrl: './app-6453882831860453.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6453882831860453Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
