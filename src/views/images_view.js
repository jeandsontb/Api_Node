"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(image) {
        return {
            id: image.id,
            url: `http://garangasclub-com-br.umbler.net/${image.path}`,
        };
    },
    renderMany(images) {
        return images.map(image => this.render(image));
    }
};
