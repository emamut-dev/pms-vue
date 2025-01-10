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
          :style="{ backgroundImage: `url(${formData.imgFondo})` }"
          style="
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            padding-bottom: 35em;
            padding-left: 10em;
            width: 100vw;
          "
        >
          <br /><img :src="formData.imgFront" style="width: 60%; margin-left: 21rem" /><br />
          <p
            style="
              text-align: left;
              line-height: 0;
              width: 700px;
              height: 100px;
              margin: 45px 0 0 41%;
            "
          >
            <br /><br /><span
              style="
                float: left;
                background-color: rgba(255, 255, 255, 0);
                height: 100px;
                overflow-y: hide;
                overflow-x: hide;
                width: 700px;
                padding: 0;
                display: block;
                margin: 10px 0 0 -8px';
              "
              ><br /><a :href="formData.xURL" rel="nofollow" target="_blank"
                ><img
                  :src="socialNetworksIcons[formData.iconsColor].x"
                  style="margin: 0 auto; float: left; width: 12%" /></a
              ><br /><a :href="formData.amazonURL" rel="nofollow" target="_blank"
                ><img
                  :src="socialNetworksIcons[formData.iconsColor].amazon"
                  style="margin: 0 0 0 60px; float: left; width: 12%" /></a
              ><br /><a :href="formData.instagramURL" rel="nofollow" target="_blank"
                ><img
                  :src="socialNetworksIcons[formData.iconsColor].instagram"
                  style="margin: 0 0 0 60px; float: left; width: 12%" /></a
              ><br /><br /><a :href="formData.lovenseURL" rel="nofollow" target="_blank"
                ><img
                  :src="socialNetworksIcons[formData.iconsColor].lovense"
                  style="margin: 0 0 0 60px; float: left; width: 12%" /></a
              ><br /></span
            ><br />
          </p>
        </ul>
        <p></p>
      </div>
    </td>
  </tr>
</template>

<script>
import { useProfile1Store } from '@/stores/profile1'

export default {
  setup() {
    const { formData, socialNetworksIcons } = useProfile1Store()
    return { formData, socialNetworksIcons }
  },
}
</script>
