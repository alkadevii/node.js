const courseRepository = require("../repositories/courseRepo.js");
const ErrorResponse=require('../utils/errorResponse.js')
const asyncHandler = require("../middleware/asynHandler.js");

const getCourses = asyncHandler(async (req, res, next) => {
  const courses = await courseRepository.getAllCourses();
  return res.status(200).json({ success: true, data: {courses} });
});
const getOneCourse = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const course = await courseRepository.getOneCourse(id);
  if (course && course.length>0){
   return res.status(200).json({ success: true, data: course });

  }else{
   next(new ErrorResponse("Product doesnt exist with id",404))
  }

});

const addCourse = asyncHandler(async (req, res, next) => {
  const { course } = req.body;

  await courseRepository.createCourse(course);
  res
    .status(201)
    .json({ success: true, message: "Successfully created course" });
});

const updateCourse = asyncHandler(async (req, res, next) => {
  console.log("Req body", req.body);
  const { course } = req.body;
  const id = req.params.id;

  const recordExist = await courseRepository.checkCourseExists(id);
  if (recordExist) {
    await courseRepository.updateCourse(course,id);
    res
      .status(200)
      .json({ success: true, message: "Successfully updated course" });
  }else{
   next(new ErrorResponse("Product doesnt exist with id",404))
  }
});

const deleteCourse = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const recordExist = await courseRepository.checkCourseExists(id);
  if (recordExist) {
    await courseRepository.deleteCourse(id);
    res
      .status(200)
      .json({ success: true, message: "Successfully deleted course" });
  }else{
   next(new ErrorResponse("Product doesnt exist with id",404))
  }
});

module.exports = {
 getCourses,
 getOneCourse,
 addCourse,
 updateCourse,
 deleteCourse
};
