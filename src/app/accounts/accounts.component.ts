import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-accounts',
  standalone: false,

  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  accountFormGroup! : FormGroup;
  constructor(private fb : FormBuilder) {
  }
  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accoundId : this.fb.control('')
    })
  }

  handleSearchAccount() {

  }
}
