export interface IDocument {
  title: string
  body: string
}

export interface IStudentDocument extends IDocument {
  id: number
}

export type IStudentDocumentListResponse = Array<IStudentDocument>
