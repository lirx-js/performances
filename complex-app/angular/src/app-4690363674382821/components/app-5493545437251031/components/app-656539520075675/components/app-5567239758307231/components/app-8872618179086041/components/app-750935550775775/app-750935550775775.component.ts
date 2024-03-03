import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-750935550775775',
  standalone: true,
  templateUrl: './app-750935550775775.component.html',
  styleUrl: './app-750935550775775.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App750935550775775Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
