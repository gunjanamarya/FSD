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

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      this.getFiles();
    };
  }

  upload() {
    this.uploader.onBuildItemForm = function (fileItem, form) {
      form.append("description", 'demo');
      form.append("userId", '5c1e8c5b85ef882b24324f88');
      return { fileItem, form }
    }
    this.uploader.uploadAll();
  }

  getFiles() {
    this.documentService.getFiles().subscribe(data => {
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
