import {
  registerApplication, start, LifeCycles,
  getMountedApps
} from "single-spa";

const aplications = [
  { 
    name: '@koin/app-login', 
    source: '@koin/app-login', 
    route: ({ pathname }) => pathname === '/login' 
  },
  { 
    name: '@koin/app1', 
    source: '@koin/app1', 
    route: ({ pathname }) => pathname === '/app1' 
  },
];

aplications.forEach((app) => registerApplication({
  name: app.name,
  app: () => System.import<LifeCycles>(app.source),
  activeWhen: app.route
}));

start({
  urlRerouteOnly: true,
});

console.log("Apps loaded: ", getMountedApps())