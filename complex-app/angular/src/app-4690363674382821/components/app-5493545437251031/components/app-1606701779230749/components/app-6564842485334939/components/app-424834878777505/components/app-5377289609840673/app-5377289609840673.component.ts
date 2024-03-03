import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5377289609840673',
  standalone: true,
  templateUrl: './app-5377289609840673.component.html',
  styleUrl: './app-5377289609840673.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5377289609840673Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
