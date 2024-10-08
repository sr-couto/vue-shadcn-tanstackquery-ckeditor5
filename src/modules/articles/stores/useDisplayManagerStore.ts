import { defineStore } from "pinia";
import { ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanLg = breakpoints.greater("lg");

export const useDisplayManagerStore = defineStore("display_manager", () => {
  const fixed_documentacion_en_curso = ref(false);
  const show_documentacion_en_curso = ref(largerThanLg.value ? true : false);
  const show_editor_toolbar = ref(true);
  const show_status = ref(false);
  const show_preview_panel = ref(false);

  function toggle_preview_panel() {
    show_preview_panel.value = !show_preview_panel.value;
  }

  return {
    fixed_documentacion_en_curso,
    show_documentacion_en_curso,
    show_editor_toolbar,
    show_preview_panel,
    show_status,
    toggle_preview_panel,
  };
});
