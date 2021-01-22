export default class UIManager {
    fadeAndDisable(element) {  
        element.animate({ opacity: 0.5 }, 100); // Fade a little bit
        element.prop("disabled", true);
    }

    unfade(element) {
        element.animate({ opacity: 1 }, 100);
        element.prop("disabled", false);
    }

    modalYesNo(title, body, yesCallback) {
        let modelId = "modal-" + Math.random().toString().replace(".", ""); // Create a random id

        $("#main-panel").append(
            window.main.nunjucksEnv.render("modal-yes-no.html", { title: title, body: body, modal_id: modelId })
        );

        $("#yes-button-" + modelId).click(() => {
            $("#" + modelId).modal("hide");
            yesCallback();
        }) 

        $("#" + modelId).modal("show");
    }
}