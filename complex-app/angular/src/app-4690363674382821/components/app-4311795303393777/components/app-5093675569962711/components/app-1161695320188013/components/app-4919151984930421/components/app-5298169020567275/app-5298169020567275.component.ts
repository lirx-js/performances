import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5298169020567275',
  standalone: true,
  templateUrl: './app-5298169020567275.component.html',
  styleUrl: './app-5298169020567275.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5298169020567275Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
