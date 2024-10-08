import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "@/modules/ui/toast";
import { ref } from "vue";
import { useQueryClient } from "@tanstack/vue-query";
import { useDisplayManagerStore } from './useDisplayManagerStore';

export const useEditorStore = defineStore("editor", () => {
  const query_client = useQueryClient();
  const display_manager = useDisplayManagerStore();

  const editor_data = ref("");
  const editor_id = ref("");
  const editor_status = ref("");
  const editor_title = ref("");

  function change_editor_title(i: string) {
    editor_title.value = i;
  }

  async function create_article() {
    if (editor_title.value === "") {
      editor_title.value = "sin titulo";
    }
    console.log(editor_status.value)
    const new_article = {
      title: `${Math.floor(1000 + Math.random() * 9000)}-${editor_title.value}`,
      body: editor_data.value,
      status: "desarchivar",
    };
    try {
      await axios.post("/api/articulos", new_article);
      query_client.invalidateQueries({ queryKey: ["allArticles"] });
      toast({
        title: "Se creo el articulo " + new_article.title,
        duration: 2000,
      });
      reset_editor_data()
    } catch (error) {
      console.error("Error al crear el articulo", error);
      toast({
        title: "Error al crear el articulo",
        duration: 2000,
        variant: "destructive",
      });
    }
  }

  async function delete_article() {
    try {
      const confirm = window.confirm(
        "¿Estás seguro de que desea eliminar este artículo?"
      );
      if (confirm) {
        await axios.delete(`/api/articulos/${editor_id.value}`);
        toast({
          title: "Artículo eliminado",
          duration: 2000,
        });
        query_client.invalidateQueries({ queryKey: ["allArticles"] });
        reset_editor_data();
      }
    } catch (error) {
      console.error("Error al eliminar", error);
      toast({
        title: "Error al eliminar",
        duration: 2000,
        variant: "destructive",
      });
    }
  }

  function reset_editor_data() {
    editor_data.value = "";
    editor_title.value = "";
    editor_id.value = "";
    editor_status.value = "";
    display_manager.show_status = false;
    display_manager.show_preview_panel = false;
    display_manager.show_editor_toolbar = true;
  }

  async function set_article_editable(i: string) {
    const response = await axios.get(`/api/articulos/${i}`);
    editor_title.value = response?.data?.title;
    editor_id.value = i;
    editor_data.value = response?.data?.body;
    editor_status.value = response?.data?.status;
    display_manager.show_status = true;
  }

  async function set_status() {
    if (editor_status.value !== "") {
      const updated_article = {
        title: editor_title.value,
        body: editor_data.value,
        status: editor_status.value,
      };

      const capitalizeStatus =
        editor_status.value.charAt(0).toUpperCase() +
        editor_status.value.slice(1);

      try {
        await axios.put(`/api/articulos/${editor_id.value}`, updated_article);
        toast({
          title: capitalizeStatus,
          duration: 2000,
          description:
            "Se ha realizado la acción el día " +
            new Date().toLocaleString("es-ar", {
              month: "long",
              year: "numeric",
              day: "numeric",
              hour12: false,
            }),
        });
        query_client.invalidateQueries({ queryKey: ["allArticles"] });
      } catch (error) {
        console.error("Error deleting job", error);
        toast({
          title: "Error al actualizar",
          duration: 2000,
          variant: "destructive",
        });
      }
    }
  }

  async function update_article() {
    const updated_article = {
      title: editor_title.value,
      body: editor_data.value,
      status: editor_status.value,
    };
    try {
      await axios.put(`/api/articulos/${editor_id.value}`, updated_article);
      toast({
        title: "Se actualizó el artículo " + editor_title.value,
        duration: 2000,
      });
      query_client.invalidateQueries({ queryKey: ["allArticles"] });
    } catch (error) {
      console.error("Error deleting job", error);
      toast({
        title: "Error al actualizar",
        duration: 2000,
        variant: "destructive",
      });
    }
  }

  return {
    editor_data,
    editor_id,
    editor_status,
    editor_title,
    change_editor_title,
    create_article,
    delete_article,
    reset_editor_data,
    set_article_editable,
    set_status,
    update_article,
  };
});
