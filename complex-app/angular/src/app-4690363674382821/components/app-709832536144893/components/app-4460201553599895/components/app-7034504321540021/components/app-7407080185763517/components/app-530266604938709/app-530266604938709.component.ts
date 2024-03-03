import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-530266604938709',
  standalone: true,
  templateUrl: './app-530266604938709.component.html',
  styleUrl: './app-530266604938709.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App530266604938709Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
