import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5331726383708327',
  standalone: true,
  templateUrl: './app-5331726383708327.component.html',
  styleUrl: './app-5331726383708327.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5331726383708327Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
