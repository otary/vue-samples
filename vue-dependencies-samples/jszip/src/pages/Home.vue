<template>
  <div ref="wrapper" :style="{width: '100wh', height: '100vh'}">

  </div>
</template>

<script>
import JSZip from "jszip";
import { saveAs } from 'file-saver';

export default {
  name: "Home",
  mounted() {

    document.ondragover = function (e) {
      e.preventDefault();
    };
    document.ondrop = function (e) {
      e.preventDefault();
    };

    const wrapper = this.$refs.wrapper;
    wrapper.ondragenter = function (e) {
      e.dataTransfer.dropEffect = 'copy';
      this.style.border = '2px dashed #aaa';
    };

    wrapper.ondragleave = function (e) {
      this.style.border = '0';
    };

    wrapper.ondrop = function (e) {
      this.style.border = '0';

      const files = e.dataTransfer.files;
      const file = files[0];
      JSZip.loadAsync(file)
          .then(function (zip) {
            zip.forEach((relativePath, zipEntry) => {
              console.log("relativePath: ", relativePath);
              console.log("zipEntry: ", zipEntry);

             /* zip.file(zipEntry.name).async('blob').then((a)=> {
                console.log(a)
                //saveAs(a, 'a.txt')
              });*/
            //  console.log(typeof  zipEntry)

            //
              //saveAs(zipEntry._data, "a.txt");
            })

          }, function (e) {
            console.error("------e-------", e)
            /* $result.append($("<div>", {
               "class" : "alert alert-danger",
               text : "Error reading " + f.name + ": " + e.message
             }));*/
          });
    }


  }
}
</script>

<style scoped>

</style>
