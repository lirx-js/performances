import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-409793577199575',
  standalone: true,
  templateUrl: './app-409793577199575.component.html',
  styleUrl: './app-409793577199575.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App409793577199575Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
