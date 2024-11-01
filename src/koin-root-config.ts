import {
  type LifeCycles,
  getAppStatus,
  registerApplication,
  start,
} from 'single-spa';

const applications = [
  {
    name: 'mfe-koral-app-login',
    source: '@koin/mfe-koral-app-login',
    route: ({ pathname }) => pathname === '/',
  },
]

for (const app of applications) {
  registerApplication({
    name: app.name,
    app: () => System.import<LifeCycles>(app.source),
    activeWhen: app.route,
  })
}

start({
  urlRerouteOnly: true,
})

applications.map(({ name }) => 
  console.log(`${name}:`, getAppStatus(name))
);
