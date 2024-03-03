import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-654428635202713',
  standalone: true,
  templateUrl: './app-654428635202713.component.html',
  styleUrl: './app-654428635202713.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App654428635202713Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
