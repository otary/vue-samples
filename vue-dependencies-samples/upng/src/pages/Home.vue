<template>
    <div>
        Home
      <img id="test" src="data:image/png;base64,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">
    </div>
</template>

<script>
    import UPNG from '../utils/UPNG'


    function arraybuffer2base64(res) {
      var binary = "";
      var bytes = new Uint8Array(res);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      var base64 = `data:image/png;base64,${window.btoa(binary)}`
      return base64;
    }




    export default {
        name: "Home",
        mounted() {
          const img = document.getElementById("test");
          img.onload = function () {
            const canvas = document.createElement('canvas');
            // 根据图片大小设置canvas大小
            canvas.width = img.width;
            canvas.height = img.height;

            const context = canvas.getContext("2d");
            // canvas绘制图片
            context.drawImage(this, 0, 0, img.width, img.height);
            // 通过canvas获取imageData
            const imageData = context.getImageData(0, 0, img.width, img.height);

            canvas.toBlob((blob)=> {
              const fileReader = new FileReader();
              fileReader.readAsArrayBuffer(blob);
              fileReader.onload = function (e) {
                console.log()
                const ab = e.target.result;
                const rgba8 = UPNG.toRGBA8(UPNG.decode(ab));

                console.log(rgba8)
                const a =  UPNG.encode([
                  rgba8
                ], 300, 300, 0)

                console.log(arraybuffer2base64(a))
              }
            })

           //
          }


          console.log(UPNG)
        }
    }
</script>

<style scoped>

</style>
