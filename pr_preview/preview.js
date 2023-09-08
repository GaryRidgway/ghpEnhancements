let links = document.querySelectorAll('.TimelineItem.TimelineItem--condensed .text-right.ml-1 .Link--secondary');
links.forEach(function(link, index){
    link.addEventListener("click", function(event){
        openIframe(event);
    });
});


function openIframe(event) {
    event.preventDefault();
    const link = event.target.href;
    const container = event.target.parentElement.parentElement;
    container.classList.add('pr-preview-parent');
    container.innerHTML =
        '<div class="pr-preview-container">\
        <iframe src="' + link + '" title="description"></iframe>\
        </div>'
        + container.innerHTML;
}