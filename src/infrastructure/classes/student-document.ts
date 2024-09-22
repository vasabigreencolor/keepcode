import moment from "moment"
import type { IStudentDocument } from "../interfaces/domains/i-student-document"
import { DocumentType } from "../enums/document-type"
import { getRandomElementFromArr } from "@/utils/get-random-arr-el"

const types = [
  DocumentType.PDF,
  DocumentType.JPG,
  DocumentType.DOC,
  DocumentType.XLS,
]

export class StudentDocument {
  id: number
  title: string
  body: string
  createdAt: moment.Moment
  type: DocumentType

  constructor(data: IStudentDocument) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.createdAt = moment().date(data.id)
    this.type = getRandomElementFromArr(types)
  }
}