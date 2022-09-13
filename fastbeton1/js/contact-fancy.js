Fancybox.bind("[data-fancybox]", {
    Image: {
        Panzoom: {
            zoomFriction: 0.7,
            maxScale: function () {
                return 2;
            },
        },
    },
});