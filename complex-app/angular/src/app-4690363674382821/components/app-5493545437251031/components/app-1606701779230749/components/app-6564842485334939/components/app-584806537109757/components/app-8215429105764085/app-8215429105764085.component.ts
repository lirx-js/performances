import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8215429105764085',
  standalone: true,
  templateUrl: './app-8215429105764085.component.html',
  styleUrl: './app-8215429105764085.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8215429105764085Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
