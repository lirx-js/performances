import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8333601337957863',
  standalone: true,
  templateUrl: './app-8333601337957863.component.html',
  styleUrl: './app-8333601337957863.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8333601337957863Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
