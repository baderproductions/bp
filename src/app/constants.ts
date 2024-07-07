import { addMediaPrefix } from "../utils/utils";

export const ROUTES = {
	root: '/',
	project: '/project/:slug',
	privacy: '/privacy',
};

export const PROJECTS = {
	myOnvent: 'myonvent-online-events',
	mcdwwc: 'mcd-wwc22-orlando',
	deazy: 'deazy-uk-marketplace',
	tuune: 'tuune-healt-platform',
	raulVidican: 'chef-raul-vidican',
	filelist: 'filelist-app-rn',
	imdbAPI: 'imdb-scraper-api',
};

export const PROJECT_DATA = {
	myOnvent: {
		images: [addMediaPrefix('ov.png')],
		type: 'Online Events Platform',
		title: 'myOnvent - Online Events',
		client: 'GDM WEBMEDIA',
		roles: ['Frontend Developer'],
		data: [],
	},
	mcdwwc: {
		images: [
			addMediaPrefix('hero.png'),
			addMediaPrefix('footer.png'),
			addMediaPrefix('mobile-menu.png'),
			addMediaPrefix('login.png'),
			addMediaPrefix('feed.png'),
			addMediaPrefix('atConvention.png'),
			addMediaPrefix('map.png'),
			addMediaPrefix('agenda.png'),
			addMediaPrefix('profile.png'),
			addMediaPrefix('connections.png'),
			addMediaPrefix('notifications.png')
		],
		type: 'McDonald\'s WWC22 (Web & Mobile)',
		title: 'McDonald\'s Corporation Worldwide Conference 2022',
		client: 'GDM WEBMEDIA',
		roles: ['Frontend Developer', 'Mobile Developer', 'App Release Management'],
		data: [],
	},
	deazy: {
		images: [addMediaPrefix('dz.png')],
		type: 'UK Software Services Platform',
		title: 'Deazy',
		client: 'GDM WEBMEDIA',
		roles: ['Frontend Developer'],
		data: [],
	},
	tuune: {
		images: [addMediaPrefix('tu.png')],
		type: 'Online Healthcare Platform',
		title: 'TUUNE',
		client: 'GDM WEBMEDIA',
		roles: ['Frontend Developer'],
		data: [],
	},
	raulVidican: {
		images: [addMediaPrefix('rv.jpg')],
		type: 'Single Page Website',
		title: 'Head Chef - Raul Vidican',
		client: 'Self-Employed',
		roles: ['Frontend Developer'],
		data: [],
	},
	filelist: {
		images: [addMediaPrefix('fl.jpg')],
		type: 'React Native (iOS & Android)',
		title: 'FileList',
		client: 'Self-Employed',
		roles: ['Mobile Developer'],
		data: [],
	},
	imdbAPI: {
		images: [addMediaPrefix('im.jpg')],
		type: 'RESTful API',
		title: 'IMDb Scraper',
		client: 'Self-Employed',
		roles: ['Backend Developer'],
		data: [],
	},
};