import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-710377286203861',
  standalone: true,
  templateUrl: './app-710377286203861.component.html',
  styleUrl: './app-710377286203861.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App710377286203861Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
