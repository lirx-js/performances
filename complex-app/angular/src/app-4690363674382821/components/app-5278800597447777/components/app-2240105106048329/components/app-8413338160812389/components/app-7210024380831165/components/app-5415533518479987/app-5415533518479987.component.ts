import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5415533518479987',
  standalone: true,
  templateUrl: './app-5415533518479987.component.html',
  styleUrl: './app-5415533518479987.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5415533518479987Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
