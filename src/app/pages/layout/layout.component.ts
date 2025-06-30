import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html'
  // styleUrl: './layout.component.css'
})
export class LayoutComponent {
  myColor='1f2029';
  myStyles = {
    'background-color': '1f2029'
    
  };
}
