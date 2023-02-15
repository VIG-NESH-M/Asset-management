import { Component } from '@angular/core';

interface DataItem {
  id: number;
  name: string;
  asset: string;
  uploadedBy: string;
  uploadedDate: number;
}

@Component({
  selector: 'app-knowledge-repo',
  templateUrl: './knowledge-repo.component.html',
  styleUrls: ['./knowledge-repo.component.css'],
})
export class KnowledgeRepoComponent {
  listOfColumn = [
    {
      title: 'Document Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Document Name',
      compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      priority: false,
    },
    {
      title: 'Asset Name',
      compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      priority: false,
    },
    {
      title: 'Uploaded By Id',
      compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      priority: false,
    },
    {
      title: 'Uploaded Date',
      compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      priority: false,
    },
  ];
  listOfData: DataItem[] = [
    {
      id: 10290,
      name: 'Doument 001',
      asset: '1 test',
      uploadedBy: 'Admin 1',
      uploadedDate: 1675142322833,
    },
    {
      id: 10290,
      name: 'Doument 002',
      asset: '2 test',
      uploadedBy: 'Admin 9',
      uploadedDate: 1675142322833,
    },
    {
      id: 10290,
      name: 'Doument 005',
      asset: '3 test',
      uploadedBy: 'Admin 3',
      uploadedDate: 1675142322833,
    },
    {
      id: 10290,
      name: 'Doument 009',
      asset: '4 test',
      uploadedBy: 'Admin 4',
      uploadedDate: 1675142322833,
    },
  ];
  
  isVisible = false;
  isConfirmLoading = false;

  constructor() {}

  showCreate(): void {
    this.isVisible = true;
  }

  // handleOk(): void {
  //   this.isConfirmLoading = true;
  //   setTimeout(() => {
  //     this.isVisible = false;
  //     this.isConfirmLoading = false;
  //   }, 1000);
  // }
  handleOk(): void {
    console.log('click ok');
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}