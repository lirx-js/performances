import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6310792120093333',
  standalone: true,
  templateUrl: './app-6310792120093333.component.html',
  styleUrl: './app-6310792120093333.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6310792120093333Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
