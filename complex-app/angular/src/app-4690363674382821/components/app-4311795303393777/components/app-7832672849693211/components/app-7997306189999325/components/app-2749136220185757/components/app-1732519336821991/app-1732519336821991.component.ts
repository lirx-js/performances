import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1732519336821991',
  standalone: true,
  templateUrl: './app-1732519336821991.component.html',
  styleUrl: './app-1732519336821991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1732519336821991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
