import { createMemoryHistory, createRouter } from "vue-router";
import Page from "./components/landing/Page.vue";
const routes = [
    {path: "/", component: Page}
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});
export default router;