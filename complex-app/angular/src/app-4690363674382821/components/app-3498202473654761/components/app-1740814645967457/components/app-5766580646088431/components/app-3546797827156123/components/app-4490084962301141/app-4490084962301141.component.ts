import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4490084962301141',
  standalone: true,
  templateUrl: './app-4490084962301141.component.html',
  styleUrl: './app-4490084962301141.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4490084962301141Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
