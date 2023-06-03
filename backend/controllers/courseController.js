const Course = require("../model/courseModel");
const mongoose = require("mongoose");

//Gets a specific course from mongoID
const showCourse = async (req, res) => {
  const { id } = req.params;
  console.log("getting course from ID: ", id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Course" });
  }
  const course = await Course.findById(id);

  if (!course) {
    return res.status(404).json({ error: "No such Course" });
  }
  res.status(200).json({
    course: course.faculty + course.course_code,
  });
};

//Gets all Courses
const indexCourse = async (req, res) => {
  console.log("Getting all courses")
  const courses = await Course.find({}).sort({ createdAt: -1 });
  res.status(200).json(courses);
};

const createCourse = async (req, res) => {
  try {
    //Each property corresponds to the JSON properties from req.body
    const { 
        registration_term,
        faculty,
        course_code,
        section,
        tut_id,
        crn,
        title,
        course_description,
        precludes_string,
        prereq_courses,
        course_credit_value,
        schedule_type,
        status,
        section_information,
        year_in_program,
        level_restriction,
        degree_restriction,
        major_restriction,
        program_restriction,
        department_restriction,
        faculty_restriction,
        start_date,
        end_date,
        building,
        room,
        schedule,
        instructor,
        instructor_status} = req.body;

    // Create a new course object, contains all the properties from Schema
    const newCourse = await Course.create({
        registration_term,
        faculty,
        course_code,
        section,
        tut_id,
        crn,
        title,
        course_description,
        precludes_string,
        prereq_courses,
        course_credit_value,
        schedule_type,
        status,
        section_information,
        year_in_program,
        level_restriction,
        degree_restriction,
        major_restriction,
        program_restriction,
        department_restriction,
        faculty_restriction,
        start_date,
        end_date,
        building,
        room,
        schedule,
        instructor,
        instructor_status
    });

    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating course" });
  }
};

const deleteCourse = async(req,res) =>{
  try{
    const {id} = req.params

    const deleted_course = await Course.findByIdAndRemove(id)

    //Checks if its null
    if(!deleted_course){
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json({ message: "Course deleted", deleted_course });

  } catch(error){

    console.error(error);
    return res.status(500).json({ message: "Error deleting course" });
  }
  
}


const updateCourse = async (req,res) => {
  try{
    const {id} = req.params
    const updatedCourse = await Course.findByIdAndUpdate(id,{
      ...req.body //Spreads all the properties of the req object and update the corresponding fields
    })

    //Checks if its null
    if(!updatedCourse){
      return res.status(404).json({ message: "Could not find Course to Update" });
    }

    res.status(200).json(updatedCourse);
    print("Sucessfully Updated Course")
  }
  catch(error){
    console.error(error);
    //Error can be caused by req.body not following the Schema
    return res.status(500).json({ message: "Error Updating course" });
  }


}



module.exports = { showCourse, indexCourse,createCourse,deleteCourse,updateCourse };
