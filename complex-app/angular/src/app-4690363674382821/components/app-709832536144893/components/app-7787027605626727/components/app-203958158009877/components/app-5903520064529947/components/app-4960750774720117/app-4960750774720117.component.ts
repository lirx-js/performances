import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4960750774720117',
  standalone: true,
  templateUrl: './app-4960750774720117.component.html',
  styleUrl: './app-4960750774720117.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4960750774720117Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
