<template>
  <tr
    style="
      font-size: 14px;
      font-weight: 400;
      line-height: 15px;
      vertical-align: top;
      text-align: left;
    "
  >
    <td style="font-size: 14px; line-height: 16px">
      <div>
        <p style="display: unset"></p>
        <ul
          :style="{ backgroundImage: `url(${imgFondo})` }"
          style="
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            margin-left: -15em;
            margin-right: -10em;
            padding-bottom: 35em;
            padding-left: 10em;
            width: 100vw;
          "
        >
          <br /><img :src="imgFront" style="width: 60%; margin-left: 20%" /><br />
          <p
            style="
              text-align: left;
              line-height: 0;
              width: 700px;
              height: 100px;
              margin: 45px 0 0 41%;
            "
          >
            <br /><br /><font
              style="
                float: left;
                background-color: rgba(255, 255, 255, 0);
                height: 100px;
                overflow-y: hide;
                overflow-x: hide;
                width: 700px;
                padding: 0;
                display: block;
                margin: 10px 0 0 -64px;
              "
              ><br /><a :href="xURL" rel="nofollow" target="_blank"
                ><img
                  src="https://i.ibb.co/5r6mztq/x.png"
                  style="margin: 0 auto; float: left; width: 12%" /></a
              ><br /><a :href="amazonURL" rel="nofollow" target="_blank"
                ><img
                  src="https://i.ibb.co/x7J16w0/amazon.png"
                  style="margin: 0 0 0 60px; float: left; width: 12%" /></a
              ><br /><a :href="instagramURL" rel="nofollow" target="_blank"
                ><img
                  src="https://i.ibb.co/2WYBdsR/instagram.png"
                  style="margin: 0 0 0 60px; float: left; width: 12%" /></a
              ><br /><br /><a :href="lovenseURL" rel="nofollow" target="_blank"
                ><img
                  src="https://i.ibb.co/VHXWZtp/4.png"
                  style="margin: 0 0 0 60px; float: left; width: 12%" /></a
              ><br /></font
            ><br />
          </p>
        </ul>
        <p></p>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      imgFondo: './img/fondo-perfil-1.png',
      imgFront: 'https://i.ibb.co/y836YK2/Contenido-perfil-2.png',
      xURL: 'https://x.com/emamutDev',
      amazonURL: 'https://www.amazon.com/hz/wishlist/ls/1HEC3UPGS8A7Q',
      instagramURL: 'https://www.instagram.com/emamutdev/',
      lovenseURL: 'https://www.lovense.com/',
    }
  },
}
</script>
