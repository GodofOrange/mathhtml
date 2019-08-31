<template>
  <div class="tinymce-editor">
    <editor v-model="myValue"
            :init="init"
            :disabled="disabled"
            @onClick="onClick">
    </editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
require('tinymce/themes/modern/theme')
require('tinymce/plugins/image')
require('tinymce/plugins/media')
require('tinymce/plugins/table')
require('tinymce/plugins/lists')
require('tinymce/plugins/contextmenu')
require('tinymce/plugins/wordcount')
require('tinymce/plugins/colorpicker')
require('tinymce/plugins/textcolor')
require('tinymce/plugins/paste')

export default {
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: 'lists image media table textcolor wordcount contextmenu powerpaste'
    },
    toolbar: {
      type: [String, Array],
      default: 'undo redo | edit |  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry'
    }
  },
  data () {
    return {
      init: {
        language_url: '/static/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/lightgray',

        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        paste_data_images: true,
        external_plugins: {
          tiny_mce_wiris: 'https://www.wiris.net/demo/plugins/tiny_mce/plugin.js',
          powerpaste: '/static/tinymce/powerpaste/plugin.min.js'
        },
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        }
      },
      myValue: this.value
    }
  },
  mounted () {
    tinymce.init({})
  },
  methods: {
    onClick (e) {
      this.$emit('onClick', e, tinymce)
    },
    clear () {
      this.myValue = ''
    }
  },
  watch: {
    value (newValue) {
      this.myValue = newValue
    },
    myValue (newValue) {
      this.$emit('input', newValue)
    }
  }
}

</script>
<style scoped>
</style>
