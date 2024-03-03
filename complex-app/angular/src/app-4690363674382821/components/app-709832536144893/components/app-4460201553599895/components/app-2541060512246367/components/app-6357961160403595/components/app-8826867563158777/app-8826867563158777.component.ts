import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8826867563158777',
  standalone: true,
  templateUrl: './app-8826867563158777.component.html',
  styleUrl: './app-8826867563158777.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8826867563158777Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
