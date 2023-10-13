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
		images: ['https://dlc4jqsejiyjs.cloudfront.net/ov.png'],
		type: 'Online Events Platform',
		title: 'myOnvent - Online Events',
		client: 'GDM WEBMEDIA',
		roles: ['Frontend Developer'],
		data: [],
	},
	mcdwwc: {
		images: [
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/hero.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/footer.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/mobile-menu.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/login.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/feed.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/atConvention.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/map.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/agenda.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/profile.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/connections.png',
			'https://strapi-bp.s3.eu-central-1.amazonaws.com/notifications.png'
		],
		type: 'McDonald\'s WWC22 (Web & Mobile)',
		title: 'McDonald\'s Corporation Worldwide Conference 2022',
		client: 'GDM WEBMEDIA',
		roles: ['Frontend Developer', 'Mobile Developer', 'App Release Management'],
		data: [],
	},
	deazy: {
		images: ['https://dlc4jqsejiyjs.cloudfront.net/dz.png'],
		type: 'UK Software Services Platform',
		title: 'Deazy',
		client: 'GDM WEBMEDIA',
		roles: ['Frontend Developer'],
		data: [],
	},
	tuune: {
		images: ['https://dlc4jqsejiyjs.cloudfront.net/tu.png'],
		type: 'Online Healthcare Platform',
		title: 'TUUNE',
		client: 'GDM WEBMEDIA',
		roles: ['Frontend Developer'],
		data: [],
	},
	raulVidican: {
		images: ['https://dlc4jqsejiyjs.cloudfront.net/rv.jpg'],
		type: 'Single Page Website',
		title: 'Head Chef - Raul Vidican',
		client: 'Self-Employed',
		roles: ['Frontend Developer'],
		data: [],
	},
	filelist: {
		images: ['https://dlc4jqsejiyjs.cloudfront.net/fl.jpg'],
		type: 'React Native (iOS & Android)',
		title: 'FileList',
		client: 'Self-Employed',
		roles: ['Mobile Developer'],
		data: [],
	},
	imdbAPI: {
		images: ['https://dlc4jqsejiyjs.cloudfront.net/im.jpg'],
		type: 'RESTful API',
		title: 'IMDb Scraper',
		client: 'Self-Employed',
		roles: ['Backend Developer'],
		data: [],
	},
};