import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Services/contacts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  contactsObj:any = {
    list:[],
    selectedContact:{},
    search: ""
  }
  constructor(private contactService: ContactsService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getContactsList();
  }

  getContactsList(){
    this.contactService.getContactsList().subscribe(res => {
      this.contactsObj.list = res;
    },error => {
      console.log("Error occured",error)
    });
  }

  shareEmailData(data:any){
    this.contactsObj.list.forEach(function (con:any) {
      data.forEach(function (em:any) {
        if(!con.emails){
          con.emails = [];
        }
        if(con.id == em.contact_id){
          con.emails.push(em);
        }
      });
    });
    if(this.contactsObj.list[0]){
      this.contactsObj.selectedContact = this.contactsObj.list[0];
    }
  }

  setSelectedContactInfo(contact:any){
    this.contactsObj.selectedContact = contact;
  }
}