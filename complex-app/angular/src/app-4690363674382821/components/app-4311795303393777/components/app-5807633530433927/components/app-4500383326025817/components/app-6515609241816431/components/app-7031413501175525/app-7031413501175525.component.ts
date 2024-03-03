import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7031413501175525',
  standalone: true,
  templateUrl: './app-7031413501175525.component.html',
  styleUrl: './app-7031413501175525.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7031413501175525Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
