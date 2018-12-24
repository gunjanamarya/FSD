import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { saveAs } from 'file-saver';
import { DocumentService } from '../../services/document.service';

const URL = 'http://localhost:3000/add-file/';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css'],
  providers: [DocumentService]
})
export class AddDocumentComponent implements OnInit {

  id: string;
  desc: string;
  files: any[];
  uploader: FileUploader = new FileUploader({
    url: URL,
    // itemAlias: 'file'
  });
  constructor(private route: ActivatedRoute,
    private documentService: DocumentService) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.getFiles();

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append("description", (this.desc != undefined ? this.desc : ""));
      form.append("userId", this.id);
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      // console.log('ImageUpload:uploaded:', item, status, response);
      this.getFiles();
    };
  }

  getFiles() {
    // console.log('getfiles called')
    this.documentService.getFiles(this.id).subscribe(data => {
      this.files = data;
    })
  }

  onDelete(id) {
    // console.log(id)
    this.documentService.deleteFile(id).subscribe(result => {
      this.getFiles();
    })
  }

  onDownload(originalName, fileName) {
    this.documentService.downloadFile(fileName).subscribe(result => {
      // console.log(result);
      saveAs(result, originalName)
    }, error => {
      console.log(error)
    })
  }

}
