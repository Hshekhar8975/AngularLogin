import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import Alias from '../alias';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  data: Alias[];

  constructor(
    private formBuilder: FormBuilder, 
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.ds.getAlias().subscribe( (info: any) => {
      this.data = info;
    })
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // console.log(this.data)

    let name = this.registerForm.value.userName;
    let pass = this.registerForm.value.password;

    if(name === "admin" && pass === "Jinnmail@123")
    {
      this.router.navigate(['/dashboard']);
    }
    else
    {
      alert("Failed :-(");
    }

    
    // this.ds.getAlias().subscribe( result => {
    //   console.log(JSON.stringify(result))
    // } )
  }
}
