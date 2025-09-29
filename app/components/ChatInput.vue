<script setup lang="ts">
const { isStreaming = false } = defineProps<{
  isStreaming?: boolean
}>()

const emit = defineEmits<{
  (e: 'sendMessage', message: string): void
}>()

const userInputMessage = ref('')

// Ref for the textarea element, used for focusing and dynamic height adjustment
const textareaRef = useTemplateRef('textareaRef')

// On mount, focus the textarea for immediate user input
onMounted(() => {
  textareaRef.value?.focus()
})

// Watch for changes in isStreaming; when streaming ends, refocus the textarea
watch(
  () => isStreaming,
  async (value: boolean) => {
    if (!value) {
      await nextTick()
      textareaRef.value?.focus()
    }
  },
)

/**
 * Handles sending a message:
 * - Prevents sending if input is empty or streaming is active
 * - Emits the 'sendMessage' event with the trimmed message then clears the input
 * - Adjusts textarea height and refocuses for continued input
 */
function handleSendMessage() {
  if (!userInputMessage.value.trim() || isStreaming) {
    return
  }

  emit('sendMessage', userInputMessage.value.trim())
  userInputMessage.value = ''

  nextTick(() => {
    adjustTextareaHeight()
    textareaRef.value?.focus()
  })
}

/**
 * Dynamically adjusts the textarea height to fit content.
 * Resets height to 'auto', then sets it to the scrollHeight for smooth resizing.
 */
async function adjustTextareaHeight(): Promise<void> {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    await nextTick()
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
  }
}
</script>

<template>
  <form class="message-form-wrapper" @submit.prevent="handleSendMessage">
    <!-- TODO: use UTextarea with AI and nuxt-ui MCP -->
    <textarea
      ref="textareaRef"
      v-model="userInputMessage"
      class="message-input"
      :disabled="isStreaming"
      :rows="1"
      placeholder=" Type your message..."
      aria-label="Message input"
      @input="adjustTextareaHeight"
      @keydown.enter.exact.prevent="handleSendMessage"
    />
    <UButton
      type="submit"
      :disabled="!userInputMessage || isStreaming"
      color="primary"
      variant="solid"
      icon="i-heroicons-paper-airplane"
      class="absolute right-3 bottom-3 rounded-full"
      square
    />
  </form>
</template>

<style scoped>
.message-form-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-in-out;
  border: 1px solid var(--ui-border);
  border-radius: 1.8rem;
  overflow: hidden;
  padding: 1rem 2rem 1rem 1.2rem;
  background-color: var(--ui-bg);
}

.message-form-wrapper:focus-within,
.message-form-wrapper:hover {
  transform: none;
}

.message-input {
  width: 100%;
  padding: 0;
  margin-right: 1.5rem;
  resize: none;
  background-color: transparent;
  outline: none;
}

.message-form-wrapper:hover {
  outline: none;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.message-input:disabled {
  cursor: not-allowed;
}
</style>
