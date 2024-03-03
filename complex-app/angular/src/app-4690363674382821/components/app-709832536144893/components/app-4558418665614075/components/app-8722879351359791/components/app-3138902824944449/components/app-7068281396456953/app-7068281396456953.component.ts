import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7068281396456953',
  standalone: true,
  templateUrl: './app-7068281396456953.component.html',
  styleUrl: './app-7068281396456953.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7068281396456953Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
