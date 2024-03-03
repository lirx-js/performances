import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8139461593981003',
  standalone: true,
  templateUrl: './app-8139461593981003.component.html',
  styleUrl: './app-8139461593981003.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8139461593981003Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
