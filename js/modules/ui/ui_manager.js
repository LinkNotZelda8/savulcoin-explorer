export default class UIManager {
    fadeAndDisable(element) {  
        element.animate({ opacity: 0.5 }, 100); // Fade a little bit
        element.prop("disabled", true);
    }

    unfade(element) {
        element.animate({ opacity: 1 }, 100);
        element.prop("disabled", false);
    }
}