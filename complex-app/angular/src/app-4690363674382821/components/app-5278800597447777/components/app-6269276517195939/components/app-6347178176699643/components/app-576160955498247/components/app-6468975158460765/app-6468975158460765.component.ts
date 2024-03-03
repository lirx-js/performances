import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6468975158460765',
  standalone: true,
  templateUrl: './app-6468975158460765.component.html',
  styleUrl: './app-6468975158460765.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6468975158460765Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
