// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',

    firebase: {
      config : {
        apiKey: "AIzaSyABx7gxdNHfSbJRkYZVnMyUzjuVUD-lXW8",
        authDomain: "ecommerce-79855.firebaseapp.com",
        projectId: "ecommerce-79855",
        storageBucket: "ecommerce-79855.appspot.com",
        messagingSenderId: "895935910601",
        appId: "1:895935910601:web:0d6cc429f58c459a0d7318"
      }
      
    },

  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
