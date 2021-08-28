import { subscribeHeaderEvents } from "../eventsSubscription.js";
import { Header } from "../webApi.js";

const root = document.getElementById('app')

export function NotFound() {
  const layout = `${Header()}<h1>Not Found</h1>`
  root.innerHTML = layout;
  subscribeHeaderEvents()
}