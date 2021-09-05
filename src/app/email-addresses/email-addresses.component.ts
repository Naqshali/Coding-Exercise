import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailsService } from '../Services/emails.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email-addresses',
  templateUrl: './email-addresses.component.html',
  styleUrls: ['./email-addresses.component.sass']
})
export class EmailAddressesComponent implements OnInit {

  emailsObj:any = {
    list:[]
  }
  @Output() shareEmailData:EventEmitter<any> = new EventEmitter();
  constructor(private emailsService: EmailsService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getContactsList();
  }

  getContactsList(){
    this.emailsService.getEmailsList().subscribe(res => {
      this.emailsObj.list = res;
      this.shareEmailData.emit(this.emailsObj.list);
    });
  }
}
