import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2946192544623285',
  standalone: true,
  templateUrl: './app-2946192544623285.component.html',
  styleUrl: './app-2946192544623285.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2946192544623285Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
