import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  
  constructor(private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe({
      complete:() => this.router.navigate(['department']),
      error: (error:any) => this.error = error
    });
  }

}
