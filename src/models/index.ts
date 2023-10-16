import { Episode } from './Episode';
import { Category } from './Category'
import { Course } from './Course'
import { User } from './User';

Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)

Episode.belongsTo(Course)

export {
  Category,
  Course,
  Episode,
  User
}