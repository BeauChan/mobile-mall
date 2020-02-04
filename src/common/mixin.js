import ToTop from "components/content/toTop/ToTop";

export const backToTop = {
  data() {
    return {
      isShowTop: false
    }
  },
  components: {
    ToTop
  },
  methods:{
    topClick() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
