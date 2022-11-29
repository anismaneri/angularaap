import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    template: `<h1> This is my server component</h1>
    <h2 class="test1" id="test"> This is H2 </h2>
    {{name}}<app-servers></app-servers>`,
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
        name: string = 'codemind';
}