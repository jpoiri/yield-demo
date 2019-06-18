import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['tomster'],

    theme: 'canada',

    tomsterImg: computed('theme', function() {
        return `assets/tomsters/${this.theme}.png`;
    }),

    tomsterCaption: computed('theme', function() {
        return `The "${this.theme.capitalize()}" tomster`;
    }),

    click() {
        if (this.clickAction) {
            this.clickAction();
        }
    }
});
