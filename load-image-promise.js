let whenCatLoaded =
    loadImagePromise('img/cat.jpg')

whenCatLoaded.then((img) => {
    let imgElement =
        document.createElement("img")
    imgElement.src = img.src
    document.body.appendChild(imgElement)
})