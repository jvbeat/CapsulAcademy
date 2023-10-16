import AdminJs from 'adminjs';
import AdminJsExpress from '@adminjs/express';
import AdminJsSequelize from '@adminjs/sequelize';
import { sequelize } from '../database';
import { adminJsResources } from './resources';
import { User } from '../models';
import bcrypt from 'bcrypt';
import { locale } from './locale'

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
  databases: [sequelize],
  rootPath: '/admin',
  resources: adminJsResources,
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