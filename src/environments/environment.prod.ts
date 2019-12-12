export const environment = {
	production: true,
	app: {
		name: 'LANA Business Directory',
		subtitle: 'Admin Portal',
		slogan: 'Admin Portal'
	},
	fire: {
		auth: {
			apiKey: 'AIzaSyAC261wN0wwuNdgm9py8iXMxUGg0y5GBpw',
			authDomain: 'business-directory-adm-stage.firebaseapp.com',
			databaseURL: 'https://lana-business-directory.firebaseio.com',
			projectId: 'lana-business-directory',
			storageBucket: 'lana-business-directory.appspot.com',
			messagingSenderId: '773896215295'
		}
	},
	s3: {
		accessKeyId: 'AKIAJY6GD4REGAP7BPHQ',
		secretAccessKey: '',
		bucket: 'dev.appseed.io/mobile-apps/businessdirectory-frb-admin'
	}
};
