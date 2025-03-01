<script>
import TextInput from "@/Components/TextInput.vue";
import { Checkbox } from "primevue";
import { debounce } from "lodash";

export default {
    name: "Option",
    components: { TextInput, Checkbox },
    props: {
        option: Object,
    },
    created() {
        this.update = debounce(this._update, 500);
    },
    mounted() {
        this.option_value = this.option.option;
        this.is_correct = !!this.option.is_correct;
    },
    data() {
        return {
            option_value: "",
            is_correct: false,
        };
    },
    methods: {
        _update() {
            axios.post(route("admin.options.update", this.option.id), {
                option: this.option_value,
                is_correct: this.is_correct,
            });
        },
    },
};
</script>

<template>
    <div class="p-2">
      <label>Odpowiedź:</label>
        <TextInput
          style="width: 100%;"
            v-model="option_value"
            placeholder="Option"
            @change="update"
            @keyup="update"
        />

        <div class="grid grid-cols-2 gap-2 py-2">
            <div class="flex items-center">
                <label class="pr-2" :for="'is_correct' + this.option.id">
                    Poprawna?
                </label>
                <Checkbox
                    v-model="is_correct"
                    :inputId="'is_correct' + this.option.id"
                    binary
                    @change="update"
                />
            </div>
            <div style="text-align: right">
                <a :href="route('admin.options.destroy', this.option.id)">
                    <Button
                        icon="pi pi-trash"
                        class="p-button-rounded p-button-danger"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
