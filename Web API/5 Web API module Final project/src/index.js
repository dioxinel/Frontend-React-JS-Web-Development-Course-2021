import { Bookmarks } from "./pages/Bookmarks.js";
import { Movie } from "./pages/movie.js";
import { NotFound } from "./pages/NotFound.js";
import { Popular } from "./pages/popular.js"
import { Search } from "./pages/Search.js";

const routes = [
  {
    match: (url) => {
      return url === '/'
    },
    renderRoute: Popular
  },
  {
    match: (url) => {
      return url === '/bookmarks'
    },
    renderRoute: Bookmarks
  },
  {
    match: (url) => {
      return url.includes('/movie/')
    },
    renderRoute: Movie
  },
  {
    match: (url) => {
      return url.includes('/search')
    },
    renderRoute: Search
  },
  {
    match: () => true,
    renderRoute: NotFound
  }
];
 
class Router {
  constructor(routes) {
    this._routes = routes;
 
    window.history.pushState = (data, title, ulr) => {
      History.prototype.pushState.apply(window.history, [data, title, ulr]);
      this.reroute();
    }
 
    window.onpopstate = () => {
      this.reroute();
    }
  }
 
  reroute() {
    const matchedRoute = this._routes.find(route => {
      const matched = route.match(window.location.pathname)
      
      return matched;
    })
 
    matchedRoute.renderRoute();
  }
}
 
const router = new Router(routes);
 
router.reroute();