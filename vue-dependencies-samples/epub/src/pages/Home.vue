<template>
    <div>
        <select id="toc"></select>
        <div id="container" style="width: 1000px; height: 600px;"></div>
        <a id="prev" href="#prev" class="arrow">‹</a>
        <a id="next" href="#next" class="arrow">›</a>

        <!-- 封面-->
        <img :src="coverUrl"/>
    </div>
</template>

<script>
    import epub from 'epubjs';

    function getCoverURL(book, callback) {
        book.coverUrl().then(function (blobUrl) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function () {
                var recoveredBlob = xhr.response;
                var reader = new FileReader();
                reader.onload = function () {
                    callback && callback(reader.result);
                };
                reader.readAsDataURL(recoveredBlob);
            };
            xhr.open('GET', blobUrl);
            xhr.send();
        });
    }


    export default {
        name: "Home",
        data() {
            return {
                coverUrl: ''
            }
        },
        mounted() {
            const book = epub("../book/test.epub");
            const rendition = book.renderTo("container", {
                method: "default",
                width: "100%",
                height: 600,
                spread: "always"
            });

            console.log(book);
            console.log(rendition)

            // 获取封面
            book.coverUrl().then((coverUrl) => {
                console.log('coverUrl =>', coverUrl);
                this.coverUrl = coverUrl;
            });

            // 书籍信息
            book.loaded.metadata.then((metadata)=> {
                console.log('metadata => ', metadata);
                /*{
                    "title": "修真高手混都市",
                    "creator": "猿猴仙人",
                    "description": "修真高手混都市",
                    "pubdate": "2017-01-04T00:55:39+08:00",
                    "publisher": "qinkan.net",
                    "identifier": "ixdzs:150320",
                    "language": "zh-cn",
                    "rights": "",
                    "modified_date": "",
                    "layout": "",
                    "orientation": "",
                    "flow": "",
                    "viewport": "",
                    "media_active_class": "",
                    "spread": "",
                    "direction": null
                }*/
            });


            // 销毁
            // book.destroy();

            /*book.getMetadata().then(meta => {
                console.log("meta => ", meta)
                /!*getCoverURL(this.book, cover => {
                    console.log('首页封面')
                    console.log(cover)
                    bookDb.init(() => {
                        bookDb.addBook({
                            id: '' + new Date().getTime(),
                            name: meta.bookTitle,
                            author: meta.creator,
                            content: content,
                            cover: cover
                        }, () => {
                            bookDb.getBooks(data => {
                                console.log('获取所有书籍')
                                this.books = data
                                console.log(data)
                            })
                        })
                    })
                })*!/
            });*/

            var currentSectionIndex = 10;

            rendition.display(currentSectionIndex);

            /*book.ready.then(() => {

                var next = document.getElementById("next");

                next.addEventListener("click", function(e){
                    book.package.metadata.direction === "rtl" ? rendition.prev() : rendition.next();
                    e.preventDefault();
                }, false);

                var prev = document.getElementById("prev");
                prev.addEventListener("click", function(e){
                    book.package.metadata.direction === "rtl" ? rendition.next() : rendition.prev();
                    e.preventDefault();
                }, false);

                var keyListener = function(e){

                    // Left Key
                    if ((e.keyCode || e.which) == 37) {
                        book.package.metadata.direction === "rtl" ? rendition.next() : rendition.prev();
                    }

                    // Right Key
                    if ((e.keyCode || e.which) == 39) {
                        book.package.metadata.direction === "rtl" ? rendition.prev() : rendition.next();
                    }

                };

                rendition.on("keyup", keyListener);
                document.addEventListener("keyup", keyListener, false);

            })*/

            /* var title = document.getElementById("title");
             rendition.on("rendered", function(section){
                 var current = book.navigation && book.navigation.get(section.href);

                 if (current) {
                     var $select = document.getElementById("toc");
                     var $selected = $select.querySelector("option[selected]");
                     if ($selected) {
                         $selected.removeAttribute("selected");
                     }

                     var $options = $select.querySelectorAll("option");
                     for (var i = 0; i < $options.length; ++i) {
                         let selected = $options[i].getAttribute("ref") === current.href;
                         if (selected) {
                             $options[i].setAttribute("selected", "");
                         }
                     }
                 }
             });*/

            /*rendition.on("relocated", function(location){
                console.log(location);

                var next = book.package.metadata.direction === "rtl" ?  document.getElementById("prev") : document.getElementById("next");
                var prev = book.package.metadata.direction === "rtl" ?  document.getElementById("next") : document.getElementById("prev");

                if (location.atEnd) {
                    next.style.visibility = "hidden";
                } else {
                    next.style.visibility = "visible";
                }

                if (location.atStart) {
                    prev.style.visibility = "hidden";
                } else {
                    prev.style.visibility = "visible";
                }

            });

            rendition.on("layout", function(layout) {
                let viewer = document.getElementById("viewer");

                if (layout.spread) {
                    viewer.classList.remove('single');
                } else {
                    viewer.classList.add('single');
                }
            });

            window.addEventListener("unload", function () {
                console.log("unloading");
                this.book.destroy();
            });

            book.loaded.navigation.then(function(toc){
                var $select = document.getElementById("toc"),
                    docfrag = document.createDocumentFragment();

                toc.forEach(function(chapter) {
                    var option = document.createElement("option");
                    option.textContent = chapter.label;
                    option.setAttribute("ref", chapter.href);

                    docfrag.appendChild(option);
                });

                $select.appendChild(docfrag);

                $select.onchange = function(){
                    var index = $select.selectedIndex,
                        url = $select.options[index].getAttribute("ref");
                    rendition.display(url);
                    return false;
                };

            });*/


        }
    }
</script>

<style scoped>

</style>
