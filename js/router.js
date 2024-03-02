export class Router {

    routes = {}

    add(route, page) {
        this.routes[route] = page;
    }

    route(event) {
        event = event || window.event
        event.preventDefault();

        this.handle()
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];

        fetch(route).then(data => data.text()).then(dataHTML => {
            document.querySelector("#app").innerHTML = dataHTML;
        })

        console.log(route)
    }
}