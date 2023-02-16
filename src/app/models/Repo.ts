export class Repo {
    id : number;
    name: string;
    assetName: string;
    uploadedBy: number;
    uploadedTime: number;
    constructor(id : number, name: string, assetName: string, uploadedBy: number, uploadedTime: number){
        this.id = id;
        this.name = name;
        this.assetName = assetName;
        this.uploadedBy = uploadedBy;
        this.uploadedTime = uploadedTime;
    }
}
