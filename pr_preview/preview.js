let links = document.querySelectorAll('.TimelineItem.TimelineItem--condensed .text-right.ml-1 .Link--secondary');
links.forEach(function(link, index){
    link.addEventListener("click", function(event){
        openIframe(event);
        const buttons = document.querySelectorAll('.pr-preview-container button');
        buttons.forEach(function(button) {
            button.addEventListener("click", function(event){closeIframe()});
        });
    });
});


function openIframe(event) {
    event.preventDefault();
    const link = event.target.href;
    const container = event.target.parentElement.parentElement;
    container.classList.add('pr-preview-parent');
    container.innerHTML =
        '<div class="pr-preview-container">\
            <div class="display-container clearfix ppc-3 ppc-md-4 ppc-lg-5">\
                <div class="button-container">\
                <button>X</button>\
                </div>\
                <iframe\
                    src="' + link + '"\
                    title="description"\
                ></iframe>\
            </div>\
        </div>'
        + container.innerHTML;
}

function closeIframe() {
    const iframes = document.querySelectorAll('.pr-preview-container');
    iframes.forEach(function(frame) {
        frame.remove();
    });

    const parents = document.querySelectorAll('.pr-preview-parent');
    parents.forEach(function(parent) {
        parent.classList.remove('pr-preview-parent');
    });
}