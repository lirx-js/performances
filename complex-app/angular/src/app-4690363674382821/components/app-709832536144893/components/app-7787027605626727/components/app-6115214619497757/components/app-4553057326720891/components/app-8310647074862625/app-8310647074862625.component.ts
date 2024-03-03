import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8310647074862625',
  standalone: true,
  templateUrl: './app-8310647074862625.component.html',
  styleUrl: './app-8310647074862625.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8310647074862625Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
