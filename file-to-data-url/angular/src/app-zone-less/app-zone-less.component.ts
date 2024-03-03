import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-zone-less.component.html',
  styleUrl: './app-zone-less.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppZoneLessComponent {
  base64Url = signal<string>('');
  dragOver = signal<boolean>(false);
  #changeDetectorRef = inject(ChangeDetectorRef);

  #detectChanges(): void {
    this.#changeDetectorRef.detectChanges();
  }

  #readBlobAsDataUrl(blob: Blob): Promise<string> {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise<string>(resolve => {
      reader.onloadend = (): void => {
        resolve(reader.result as string);
      };
    });
  }

  onFileChange(file: File): void {
    this.#readBlobAsDataUrl(file).then((url: string) => {
      this.base64Url.set(url);
      this.#detectChanges();
    });
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragOver.set(true);
    this.#detectChanges();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.dragOver.set(false);
    this.#detectChanges();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const file: File | null | undefined = event.dataTransfer?.items?.[0].getAsFile();
    if (file) {
      this.onFileChange(file);
    } else {
      alert('Please drop a file');
    }
  }
}
