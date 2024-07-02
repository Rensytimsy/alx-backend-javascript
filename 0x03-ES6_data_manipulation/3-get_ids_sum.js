export default function getStudentIdsSum(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.reduce((prevStu, nextStu) => prevStu.id || prevStu + nextStu.id, 0);
  }
  return 0;
}
