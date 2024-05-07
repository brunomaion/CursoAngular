import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponent } from "./primeiro/primeiro.component";
import { SegundoComponent } from "./segundo/segundo.component";
import { QuintoComponent } from "./quinto/quinto.component";
import { Component06Component } from "./component06/component06.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PrimeiroComponent, SegundoComponent, QuintoComponent, Component06Component]
})
export class AppComponent {
  title = 'CG1';
}
