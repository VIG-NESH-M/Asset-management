import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Asset } from 'src/app/models/Asset';
import { Ticket } from 'src/app/models/Ticket';
import { RestapiService } from 'src/app/restapi.service';
import { TokenService } from 'src/app/token.service';

// import { Repo } from 'src/app/models/Repo';
@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent {
  
  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  assetList : any;
  
  form!: UntypedFormGroup;

  file: File | null = null;

  userData: any;

  constructor(private formBuilder: UntypedFormBuilder, private notification: NzMessageService,
    private restApiService: RestapiService, private router: Router, private tokenService: TokenService) {
      this.form = this.formBuilder.group({
        assetName: ['', [Validators.required]]
      })
    }

  submitForm(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value);
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem("access_token") === null) {
      this.router.navigateByUrl("/signin");
      window.location.pathname = "/signin"
    }
    this.userData = this.tokenService.getCurrentUserData()

  }


  handleTicketCreation() {
    var formData = this.form.value;
    var assetName = formData.assetName;
    if (this.file == null) {
      console.log("Please Attach Document");
    } else {
      console.log("With Attachment", assetName, this.file);
    this.createRepo(assetName, this.file)
    }
    
    }

    createRepo(assetName : String, file : File)
    {
      this.restApiService.createRepo(assetName,file).subscribe(
        data => {
          console.log("Success", data)
          this.notification.success("Ticket created Successfully.")
          this.form.reset();
          this.handleClose()
        },
        error => {
          console.log("Error occcured", error)
          this.notification.error("Ticket creation Failed")
        }
      );
    }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  handleClose() {
    this.close.emit();
  }


  loading: boolean = false;
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
  }

  getAssets() {
    this.restApiService.getAssets().subscribe(
      data => {
        this.assetList = data.responseData;
        console.log(this.assetList)
      },
      error => {
        console.log("Error Occured", error);
        this.notification.error("Error Fetching Asset List!")
      }

    )
  }
}
