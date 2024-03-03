import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2435108417426063',
  standalone: true,
  templateUrl: './app-2435108417426063.component.html',
  styleUrl: './app-2435108417426063.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2435108417426063Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
