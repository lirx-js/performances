import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8873618440886037',
  standalone: true,
  templateUrl: './app-8873618440886037.component.html',
  styleUrl: './app-8873618440886037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8873618440886037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
