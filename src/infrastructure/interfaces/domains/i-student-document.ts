export interface IStudentDocument {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type IStudentDocumentListResponse = Array<IStudentDocument>
