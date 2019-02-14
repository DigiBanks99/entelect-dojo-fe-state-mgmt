# Entelect Dojo: Front-end State Management

Building front-end apps no longer involves rendering a simplified version of a client's website, but has evolved to the point where we are building complex, multi-module applications that need to provide features across multiple device types. These apps need to be robust, provide a great user experience and be easy to build and extend. A lot of focus of the modern web development frameworks are concerned with building re-usable components and to provide the user with sufficient abstraction that they can focus on creating great features. When a developer learns such a new framework, they build a small todo app and then stumble into the vast world of enterprise requirements and quickly these frameworks become a mess. This dojo will try and teach you what the frameworks' getting-started pages do not.

## Breakdown

This dojo wil follow the following structure:

- Why do I need FE State Management?
- What are our objectives?
- Strategies: Flux, Redux & Elm
- Asynchronous: Thunks, Saga and Observables

We will be building a football (_soccer_) information page. The page will allow users to view Leagues, Teams, Players. They should be able to see the standings of the league plus the matches for the season: past future and present.

### Exercises

We will attempt to extend the app by means of `Redux`.

1. League - The selected one
   When a user selects a league, all context in the application must switch over to the selected league
2. Team - The nested one
   When a user selects a team, the context should switch again, but the league context must be kept
3. Player - The transferred one
   When a player is transferred to a new team, the context must of the team and or league must change, but the player context must be kept
4. Match - The scoring one
   When a match is underway and a player does something that adds a stat, the stat must be reflected on the player, the match, the team and the league

## Preparation

To make this easier on all of us, go through the following resources and then think about where you have encountered similar problems:

- [Managing State In Angular Apps](https://blog.nrwl.io/managing-state-in-angular-applications-22b75ef5625f)
- [Stop pushing the web forward](https://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html)
- [Understanding state management, and why you never will](https://medium.com/fluttery/understanding-state-management-and-why-you-never-will-dd84b624d0e)

Then read through these resources to ease the learning process:

- [Redux](https://redux.js.org/introduction/getting-started)
- [Flux](https://facebook.github.io/flux/docs/overview.html#content)

You will need the following applications installed:

- NodeJs
- .NET Core 2.1.x

Please clone [https://github.com/DigiBanks99/entelect-dojo-fe-state-mgmt.git](https://github.com/DigiBanks99/entelect-dojo-fe-state-mgmt.git) beforehand and checkout branch `exercise/1-league-start`.

## Additional Information

Each web framework has their own implementation of Redux.

- React - [`Redux`](https://redux.js.org/introduction/getting-started)
- Angular (2+) - [`ngrx`](https://gist.github.com/btroncone/a6e4347326749f938510)
- AngularJs - [`ng-redux`](https://github.com/angular-redux/ng-redux)
- Vue - [`vuex`](https://vuex.vuejs.org/) _NOTE:_ not exactly redux or flux, but inspired by them
