import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5799993750112431',
  standalone: true,
  templateUrl: './app-5799993750112431.component.html',
  styleUrl: './app-5799993750112431.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5799993750112431Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
