import zepto from 'npm-zepto'

function pageAnimation() {
    return {
        enter: function(element, done, attr) {
            var tag = element[0].children[0].id;
            if (tag === 'tagHome') {
            } 
        },

        leave: function(element, done, attr) {
            var tag = element[0].children[0].id;
            if (tag === 'tagHome') {
            } 
        }
    }
}
export {
    pageAnimation
};
