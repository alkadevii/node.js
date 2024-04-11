const pool = require('../config/db.js');
const courseQueries = require('../queries/courseQuerie.js');

const getAllCourses = () => {
    return new Promise((resolve,reject) => {
        pool.query(courseQueries.getAllCourses,(error,results) => {
            if (error) {
                reject(error);
            }
            else{
                resolve(results.rows);
            }
        })
    })
}
const getOneCourse = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(courseQueries.getCourseById, [id], (error, results) => {
            if (error){
                reject(error);
            }
            else{
                resolve(results.rows);
            }
        })
    });
}
const createCourse = (course) => {
    return new Promise ((resolve,reject) => {
        pool.query(courseQueries.addCourseQuery,[course],(error,results) =>{
            if (error){
                reject(error);
            }else{
                resolve(true);
            }
         })
    })
}
const checkCourseExists = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(courseQueries.getCourseById, [id], (error, results) => {
            if (error){
                resolve(false);
            }
            else{
                resolve(results.rows.length>0);
            }
        })
    });
}
const updateCourse = (course,id) => {
    return new Promise((resolve,reject) => {
        pool.query(courseQueries.updateCourseQuery, [course,id], (error, results) => {
            if (error){
                reject(error);
            }else{
                resolve(true);
            }
         })
        
    });
}
const deleteCourse = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(courseQueries.deleteCourseQuery, [id], (error, results) => {
            if (error){
                reject(error);
            }else{
                resolve(true);
            }
         })
    });
}


module.exports={
    getAllCourses,
    getOneCourse,
    createCourse,
    updateCourse,
    deleteCourse,
    checkCourseExists
}