export default class Navigation {
    pages = {}
    

    addPage(path, template) {
        this.pages[path] = template;
    }

    process(path) {
        if (this.pages.hasOwnProperty(path)) {
            return window.main.nunjucksEnv.render(this.pages[path]);
        }

        return this.process("/404");
    }

    processCurrent() {
        let page = window.location.hash.substring(1);

        $("#app").trigger("render", page);
        
        return this.process(page);
    }
}
$(document).ready(() => {
    function onHashChange() {
        $("#app").html(
            window.main.navigation.processCurrent()
        );
    }
    
    $(window).on("hashchange", (e) => {
        onHashChange();
    });

    onHashChange();
});
