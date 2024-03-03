import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4260713488526105',
  standalone: true,
  templateUrl: './app-4260713488526105.component.html',
  styleUrl: './app-4260713488526105.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4260713488526105Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
