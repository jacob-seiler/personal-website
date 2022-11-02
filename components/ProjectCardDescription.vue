<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    }
  },
  // https://stackoverflow.com/questions/68127272/vue-js-3-property-projects-does-not-exist-on-type-createcomponentpublicinst
  computed: {
    description (): string {
      return this.value
    }
  },
  render () {
    const text = this.description.split('**').map((seg, i) => {
      if (i % 2 === 0) { return seg }
      return h('b', { class: 'text-white' }, seg)
    })

    return h('p', { class: 'text-off-white leading-tight text-sm tiny:text-sm' }, text)
  }
})
</script>
