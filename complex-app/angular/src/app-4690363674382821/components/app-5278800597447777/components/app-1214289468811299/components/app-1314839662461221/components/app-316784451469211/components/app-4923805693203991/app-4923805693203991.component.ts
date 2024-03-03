import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4923805693203991',
  standalone: true,
  templateUrl: './app-4923805693203991.component.html',
  styleUrl: './app-4923805693203991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4923805693203991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
