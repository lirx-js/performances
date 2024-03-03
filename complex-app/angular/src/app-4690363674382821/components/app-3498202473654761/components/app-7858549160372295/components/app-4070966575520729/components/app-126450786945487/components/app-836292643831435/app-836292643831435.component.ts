import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-836292643831435',
  standalone: true,
  templateUrl: './app-836292643831435.component.html',
  styleUrl: './app-836292643831435.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App836292643831435Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
