export const routes = {
  home: '/',
  studentList: '/students',
  studentDocs: (studentId: string) => `/students/docs/${studentId}`
} 