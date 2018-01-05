// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    tenant: 'gxgauthtest.onmicrosoft.com',
    clientID: '76eab466-4dfe-4766-a1b3-0085145d8fbc',
    signUpSignInPolicy: 'B2C_1_sign-in',
    b2cScopes: ['https://gxgauthtest.onmicrosoft.com/TestWebApi/core.api'],
    webApi: 'http://localhost:5001'
};
