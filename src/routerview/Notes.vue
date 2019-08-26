<template>
  <div id="notes">
    <div class="notelist">
      <drNavigationNote :notetype="notetype"></drNavigationNote>
    </div>
    <div class="note-content">
      <drFormNote></drFormNote>
    </div>
  </div>
</template>
<script type="text/javascript">
import {mapState} from 'vuex'
import drNavigationNote from '../components/navigation/dr-navigation-note'
import drFormNote from '../components/form/dr-form-note'

export default {
  name: 'notes',
  computed: {
    ...mapState({
      notetype: state => state.note.notetype
    })
  },
  components: {
    drNavigationNote,
    drFormNote
  }
}
</script>
<style lang="less">
  @import "../../static/css/less/besc.less";

  #notes {
    display: flex;
    justify-content: space-between;
    .notelist {
      flex: 0 1 20%;
    }
    .note-content {
      flex: 0 1 78%;
    }
    @media screen and(max-width: @width-max) {
      width: 100%;
    }
  }
</style>
