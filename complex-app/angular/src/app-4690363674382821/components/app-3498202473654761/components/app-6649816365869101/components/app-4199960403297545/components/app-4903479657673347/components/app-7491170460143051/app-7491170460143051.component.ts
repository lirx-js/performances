import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7491170460143051',
  standalone: true,
  templateUrl: './app-7491170460143051.component.html',
  styleUrl: './app-7491170460143051.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7491170460143051Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
