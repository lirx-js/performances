import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4690583558500837',
  standalone: true,
  templateUrl: './app-4690583558500837.component.html',
  styleUrl: './app-4690583558500837.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4690583558500837Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
