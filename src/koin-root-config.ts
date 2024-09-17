import {
  registerApplication, start, LifeCycles
} from "single-spa";

// registerApplication({
//   name: "@koin/appbase",
//   app: () => System.import<LifeCycles>("@koin/appbase"),
//   activeWhen: ['/'],
// });

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ({ pathname }) => pathname === '/',
// });

// registerApplication({
//   name: "@koin/app1",
//   app: () => System.import<LifeCycles>("@koin/app1"),
//   activeWhen: ({ pathname }) => pathname === '/app1',
// });

// registerApplication({
//   name: "@koin/app2",
//   app: () => System.import<LifeCycles>("@koin/app2"),
//   activeWhen: ({ pathname }) => pathname === '/app2',
// });

// registerApplication({
//   name: "@koin/app3",
//   app: () => System.import<LifeCycles>("@koin/app3"),
//   activeWhen: ({ pathname }) => pathname === '/app3',
// });

const aplications = [
  { name: '@koin/appbase', source: '@koin/appbase', route:  ['/'] },
  { name: '@single-spa/welcome', source: 'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js', route: ({ pathname }) => pathname === '/' },
  { name: '@koin/app1', source: '@koin/app1', route: ({ pathname }) => pathname === '/app1' },
  { name: '@koin/app2', source: '@koin/app2', route: ({ pathname }) => pathname === '/app2' },
  { name: '@koin/app3', source: '@koin/app3', route: ({ pathname }) => pathname === '/app3' },
];

aplications.forEach((app) => registerApplication({
  name: app.name,
  app: () => System.import<LifeCycles>(app.source),
  activeWhen: app.route
}));

start({
  urlRerouteOnly: true,
});
