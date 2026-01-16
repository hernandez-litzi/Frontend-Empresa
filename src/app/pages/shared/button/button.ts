import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() texto= '';
  @Input() ruta='';
  @Input () variant: "" | undefined;
}
