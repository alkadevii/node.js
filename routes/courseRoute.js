const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController.js');

router.get('/',courseController.getCourses);
router.post('/',courseController.addCourse);
router.get('/:id',courseController.getOneCourse);
router.put('/:id',courseController.updateCourse);
router.delete('/:id',courseController.deleteCourse);

module.exports = router;