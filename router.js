const Router = {
    init: () =>{
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const url = e.target.getAttribute('href');
                Router.nav(url);

            })
        })
    },
    nav: (route, addToHistory = true) => { // saves the users navigation path so the back / forward buttons work.
        if(addToHistory){
            history.pushState({ route }, null, route);
        }
    },
};

export default Router;