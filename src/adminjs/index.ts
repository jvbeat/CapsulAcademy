import AdminJs from 'adminjs';
import AdminJsExpress from '@adminjs/express';
import AdminJsSequelize from '@adminjs/sequelize';
import { sequelize } from '../database';
import { adminJsResources } from './resources';
import { Category, Course, Episode, User } from '../models'
import bcrypt from 'bcrypt';
import { locale } from './locale'

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
  databases: [sequelize],
  resources: adminJsResources,
  rootPath: '/admin',
  dashboard: {
    component: AdminJs.bundle('./components/Dashboard'),
		handler: async (req, res, context) => {
      const courses = await Course.count()
      const episodes = await Episode.count()
      const category = await Category.count()
      const standardUsers = await User.count({ where: { role: 'user' } })

      res.json({
        'Cursos': courses,
        'Episódios': episodes,
        'Categorias': category,
        'Usuários': standardUsers
      })
    },
  },
  locale: locale,
	branding: {
    companyName: 'Capsul Academy',
    logo: '/logo.png',
    theme: {
      colors: {
        primary100: '#218EA1',
	      primary80: '#45BBC0',
	      primary60: '#A3CDDD',
	      primary40: '#E3F3FA',
		    primary20: '#156885',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  }
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } })

    if (user && user.role === 'admin') {
      const matched = await bcrypt.compare(password, user.password)

      if (matched) {
        return user
      }
    }

    return false
  },
  cookiePassword: 'senha-do-cookie'
}, null, {
	resave: false,
	saveUninitialized: false
})