const getAllCourses = "SELECT id, course FROM Course";
const getCourseById = "SELECT id, course FROM Course WHERE id = $1";
const addCourseQuery= "INSERT INTO Course (course) values ($1);"
const updateCourseQuery= "UPDATE course set course=$1 WHERE id=$2";
const deleteCourseQuery="DELETE FROM Course WHERE id=$1";

module.exports = {
   getAllCourses,
   getCourseById,
   addCourseQuery,
   updateCourseQuery,
   deleteCourseQuery
};