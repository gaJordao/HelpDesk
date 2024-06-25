import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app_nav',
    templateUrl: './nav.components.html',
    styleUrls: ['./nav.components.css']
})
export class NavComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.navigate(['tecnicos'])
    }
}