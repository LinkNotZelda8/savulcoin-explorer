export default class UIManager {
    showToast(data) {
        $("#main-panel").append($("#toast-template").prop("outerHtml"));

    }
}