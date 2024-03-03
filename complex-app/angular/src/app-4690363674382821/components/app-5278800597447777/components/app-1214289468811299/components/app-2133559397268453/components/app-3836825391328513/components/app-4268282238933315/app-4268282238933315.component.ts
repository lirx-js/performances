import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4268282238933315',
  standalone: true,
  templateUrl: './app-4268282238933315.component.html',
  styleUrl: './app-4268282238933315.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4268282238933315Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
