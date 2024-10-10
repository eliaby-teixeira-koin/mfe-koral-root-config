import {
  type LifeCycles,
  getMountedApps,
  registerApplication,
  start,
} from 'single-spa'

const applications = [
  {
    name: '@koin/app-login',
    source: '@koin/app-login',
    route: ({ pathname }) => pathname === '/login',
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

console.log('Apps loaded: ', getMountedApps())
