export default function getStudentsByLocation(StudentsList, city) {
  if (StudentsList instanceof Array) {
    return StudentsList.filter((student) => student.location === city);
  }
  return [];
}
