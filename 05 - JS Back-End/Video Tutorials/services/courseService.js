const Course = require('../models/Course');
const User = require('../models/User');

async function create(data, userId) {
    let course = new Course({ ...data, creator: userId })
    return await course.save();
}

async function getAll() {
    let courses = await Course.find().sort({ 'createdAt': -1 }).lean();
    return courses;
}

async function getSpecific(id, userId) {
    let course = await Course.findById(id).populate('enrolledUsers').lean();
    course.isEnrolled = course.enrolledUsers.some(x => x._id == userId);
    course.isCreator = course.creator == userId;

    return course;
}

async function update(id, data) {
    return await Course.updateOne({ _id: id }, data);
}

async function deleteHotel(id) {
    return await Course.deleteOne({ _id: id });
}


async function enroll(hotelId, userId) {
    let course = await Course.findById(hotelId);
    if (!course.enrolledUsers.includes(userId)) {
        course.enrolledUsers.push(userId);
    }

    await course.save();
}


module.exports = {
    create,
    getAll,
    getSpecific,
    update,
    deleteHotel,
    enroll,
}
