import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-894736749075683',
  standalone: true,
  templateUrl: './app-894736749075683.component.html',
  styleUrl: './app-894736749075683.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App894736749075683Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
