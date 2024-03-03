import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2072324429011187',
  standalone: true,
  templateUrl: './app-2072324429011187.component.html',
  styleUrl: './app-2072324429011187.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2072324429011187Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
